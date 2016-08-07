import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Info from 'components/info';
import Timer from 'components/timer';
import Form from 'containers/form';

export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <Header name="Café Reserve" />
            <Info />
            <Timer />
            <Form.View />
            <Footer />
        </div>;
    }
}
