import {IconApps} from "@douyinfe/semi-icons";
import {Upload} from "@douyinfe/semi-ui";
import "./APKUploader.scss"

const APKUploader = ({customRequest}) => {
  return (
    <Upload
      name="apk"
      dragIcon={<IconApps/>}
      draggable={true}
      accept=".apk"
      limit={1}
      maxSize={1024 * 20}
      customRequest={customRequest}
    >
      <div className="uploader-drag-area">
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
  );
}

export default APKUploader;