import "./App.css"
import {Layout, Nav} from "@douyinfe/semi-ui";
import {IconRPi, IconZ} from "./component/icons/Icons";
import {
    IconBranch,
    IconCamera,
    IconCloud,
    IconDesktop,
    IconHome, IconSetting,
    IconUserCardVideo,
    IconWifi
} from '@douyinfe/semi-icons';
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Network from "./component/ppt/Network";
import RPiPPT from "./component/ppt/RPiPPT";
import Home from "./component/Home";
import RPi from "./component/RPi/RPi";
import Setting from "./component/Setting/Setting";
const { Footer, Sider, Content } = Layout;

function App() {
  return (
      <Layout className='main-layout'>
          <Layout>
              <Content>
                  <Routes>
                      <Route path="/rpi" element={<RPi />}/>
                      <Route path="/network" element={<Network />}/>
                      <Route path="/rpippt" element={<RPiPPT />}/>
                      <Route path="/setting" element={<Setting />} />
                      <Route exact path="/" element={<Home />} />
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

export default App;
