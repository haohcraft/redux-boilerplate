import express from 'express';
import rp from 'request-promise';
import _ from 'lodash';
export const APIRouter = express.Router();
export const parseHipmunkResp = (rsp) => {
    const COUNTRY_CODE = 'US';
    const TYPE_AIRPORT = 'airport';
    const airports = _.get(rsp, 'endpoints.station');
    return airports.reduce((r, airport) => {
        const country = _.get(airport, 'marketed_city.country_code');
        const type = _.get(airport, 'mode');
        if (country === COUNTRY_CODE && type === TYPE_AIRPORT) {
            r.push({
                name: _.get(airport, 'display_name'),
                code: _.get(airport, 'code'),
                lat: _.get(airport, 'lat'),
                lon: _.get(airport, 'lon')
            });
        }
        return r;
    }, []);
};
APIRouter.get('/autocomplete', (req, res) => {
    const { query } = req.query;
    /*eslint-disable*/
    // console.log(req.params);
    /*eslint-enable*/
    rp({
        url: `https://www.hipmunk.com/api/autocomplete/v3?q=${query}&endpoints=station&revision=2.2&variant=default`
    }).then((response) => {
        /*eslint-disable*/
        // console.log(response);
        /*eslint-enable*/
        res.status(200).send(parseHipmunkResp(JSON.parse(response)));
    })
    /*eslint-disable*/
    .catch(console.error);
    /*eslint-enable*/
});
