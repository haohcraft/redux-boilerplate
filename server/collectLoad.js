import os from 'os';

const TEN_MIN_IN_SEC = 10 * 60;
const lastTenMinLoadAvg = [];
/*eslint-disable*/
export const getLastTenMinLoadAvg = ({ interval /*in seconds*/ }) => {
    const compressed = [];
    compressed.push(lastTenMinLoadAvg.slice(-1)[0]);
    let i = lastTenMinLoadAvg.length - 1;
    while (i >= 0 && i > interval) {
        compressed.unshift(lastTenMinLoadAvg[i - interval]);
        i = i - interval;
    }

    return compressed;
};
/*eslint-enable*/
export const getLastOneMinLoadAvg = () => ({
    loadAvg: os.loadavg()[0],
    timestamp: new Date().getTime()
});
export const collectLastTenMinLoadAvg = () => {
    lastTenMinLoadAvg.push(getLastOneMinLoadAvg());
    if (lastTenMinLoadAvg.length >= TEN_MIN_IN_SEC) {
        lastTenMinLoadAvg.shift();
    }
    /*eslint-disable*/
    // console.log("lastTenMinLoadAvg length:", lastTenMinLoadAvg.length);
    // console.log("lastTenMinLoadAvg last:", lastTenMinLoadAvg.slice(-1));
    /*eslint-enable*/
};

