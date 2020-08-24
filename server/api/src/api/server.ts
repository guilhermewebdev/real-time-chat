import express from 'express';
import { ServerConfig } from '../types';

export default (settings: ServerConfig) => {
    const app = express();
    const { port, host, middlewares } = settings;

    middlewares.forEach((middleware) => {
        app.use(middleware)
    })

    app.listen(port, host);
    return app;
}