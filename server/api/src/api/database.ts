import { DatabaseConfig } from "../types";
import mongoose from 'mongoose';

const connect = (uri: string, options: any) => {
    mongoose.connect(uri, options)

    mongoose.connection.on('connected', () => {
        console.log('Conencted to database');
        mongoose.connection.on('disconnect', () => {
            console.log('Disconnected database');
            connect(uri, options)
        })
    })

    return mongoose.connection
}

export default (settings: DatabaseConfig) => {
    const { host, user, pass, options, name } = settings;
    const uri = `mongodb+srv://${user}:${pass}@${host}/${name}?retryWrites=true&w=majority`;
    return connect(uri, options);
}