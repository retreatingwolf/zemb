import {Button, Upload} from "@douyinfe/semi-ui";
import "./index.scss"
import {IconApps} from "@douyinfe/semi-icons";

const A11yFrontend = () => {
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
          dragMainText={'Drop file here to upload'}
          dragSubText="Only support APK(*.apk)"
        >
        </Upload>
      </div>

      <div className="a11y-btn">
        <Button size="large">
          Configuration
        </Button>
        <Button size="large">
          Start Analysis!
        </Button>
      </div>
    </div>
  );
}

export default A11yFrontend