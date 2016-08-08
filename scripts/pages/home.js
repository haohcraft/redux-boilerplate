import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Info from 'components/info';

// import Form from 'containers/form';
// import Finish from 'containers/finishBtn';
import PageContainer from './container';
import Confirm from './confirm';

export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        // const FormView = Form.View;
        return <div ref="test">
            <Header name="Café Reserve" />
            <Info />
            <PageContainer>
                <Confirm />
            </PageContainer>
            <Footer />
        </div>;
    }
}


// <div>
//     <FormView />
//     <Finish />
// </div>
