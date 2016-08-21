import { APIRouter } from './api';
import cors from 'cors';
const routers = (app) => {
    const routes = {
        api: APIRouter
    };
    app.use('/api', cors(), routes.api);

};
export default routers;
