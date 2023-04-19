import ClientAxiosGTL from '@client/client_axios';
import { ClientGTL } from '@interface/client';
import { ResponseClientAxios } from '@interface/response';
import { RequestClientGTL } from '@interface/request';
import { ILooseData } from '@interface/loose_data';

class ClientAPIGTL implements ClientGTL {
    private clientAPI: ClientAxiosGTL;
    private requestConfig: RequestClientGTL;

    constructor() {
        this.requestConfig = {
            baseURL: 'https://reqres.in'
        }
        this.clientAPI = new ClientAxiosGTL(this.requestConfig);
    }

    async get(url: string): Promise<ResponseClientAxios> {
        return this.clientAPI.get(url);
    }

    async post(url: string, body: ILooseData): Promise<ILooseData> {
        return this.clientAPI.post(url, body);
    }
}

export default new ClientAPIGTL();


// import { ILooseData } from '@interface/loose_data';
// import * as httpLib from 'supertest';
// import { RequestCall } from '../interface/request.interface';

// export class RequestAPI {
//     private client: httpLib.SuperAgentTest;
//     private baseURL: string;
//     private apiVersion: string;

//     constructor(requestParam?: RequestCall) {
//         this.baseURL = requestParam?.baseURL ? requestParam.baseURL : 'https://api-dev.altolelang.co.id';
//         this.apiVersion = requestParam?.apiVersion ? requestParam.apiVersion : '/v1';
//         this.client = httpLib.agent(`${this.baseURL}${this.apiVersion}`);
//     }

//     protected clientAPI(): httpLib.SuperAgentTest{
//         return this.client;
//     }
// }