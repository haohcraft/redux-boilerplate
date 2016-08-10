import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Router from 'containers/router';
const style = {
    height: '100%',
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: '400px'
};
@connect(
    null,
    (dispatch) => ({
        next: () => dispatch(Router.Actions.setPage({ index: 2 }))
    })
)
export default class Loading extends Component {
    static propTypes = {
        next: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.timer = null;
    }
    componentDidMount() {
        this.timer = setInterval(::this.props.next, 3000);
    }
    componentWillMount() {
        clearInterval(this.timer);
    }
    render() {
        return <div className="loading" style={style}>
            Confirming Reservation...
        </div>;
    }
}
