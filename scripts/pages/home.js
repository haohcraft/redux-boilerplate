import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import PageContainer from './container';
import Main from './main';
import Loading from './loading';
import Confirm from './confirm';
import Router from 'containers/router';

export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        const RouterView = Router.View;
        return <div ref="test">
            <Header name="Café Reserve" />
            <PageContainer>
                <RouterView pages={[Main, Loading, Confirm]} />
            </PageContainer>
            <Footer />
        </div>;
    }
}
