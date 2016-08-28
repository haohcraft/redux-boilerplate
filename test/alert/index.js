/*eslint-disable*/
import * as assert from 'assert';
import { getAlerts } from '../../scripts/containers/alerts/utils';
import { ALERT_TYPE } from '../../scripts/containers/alerts/constants';
// import { RequestActionTypes } from '../../scripts/containers/timer/constants';
const period = 10 * 60 / 10;
const threshold = 1;
describe('The Alerting Logic', () => {
    describe('When there is no loadAvgData', () => {
        it('should return an empty array of new alerts', () => {
            const currentAlerts = [];
            const newData = [];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(0, newAlerts.length);
        });
    });
    describe('When there is a loadAvgData to make the avg of the past ten minutes load exceeds the threshold', () => {
        it('should return an array of new alerts', () => {
            const currentAlerts = [];
            const newData = [{
                timestamp: 1,
                loadAvg: 1.1
            }];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(1, newAlerts.length);
            assert.equal(1.1, newAlerts[0].load);
            assert.equal(1, newAlerts[0].timestamp);
            assert.equal(ALERT_TYPE.WARNING, newAlerts[0].type);
        });
    });
    describe('When there is a new loadAvgData to make the avg of the past ten minutes load exceed the threshold', () => {
        it('should return an array of both the old and thenew alerts', () => {
            const currentAlerts = [{
                load: 1.2,
                timestamp: 0,
                type: ALERT_TYPE.WARNING
            }];
            const newData = [{
                timestamp: 0,
                loadAvg: 1.3
            }, {
                timestamp: 1,
                loadAvg: 1.4
            }];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(2, newAlerts.length);
            assert.equal((1.3 + 1.4) / 2, newAlerts[0].load);
            assert.equal(1, newAlerts[0].timestamp);
            assert.equal(ALERT_TYPE.WARNING, newAlerts[0].type);

            assert.equal(1.2, newAlerts[1].load);
            assert.equal(0, newAlerts[1].timestamp);
            assert.equal(ALERT_TYPE.WARNING, newAlerts[1].type);
        });
    });
    describe('When there is a loadAvgData to make the avg of the past ten minutes load below the threshold and the previous alert is a RECOVER type', () => {
        it('should return an array of existing alerts', () => {
            const currentAlerts = [{
                load: 0.1,
                timestamp: 1,
                type: ALERT_TYPE.RECOVER
            }, {
                load: 1.1,
                timestamp: 2,
                type: ALERT_TYPE.WARNING
            }];
            const newData = [{
                timestamp: 3,
                loadAvg: 0.2
            }];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(2, newAlerts.length);
            assert.equal(0.1, newAlerts[0].load);
            assert.equal(1, newAlerts[0].timestamp);
            assert.equal(ALERT_TYPE.RECOVER, newAlerts[0].type);
            assert.equal(currentAlerts[1], newAlerts[1]);
        });
    });
    describe('When there is a loadAvgData to make the avg of the past ten minutes load exceed the threshold and the previous alert is a RECOVER type', () => {
        it('should return an array of existing alerts', () => {
            const currentAlerts = [{
                load: 0.1,
                timestamp: 1,
                type: ALERT_TYPE.RECOVER
            }, {
                load: 1.1,
                timestamp: 2,
                type: ALERT_TYPE.WARNING
            }];
            const newData = [{
                timestamp: 3,
                loadAvg: 2.2
            }];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(3, newAlerts.length);
            assert.equal(2.2, newAlerts[0].load);
            assert.equal(3, newAlerts[0].timestamp);
            assert.equal(ALERT_TYPE.WARNING, newAlerts[0].type);
            assert.equal(currentAlerts[0], newAlerts[1]);
        });
    });
    describe('When there is a loadAvgData to make the avg of the past ten minutes load below the threshold and the previous alert is a WARNING type', () => {
        it('should return an array of existing alerts and the newly added one', () => {
            const currentAlerts = [{
                load: 1.1,
                timestamp: 1,
                type: ALERT_TYPE.WARNING
            }, {
                load: 1.1,
                timestamp: 2,
                type: ALERT_TYPE.WARNING
            }];
            const newData = [{
                timestamp: 1,
                loadAvg: 1.1
            }, {
                timestamp: 2,
                loadAvg: 1.1
            }, {
                timestamp: 3,
                loadAvg: 0.2
            }];
            const newAlerts = getAlerts(currentAlerts, newData, threshold, period);
            assert.equal(3, newAlerts.length);
            assert.equal((1.1 + 1.1 + 0.2) / 3, newAlerts[0].load);
            assert.equal(3, newAlerts[0].timestamp);
            assert.equal(ALERT_TYPE.RECOVER, newAlerts[0].type);
            assert.equal(currentAlerts[0], newAlerts[1]);
        });
    });
});
/*eslint-enable*/
