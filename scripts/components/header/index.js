import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';

@CSSModules(style)
export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div styleName="Header">
            good
        </div>;
    }
}
