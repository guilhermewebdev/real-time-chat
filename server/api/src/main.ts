import server from './api/server';
import settings from './api/settings';
import database from './api/database';

const main = () => {
    database(settings.database);
    server(settings.server);
}

main();