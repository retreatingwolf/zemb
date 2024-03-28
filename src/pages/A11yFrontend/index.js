import {Button, Checkbox, CheckboxGroup, Modal, Upload} from "@douyinfe/semi-ui";
import "./index.scss"
import {IconApps, IconBolt, IconFile} from "@douyinfe/semi-icons";
import {useState} from "react";

const A11yFrontend = () => {
  // 配置对话框是否开启
  const [visible, setVisible] = useState(false);

  /**
   * 打开配置对话框
   * */
  const showDialog = () => {
    setVisible(true);
  };

  /**
   * 配置修改完成，关闭配置对话框
   * */
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  }

  // 配置选项
  const [src, setSrc] = useState(false);  // 是否开启源码分析
  const [verbose, setVerbose] = useState(false);  // 是否输出中间过程
  const [cdIssue, setCdIssue] = useState(true);
  const [colorIssue, setColorIssue] = useState(true);
  const [disabledIssue, setDisabledIssue] = useState(true);
  const [inaccessIssue, setInaccessIssue] = useState(true);
  const [missingLabelIssue, setMissingLabelIssue] = useState(true);
  const [misuseIssue, setMisuseIssue] = useState(true);


  return (
    <div className="a11y-container">
      <div className="a11y-title">
        <h2>welcome to</h2>
        <h1>xFinder+</h1>
        <h3>Please upload the APK to be analyzed and click the button to start!</h3>
      </div>

      <div className="a11y-upload">
        <Upload
          dragIcon={<IconApps/>}
          draggable={true}
          accept=".apk"
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
        <Button size="large" icon={<IconFile />} onClick={showDialog}>
          Configuration
        </Button>
        <Button size="large" icon={<IconBolt />}>
          Start Analysis!
        </Button>
      </div>

      <Modal
        title="XFinder 配置选项"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{width: 700}}
        okText={'搞定'}
        cancelText={'关闭'}
      >
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