import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import style from './style.css';
import _ from 'lodash';

import Button from 'components/button';
@connect(
    (state) => {
        const form = state.form;
        return {
            isActive: _.reduce(
                _.omit(form, 'request'),
                (r, v) => (r && v.isValid && !!v.value.length),
                true
            )
        };
    }
)
@CSSModules(style)
export default class Finish extends Component {
    static propTypes = {
        title: PropTypes.string,
        isActive: PropTypes.bool,
        styles: PropTypes.object
    };
    render() {
        return <div styleName="finish">
            <Button
                cn="finish"
                styles={this.props.styles}
                name="FINISH"
                onClick={::this.click}
                isActive={this.props.isActive} />
            <div styleName="text">
                This is a bunch of legal copy in small text. I love putting legal copy on web pages.
            </div>
        </div>;
    }
    click() {

    }
}
