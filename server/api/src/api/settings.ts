import { Settings } from '../types';
import * as dotenv from 'dotenv';

const settings:Settings = {
    port: 8000,
    host: '::',
    middlewares: [],
    dbHost: process.env['DB_HOST']?.toString() || '',
    dbUser: process.env['DB_USER']?.toString() || '',
    dbPass: process.env['DB_PASS']?.toString() || '',
}

export default settings;