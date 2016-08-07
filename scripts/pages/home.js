import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <Header name="Café Reserve" />
            <Footer />
        </div>;
    }
}
