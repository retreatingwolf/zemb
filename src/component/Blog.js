import "./Blog.css"
import {Layout, Nav} from "@douyinfe/semi-ui";
import {
    IconBranch,
    IconCamera,
    IconCloud,
    IconDesktop, IconGift,
    IconHome, IconSetting,
    IconUserCardVideo,
} from '@douyinfe/semi-icons';
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Network from "./ppt/Network";
import RPiPPT from "./ppt/RPiPPT";
import Home from "./Home/Home";
import RPi from "./RPi/RPi";
import Setting from "./Setting/Setting";
import RPiDefense from "./ppt/RPiDefense";
const { Sider, Content } = Layout;

function Blog() {
    return (
        <Layout className='main-layout'>
            <Layout>
                <Content>
                    <Routes>
                        <Route path="/rpi" element={<RPi />}/>
                        <Route path="/network" element={<Network />}/>
                        <Route path="/rpippt" element={<RPiPPT />}/>
                        <Route path="/rpidefense" element={<RPiDefense/>}/>
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Content>

                <Sider className="right-side">
                    <Nav
                        className='main-nav'
                        defaultSelectedKeys={['Home']}
                        renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
                            const routerMap = {
                                Home: "/",
                                Rpi: "/rpi",
                                Network: "/network",
                                Rpippt: "/rpippt",
                                Rpidefense: "/rpidefense",
                                Setting: "/setting"
                            };
                            // console.log(itemElement)

                            return (
                                // 这里的Link是react-router-dom里面的，不是semi里面的
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={routerMap[props.itemKey]}
                                >
                                    { itemElement }
                                </Link>
                            );
                        }}
                    >
                        <Nav.Header className="main-nav-header" logo={<IconBranch style={{ height: '36px', fontSize: 36 }}/>} text="CaZ Swing"/>
                        <Nav.Item itemKey='Home' text='Home' icon={ <IconHome/> } />
                        <Nav.Item itemKey='Rpi' text='Raspberry Pi' icon={<IconUserCardVideo/>}/>

                        <Nav.Sub itemKey='Ppt' text='Presentation' icon={<IconDesktop />}>
                            <Nav.Item itemKey='Network' text='Network' icon={<IconCloud />}/>
                            <Nav.Item itemKey='Rpippt' text='RPi' icon={<IconCamera />}/>
                            <Nav.Item itemKey='Rpidefense' text='RPiDefense' icon={<IconGift />}/>
                        </Nav.Sub>
                        <Nav.Item itemKey='Setting' text='Setting' icon={<IconSetting/>}/>

                        <Nav.Footer collapseButton={true} />
                    </Nav>
                </Sider>
            </Layout>

            {/*<Footer>Footer</Footer>*/}
        </Layout>
    );
}

export default Blog;
