import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { ALERT_TYPE } from './constants';

const buildAlerts = (alerts) => (alerts.map((alert, k) => {
    let content = null;
    if (alert.type === ALERT_TYPE.WARNING) {
        content = `High load generated an alert - load = ${alert.load}, 
                triggered at ${moment(alert.timestamp).format('hh:mm:ss')}`;
    } else if (alert.type === ALERT_TYPE.RECOVER) {
        content = `High load recovered at ${moment(alert.timestamp).format('hh:mm:ss')}`;
    }
    return <div styleName={`alert-${alert.type}`} key={k}>{content}</div>;
}
));

const AlertsPane = (props) => (<div styleName="alertsPane">
    <div styleName='title'>
        <div styleName='label'>Alerts</div>
        <div styleName="threshold">{`Threshold: ${props.threshold}`}</div>
    </div>
    {!props.alerts.length && <div>All good, no alerts.</div>}
    <div styleName='alert-list'>{buildAlerts(props.alerts)}</div>
</div>);

AlertsPane.propTypes = {
    alerts: PropTypes.array,
    threshold: PropTypes.number
};

export default connect(
    (state) => ({
        alerts: state.alerts.alerts,
        threshold: state.alerts.threshold
    })
)(CSSModules(style)(AlertsPane));
