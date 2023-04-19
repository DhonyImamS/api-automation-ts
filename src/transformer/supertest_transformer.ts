import { Request } from 'supertest';
import { RequestClientGTL } from '@interface/request';

const supertestTransformer = (clientSupertest: Request, config: Pick<RequestClientGTL, 'headers' | 'params' | 'data'>) => {
    const { headers, params, data } = config;

    if (headers) {
        for (const [key, value] of Object.entries(headers)) {
            clientSupertest = clientSupertest.set(key, value);
        }
    }

    if (params) clientSupertest = clientSupertest.query(params);

    if (data) clientSupertest = clientSupertest.send(JSON.stringify(data));

    // return the updated Request object
    return clientSupertest;
};

export default supertestTransformer;