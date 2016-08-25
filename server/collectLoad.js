import os from 'os';

const TEN_MIN_IN_SEC = 10 * 60;
const lastTenMinLoadAvg = [];
let minLoadavg = Number.MAX_SAFE_INTEGER;
let maxLoadavg = Number.MIN_SAFE_INTEGER;

export const getLastTenMinLoadAvg = ({ interval /*in seconds*/ }) => {
    const compressed = [];
    compressed.push(lastTenMinLoadAvg.slice(-1)[0]);
    let i = lastTenMinLoadAvg.length - 1;
    while (i >= 0 && i > interval) {
        compressed.unshift(lastTenMinLoadAvg[i - interval]);
        i = i - interval;
    }
    return {
        data: compressed,
        min: minLoadavg,
        max: maxLoadavg
    };
};
export const getLastOneMinLoadAvg = () => ({
    loadAvg: os.loadavg()[0],
    timestamp: new Date().getTime()
});
export const collectLastTenMinLoadAvg = () => {
    const loadAvg = getLastOneMinLoadAvg();
    if (loadAvg.loadAvg > maxLoadavg) maxLoadavg = loadAvg.loadAvg;
    if (loadAvg.loadAvg < minLoadavg) minLoadavg = loadAvg.loadAvg;
    lastTenMinLoadAvg.push(loadAvg);
    // To maintain a number of loadAvg
    if (lastTenMinLoadAvg.length >= TEN_MIN_IN_SEC) {
        lastTenMinLoadAvg.shift();
    }
};

