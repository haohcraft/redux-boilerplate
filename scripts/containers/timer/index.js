import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as d3 from 'd3';
import _ from 'lodash';
import * as Actions from './actions';

@connect(
    (state) => ({ interval: _.get(state, 'timer.updateInterval') }),
    (dispatch) => (bindActionCreators(Actions, dispatch))
)
export default class Timer extends Component {
    static propTypes = {
        interval: PropTypes.number,
        updateLoadAvg: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.timer = null;
    }
    componentWillUnmount() {
        if (this.timer) this.timer.stop();
    }
    componentWillReceiveProps() {
        this.timer.restart();
    }
    componentDidMount() {
        this.timer = d3.interval(this.props.updateLoadAvg, this.props.interval);
        this.props.updateLoadAvg();
    }
    render() {
        return <npscript />;
    }
}
