/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './styles';
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;

/**
 * Maps routes
 * @param {object} route 
 */
const mapRoute = (route) => {
    if (route.path == '/') {
        return <Route key={route.path} exact path='/' component={route.component} />
    } else {
        return <Route key={route.path} path={route.path} component={route.component} />
    }
};

/**
 * Root component
 */
const Root = ({ routes }) => {
    return (
        <Router>
            <Layout styles={styles.layoutWrapper}>
                <Sider>Sider</Sider>
                <Layout>
                    <Content>
                        { routes.map(route => mapRoute(route)) }
                    </Content>
                    <Footer styles={styles.footer}>Footer</Footer>
                </Layout>
            </Layout>
        </Router>
    );
};

export default Root;