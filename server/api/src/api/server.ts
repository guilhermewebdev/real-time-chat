import express from 'express';
import { Settings } from '../types';

export default (settings: Settings) => {
    const app = express();
    const { port, host, middlewares } = settings;

    middlewares.forEach((middleware) => {
        app.use(middleware)
    })

    app.listen(port, host);
    return app;
}