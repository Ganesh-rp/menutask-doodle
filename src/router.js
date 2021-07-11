import React, {useEffect, useState} from 'react';
import { Router, Switch, Route, useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import Eatorama from './pages/eatorama';
import SoupStation from './pages/soupstation';
import StarBucks from './pages/starbucks';
import CommonHeader from './components/header';
import SideBar from './components/sidebar';
import CommonFooter from './components/footer';

const { Footer, Content } = Layout;

const Routes = () => {
    useEffect(() => {
        sessionStorage.setItem('pathname','/')
    }, [])
    const history = useHistory();
    const [status, setStatus] = useState("");
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");

    const onStatus = (outofStock, counts) => {
        setStatus(outofStock);
        setCount(counts)
    }

    const onInputChange = (value) => {
        setSearch(value)
    }

    return (
        <Router history={history}>
            <Switch>
                <Layout>
                    <CommonHeader onInputChange={onInputChange}/>
                    <Layout>
                     <SideBar history={history}/>
                        <Content>
                            <Route exact path="/"  children={<Eatorama  onStatusChange={status} value={search}  counts={count}/>} />
                            <Route path="/eatorama" children={<Eatorama  onStatusChange={status} value={search}  counts={count} />} />
                            <Route path="/soupstation" children={<SoupStation  onStatusChange={status} value={search}  counts={count}/>} />
                            <Route path="/starbucks"  children={<StarBucks  onStatusChange={status} value={search} count={count} />} />
                        </Content>
                    </Layout>
                    <CommonFooter onStatus={onStatus} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default Routes;