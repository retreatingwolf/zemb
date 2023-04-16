import {Button, Typography} from "@douyinfe/semi-ui";
import { IconLink } from '@douyinfe/semi-icons';

const Setting = () => {
    const { Text } = Typography;
    const switchMode = () => {
        const body = document.body;
        // const ppt = document.getElementById()
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    };

    return (
        <>
            <Button onClick={switchMode}>
                切换主题
            </Button>
            <Text
                link={{ href: 'https://gitee.com/zhouzhoukang/zemb' }}
                icon={<IconLink />}
                underline
            >
                Gitee链接
            </Text>
        </>
    )
}

export default Setting
