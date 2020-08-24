import { Settings } from '../types';
import * as dotenv from 'dotenv';

const settings:Settings = {
    server: {
        port: 8000,
        host: '::',
        middlewares: [],
    },
    database: {
        host: process.env['DB_HOST']?.toString() || '',
        user: process.env['DB_USER']?.toString() || '',
        pass: process.env['DB_PASS']?.toString() || '',
        uri: process.env['DB_URI']?.toString() || '',
        options: {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        },
    }
}

export default settings;