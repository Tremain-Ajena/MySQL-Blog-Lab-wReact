import {Connection} from './index';

export const all = async() => {
    return new Promise(( resolve, reject) => {
        Connection.query('select * from Blogs', (err,results) => {
            if (err){
                return reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export default {
    all
}