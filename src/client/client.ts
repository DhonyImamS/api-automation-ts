import ClientAxiosGTL from '@client/client_axios';
import ClientSupertestGTL from '@client/client_supertest';
import { ClientGTL } from '@interface/client';
import { ResponseClientAxios, ResponseClientSupertest } from '@interface/response';
import { RequestClientGTL } from '@interface/request';
import { ILooseData } from '@interface/loose_data';

class ClientAPIGTL implements ClientGTL {
    private clientAPI: ClientAxiosGTL | ClientSupertestGTL;
    private requestConfig: RequestClientGTL;

    constructor(options: 'AXIOS' | 'SUPERTEST') {
        this.requestConfig = {
            baseURL: 'https://reqres.in'
        }

        if (options === 'AXIOS') { 
            this.clientAPI = new ClientAxiosGTL(this.requestConfig);
        } else {
            this.clientAPI = new ClientSupertestGTL(this.requestConfig);
        }
        
    }

    async get(url: string): Promise<ResponseClientAxios | ResponseClientSupertest> {
        return this.clientAPI.get(url);
    }

    async post(url: string, body: ILooseData): Promise<ResponseClientAxios | ResponseClientSupertest> {
        return this.clientAPI.post(url, body);
    }
}

export default new ClientAPIGTL('SUPERTEST');
