import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { ALERT_TYPE } from './constants';
import { highlightAlert } from './actions';

const buildAlerts = (alerts, highlight) => (alerts.map((alert, k) => {
    let content = null;
    if (alert.type === ALERT_TYPE.WARNING) {
        content = `High load generated an alert - load = ${alert.load}, 
                triggered at ${moment(alert.timestamp).format('hh:mm:ss')}`;
    } else if (alert.type === ALERT_TYPE.RECOVER) {
        content = `High load recovered at ${moment(alert.timestamp).format('hh:mm:ss')}`;
    }
    const onMouseEnter = () => (highlight({
        timestamp: alert.timestamp,
        type: alert.type
    }));
    const onMouseOut = () => (highlight({
        timestamp: 0,
        type: ''
    }));
    return <div key={k}
        styleName={`alert-${alert.type}`}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut} >{content}</div>;
}
));

const AlertsPane = (props) => (<div styleName="alertsPane">
    <div styleName='title'>
        <div styleName='label'>Alerts</div>
    </div>
    {!props.alerts.length && <div>All good, no alerts.</div>}
    <div styleName='alert-list'>{buildAlerts(props.alerts, props.highlightAlert)}</div>
</div>);

AlertsPane.propTypes = {
    alerts: PropTypes.array,
    highlightAlert: PropTypes.func
};

export default connect(
    (state) => ({
        alerts: state.alerts.alerts
    }),
    (dispatch) => ({ highlightAlert: (highlight) => (dispatch(highlightAlert(highlight))) })
)(CSSModules(style)(AlertsPane));
