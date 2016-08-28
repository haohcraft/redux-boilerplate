import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Icon from 'components/icon';
import { connect } from 'react-redux';
import style from './style.css';
import * as Actions from './actions';
@connect(
    (state) => ({ threshold: state.alerts.threshold }),
    (dispatch) => (bindActionCreators(Actions, dispatch))
)
@CSSModules(style)
export default class Threshold extends Component {
    static propTypes = {
        threshold: PropTypes.number,
        decreaseThreshold: PropTypes.func,
        increaseThreshold: PropTypes.func
    };
    render() {
        return (<div styleName="threshold">
            <div styleName='title'>threshold:</div>
            <span>Whenever the load for the past 2 minutes exceeds
                <Icon styles={{ icon: `${style.decrease}` }}
                    name='decrease'
                    onClick={::this.onClickDecrease}/>
                <div styleName='number'>{this.props.threshold}</div>
                <Icon styles={{ icon: `${style.increase}` }}
                    name='increase'
                    onClick={::this.onClickIncrease}/>
             on average</span>
        </div>);
    }
    onClickDecrease() {
        this.props.decreaseThreshold();
    }
    onClickIncrease() {
        this.props.increaseThreshold();
    }
}
