import { ALERT_TYPE } from './constants';
const calcAvg = (arr) => {
    const sum = arr.reduce((r, v) => (r + v), 0);
    return sum / arr.length;
};
export const getAlerts = (alerts, data, threshold, peroid) => {
    let alert;
    const newAlerts = [...alerts];
    const lastAlert = newAlerts[0];
    const latest = data.slice(-1)[0];
    const lastTwoMinLoad = data.slice(-1 - peroid);
    const avg = calcAvg(lastTwoMinLoad.map((load) => (load.loadAvg)));
    if (avg >= threshold) {
        alert = {
            load: avg,
            timestamp: latest.timestamp,
            type: ALERT_TYPE.WARNING
        };
    // Only if the previous alert is a WARNING type
    } else if (lastAlert && lastAlert.type === ALERT_TYPE.WARNING) {
        alert = {
            load: avg,
            timestamp: latest.timestamp,
            type: ALERT_TYPE.RECOVER
        };
    }
    if (alert) {
        newAlerts.unshift(alert);
    }
    return newAlerts;
};
