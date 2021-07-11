import { Layout, Menu } from 'antd';

const { Sider } = Layout;


const SideBar = (props) => {
    const { history } = props;
    const key = sessionStorage.getItem("key") || "1";

    const changeNavigation = (route, key) => {
        sessionStorage.setItem("key", key)
        history.push(route)
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
            }}
            onCollapse={(collapsed, type) => {
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[key]}>
                <Menu.Item key="1" onClick={() => changeNavigation('/eatorama', '1')}>
                    EATORAMA
            </Menu.Item>
                <Menu.Item key="2" onClick={() => changeNavigation('/soupstation', '2')}>
                    Soup Station
             </Menu.Item>
                <Menu.Item key="3" onClick={() => changeNavigation('/starbucks', '3')}>
                    Starbucks
           </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar;