import cors from 'cors';
import { Api } from './apis';
const routes = (app) => {
    app.use('/api', cors(), Api);
};
export default routes;
