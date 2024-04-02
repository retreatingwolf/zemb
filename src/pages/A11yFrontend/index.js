import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  List,
  Modal,
  Pagination, Table,
  Toast,
  Upload
} from "@douyinfe/semi-ui";
import "./index.scss"
import {IconApps, IconBolt, IconFile} from "@douyinfe/semi-icons";
import {useMemo, useState} from "react";
import axios from "axios";
import {config} from "../../utils";

const A11yFrontend = () => {
  // 配置对话框是否开启
  const [showConfig, setShowConfig] = useState(false);

  // 配置选项
  const [username, setUsername] = useState("");
  const [src, setSrc] = useState(false);  // 是否开启源码分析
  const [verbose, setVerbose] = useState(false);  // 是否输出中间过程
  const [cdIssue, setCdIssue] = useState(true);
  const [colorIssue, setColorIssue] = useState(true);
  const [disabledIssue, setDisabledIssue] = useState(true);
  const [inaccessIssue, setInaccessIssue] = useState(true);
  const [missingLabelIssue, setMissingLabelIssue] = useState(true);
  const [misuseIssue, setMisuseIssue] = useState(true);

  // 结果数据
  const [apk, setApk] = useState("");  // 远程目录上的 apk 路径
  const [issues, setIssues] = useState([]);  // issues
  const [statistic, setStatistic] = useState([]);  // 统计数据
  const [hideResult, setHideResult] = useState(true);  // 是否展示结果框

  /**
   * 开始分析
   * */
  const start_analysis = (e) => {
    e.preventDefault();
    if (username === '') {
      Toast.warning("请输入一个 username");
    }
    axios.post(`${config.baseURL}/api/xfinder/start_analysis`, {
      username: username,
      src: src ? 1 : 0,
      verbose: verbose ? 1 : 0,
      cdIssue: cdIssue ? 1 : 0,
      colorIssue: colorIssue ? 1 : 0,
      disabledIssue: disabledIssue ? 1 : 0,
      inaccessIssue: inaccessIssue ? 1 : 0,
      missingLabelIssue: missingLabelIssue ? 1 : 0,
      misuseIssue: misuseIssue ? 1 : 0,
    }).then(res => {
      if (res.data.code === 2000) {
        Toast.info("正在分析");
      }
    }).catch(err => {
      Toast.info(err);
    })
  };

  /**
   * 获取分析结果
   * */
  const show_results = (e) => {
    e.preventDefault();
    if (username === '') {
      Toast.warning("请输入一个 username");
      return;
    }

    axios.post(`${config.baseURL}/api/xfinder/get_issues`, {
      username: username
    }).then(res => {
      if (res.data.code === 2000) {
        const issues_json = res.data.data
        setApk(issues_json.name);
        setIssues(issues_json.issues);
      } else {
        Toast.warning(res.data.message);
      }
    }).catch(err => {
      Toast.warning(err);
    });

    axios.post(`${config.baseURL}/api/xfinder/get_statistic`, {
      username: username
    }).then(res => {
      if (res.data.code === 2000) {
        setStatistic(res.data.data.statistic);
      } else {
        Toast.warning(res.data.message);
      }
    }).catch(err => {
      Toast.warning(err);
    });

    setHideResult(false);
  }

  const upload_apk = ({ file, onError, onSuccess }) => {
    if (username === '') {
      Toast.warning("请输入一个 username");
      onError();
      return;
    }
    const form = new FormData();
    form.append("username", username);
    form.append("apk", file.fileInstance)  // Important
    // axios 会自动设置 Content-Type
    axios.post(`${config.baseURL}/api/upload/apk`, form)
      .then(res => {
        if (res.data.code === 2000) {
          Toast.info("APK 上传成功");
          onSuccess();
        } else {
          onError();
        }
      })
  };

  const statistic_column = [
    {
      title: "APK",
      dataIndex: "ApkName",
      width: 400,
    }, {
      title: "分析时间/s",
      dataIndex: "Time",
      width: 130,
      sorter: (a, b) => (a.Time - b.Time > 0 ? 1 : -1),
      render: text => `${text.toFixed(2)} s`
    }, {
      title: "缺少描述",
      dataIndex: "CdIssue",
      sorter: (a, b) => (a.CdIssue - b.CdIssue > 0 ? 1 : -1),
    }, {
      title: "对比度",
      dataIndex: "ColorIssue",
      sorter: (a, b) => (a.ColorIssue - b.ColorIssue > 0 ? 1 : -1),
    }, {
      title: "非法禁用",
      dataIndex: "DisabledIssue",
      sorter: (a, b) => (a.DisabledIssue - b.DisabledIssue > 0 ? 1 : -1),
    }, {
      title: "无法聚焦",
      dataIndex: "InaccessIssue",
      sorter: (a, b) => (a.InaccessIssue - b.InaccessIssue > 0 ? 1 : -1),
    }, {
      title: "缺少标签",
      dataIndex: "MissingLabelIssue",
      sorter: (a, b) => (a.MissingLabelIssue - b.MissingLabelIssue > 0 ? 1 : -1),
    }, {
      title: "误用",
      dataIndex: "MisuseIssue",
      sorter: (a, b) => (a.MisuseIssue - b.MisuseIssue > 0 ? 1 : -1),
    }
  ];
  const statistic_table_scroll = useMemo(() => ({ y: 300 }), []);
  const handle_row = (record, index) => {
    // 给偶数行设置斑马纹
    if (index % 2 === 0) {
      return {
        style: {
          background: 'var(--semi-color-fill-0)',
        },
      };
    } else {
      return {};
    }
  };

  // issue 列表分页展示
  const [issuePage, onIssuePageChange] = useState(1);
  const issuePageSize = 5;
  const getIssuePage = (page) => {
    let start = (page - 1) * issuePageSize;
    let end = page * issuePageSize;
    return issues.slice(start, end);
  };

  return (
    <div className="a11y-container">
      <div className="a11y-main-container">
        <div className="a11y-title">
          <h2>welcome to</h2>
          <h1>xFinder+</h1>
          <h3>Please upload the APK to be analyzed and click the button to start!</h3>
        </div>

        <div className="a11y-upload">
          <Upload
            name="apk"
            dragIcon={<IconApps/>}
            draggable={true}
            accept=".apk"
            limit={1}
            maxSize={1024 * 20}
            customRequest={upload_apk}
          >
            <div className="components-upload-demo-drag-area">
              <img
                src="/resources/img/a11y/apk.svg"
                height="96"
                alt='apk'
              />
              <div
                style={{
                  fontSize: 25,
                  marginTop: 8,
                  flexBasis: '100%',
                  textAlign: 'center',
                  color: 'var(--semi-color-tertiary)',
                }}
              >
                Drop the APK file here to upload.
              </div>
            </div>
          </Upload>
        </div>

        <div className="a11y-btn">
          <Button size="large" icon={<IconFile />} onClick={() => setShowConfig(true)}>
            Configuration
          </Button>
          <Button size="large" icon={<IconBolt />} onClick={start_analysis}>
            Start Analysis!
          </Button>
          <Button size="large" icon={<IconFile />} onClick={show_results}>
            Show Results
          </Button>
        </div>
      </div>

      <Modal
        title="XFinder 配置选项"
        visible={showConfig}
        onOk={() => setShowConfig(false)}
        onCancel={() => setShowConfig(false)}
        style={{width: 700}}
        okText='搞定'
        cancelText='关闭'
      >
        <Input
          addonBefore="用户名"
          showClear size="large" maxLength="20"
          value={username} onChange={(value, e) => {setUsername(value);}}
          autofocus="true"
        />
        <CheckboxGroup direction="vertical">
          <CheckboxGroup direction="horizontal">
            <Checkbox
              type="card"
              checked={src}
              onChange={() => setSrc(!src)}
            >
              开启源码分析
            </Checkbox>
            <Checkbox
              type="card"
              checked={verbose}
              onChange={() => setVerbose(!verbose)}
            >
              分析过程输出
            </Checkbox>
          </CheckboxGroup>

          <CheckboxGroup direction="horizontal">
            <Checkbox
              type="card"
              checked={cdIssue}
              onChange={() => setCdIssue(!cdIssue)}
              extra="控件缺少 ContentDescription 属性问题"
            >
              分析 CDIssue
            </Checkbox>

            <Checkbox
              type="card"
              checked={colorIssue}
              onChange={() => setColorIssue(!colorIssue)}
              extra="颜色对比度设计不当导致阅读障碍问题"
            >
              分析 ColorIssue
            </Checkbox>
          </CheckboxGroup>

          <CheckboxGroup direction="horizontal">
            <Checkbox
              type="card"
              checked={disabledIssue}
              onChange={() => setDisabledIssue(!disabledIssue)}
              extra="控件禁用问题"
            >
              分析 DisabledIssue
            </Checkbox>

            <Checkbox
              type="card"
              checked={inaccessIssue}
              onChange={() => setInaccessIssue(!inaccessIssue)}
              extra="控件无法被外设聚焦问题"
            >
              分析 InaccessIssue
            </Checkbox>
          </CheckboxGroup>

          <CheckboxGroup direction="horizontal">
            <Checkbox
              type="card"
              checked={missingLabelIssue}
              onChange={() => setMissingLabelIssue(!missingLabelIssue)}
              extra="EditView 缺少描述文本问题"
            >
              分析 MissingLabelIssue
            </Checkbox>

            <Checkbox
              type="card"
              checked={misuseIssue}
              onChange={() => setMisuseIssue(!misuseIssue)}
              extra="控件误用问题"
            >
              分析 MisuseIssue
            </Checkbox>
          </CheckboxGroup>
        </CheckboxGroup>
      </Modal>

      <div hidden={hideResult} className="results_container">
        <div className="issues_container">
          <List
            header={<h2>Issues in {apk}</h2>}
            dataSource={getIssuePage(issuePage)}
            bordered
            className='issue-list'
            style={{ border: '1px solid var(--semi-color-border)', flexBasis: '100%', flexShrink: 0 }}
            renderItem={item => (
              <List.Item
                className='issue-list-item'
                header={<Avatar color={item.UnderOrOver[0] === "U" ? 'red' : 'light-blue'}>{item.UnderOrOver[0]}</Avatar>}
                main={
                  // 这里修改具体每个列表的样式
                  <div>
                  <span
                    style={{
                      color: 'var(--semi-color-text-0)',
                      fontWeight: 500,
                      fontSize: '19px'
                    }}>
                    {item.Message}
                  </span>
                    <p
                      style={{
                        color: 'var(--semi-color-text-1)',
                        margin: '4px 0',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '16px'
                      }}>
                      {item.Location}
                    </p>
                    <p
                      style={{
                        color: 'var(--semi-color-text-1)',
                        margin: '4px 0',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '16px'
                      }}>
                      {item.XPath}
                    </p>
                  </div>
                }
              />
            )}
          />
          <Pagination
            size='large' style={{ width: '100%', flexBasis: '100%', justifyContent: 'center', margin: '6px 0' }}
            pageSize={issuePageSize} total={issues.length} currentPage={issuePage}
            onChange={cPage => onIssuePageChange(cPage)}
          />
        </div>

        <div className="statistic_container">
          <Table
            columns={statistic_column}
            dataSource={statistic}
            pagination="false"
            scroll={statistic_table_scroll}
            onRow={handle_row}
          />
        </div>
      </div>
    </div>
  );
}

export default A11yFrontend