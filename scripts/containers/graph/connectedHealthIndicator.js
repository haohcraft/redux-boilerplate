import React from 'react';
import HealthIndicator from 'components/graph/healthIndicator';
import { connect } from 'react-redux';
import { ALERT_TYPE } from 'containers/alerts/constants';
const ConnectedHealthIndicator = (props) => (<HealthIndicator {...props}/>);

export default connect(
    (state) => {
        let alertRange = [];
        const alerts = state.alerts.alerts;
        if (alerts.length) {
            let arr = [new Date().getTime(), 0];
            alertRange = alerts.reduce((r, a) => {
                if (a.type === ALERT_TYPE.WARNING) {
                    arr[0] = Math.min(arr[0], a.timestamp);
                    arr[1] = Math.max(arr[1], a.timestamp);
                } else {
                    r.push(arr);
                    arr = [new Date().getTime(), 0];
                }

                return r;
            }, []);
            alertRange.push(arr);
        }

        return {
            alertRange,
            highlightAlert: state.alerts.highlight
        };
    }
)(ConnectedHealthIndicator);
