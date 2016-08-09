import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import PageContainer from './container';
// import Main from './main';
// import Loading from './loading';
import Confirm from './confirm';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <Header name="Café Reserve" />
            <PageContainer>
                <Confirm />
            </PageContainer>
            <Footer />
        </div>;
    }
}
