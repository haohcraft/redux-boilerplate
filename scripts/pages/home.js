import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Info from 'components/info';

import Form from 'containers/form';
import Finish from 'containers/finishBtn';
import PageContainer from './container';

export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        const FormView = Form.View;
        return <div ref="test">
            <Header name="Café Reserve" />
            <Info />
            <PageContainer>
                <div>
                    <FormView />
                    <Finish />
                </div>
            </PageContainer>
            <Footer />
        </div>;
    }
}
