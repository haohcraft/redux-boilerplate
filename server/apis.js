import express from 'express';
import { getLastTenMinLoadAvg } from './collectLoad';
export const Api = express.Router();

Api.get('/getLastTenMinLoadAvg', (req, res) => {
    const { interval } = req.query;
    if (interval !== undefined) {
        res.status(200).send({
            loadavgData: getLastTenMinLoadAvg({ interval })
        });
    } else {
        res.status(200).send({
            loadavgData: []
        });
    }
});
