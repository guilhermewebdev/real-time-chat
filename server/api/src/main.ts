import server from './api/server';
import settings from './api/settings';

const main = () => {
    server(settings.server);
}

main();