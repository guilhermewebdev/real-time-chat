import { Express } from 'express';

export interface Settings {
    port: number;
    middlewares: Array<Express>;
    host: string;
}