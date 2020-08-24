import { Express } from 'express';

export interface DatabaseConfig {
    host: string;
    user: string;
    pass: string;
    uri: string;
    options: any;
}

export interface ServerConfig {
    port: number;
    middlewares: Array<Express>;
    host: string;
}

export interface Settings {
    server: ServerConfig;
    database: DatabaseConfig;
}