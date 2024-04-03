import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Modal,
  Toast
} from "@douyinfe/semi-ui";
import "./index.scss"
import {IconBolt, IconFile} from "@douyinfe/semi-icons";
import {useState} from "react";
import XFinderService from "../../services/XFinderService";
import StatisticTable from "../../component/xfinder/StatisticTable";
import IssueList from "../../component/xfinder/IssueList";
import APKUploader from "../../component/xfinder/APKUploader";

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
   * 检查是否存在用户名
   * */
  const check_username = () => {
    if (username === '') {
      Toast.warning("请输入一个 username");
      return false;
    }
    return true;
  }

  /**
   * 开始分析
   * */
  const start_analysis = (e) => {
    e.preventDefault();
    if (!check_username()) return;
    XFinderService.startAnalysis({
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
    if (!check_username()) return;
    XFinderService.getIssue(username)
      .then(res => {
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

    XFinderService.getStatistic(username)
      .then(res => {
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
    if (!check_username()) {
      onError();
      return;
    }
    XFinderService.uploadAPK(username, file.fileInstance)
      .then(res => {
        if (res.data.code === 2000) {
          Toast.info("APK 上传成功");
          onSuccess();
        } else {
          onError();
        }
      });
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
          <APKUploader customRequest={upload_apk}/>
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

      <div hidden={hideResult} className="results_container">

        <div className="issues_container">
          <IssueList apk={apk} issues={issues}/>
        </div>

        <div className="statistic_container">
          <StatisticTable dataSource={statistic}/>
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


    </div>
  );
}

export default A11yFrontend