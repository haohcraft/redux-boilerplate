import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Icon from 'components/icon';
import { connect } from 'react-redux';
import style from './style.css';
import * as Actions from './actions';
@connect(
    (state) => ({ interval: Math.floor(state.timer.updateInterval / 1000) }),
    (dispatch) => (bindActionCreators(Actions, dispatch))
)
@CSSModules(style)
export default class UpdateTime extends Component {
    static propTypes = {
        interval: PropTypes.number,
        decreaseInterval: PropTypes.func,
        increaseInterval: PropTypes.func
    };
    render() {
        return (<div styleName="updateTime">
            <div styleName='title'>Update Time:</div>
            <span>Update the chart every
                <Icon styles={{ icon: `${style.decrease}` }}
                    name='decrease'
                    onClick={::this.onClickDecrease}/>
                <div styleName='number'>{this.props.interval}</div>
                <Icon styles={{ icon: `${style.increase}` }}
                    name='increase'
                    onClick={::this.onClickIncrease}/>
             second(s)</span>
        </div>);
    }
    onClickDecrease() {
        this.props.decreaseInterval();
    }
    onClickIncrease() {
        this.props.increaseInterval();
    }
}
