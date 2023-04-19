import dotenv from 'dotenv';
import ClientAxiosGTL from '@client/client_axios';
import ClientSupertestGTL from '@client/client_supertest';
import { ClientGTL } from '@interface/client';
import { ResponseClientAxios, ResponseClientSupertest } from '@interface/response';
import { RequestClientGTL } from '@interface/request';
import { ILooseData } from '@interface/loose_data';
dotenv.config();

class ClientAPIGTL implements ClientGTL {
    private clientAPI: ClientAxiosGTL | ClientSupertestGTL;
    private defaultConfig: RequestClientGTL;

    constructor(options: 'AXIOS' | 'SUPERTEST' = 'AXIOS') {
        this.defaultConfig = { baseURL: process.env.BASE_URL };

        if (options === 'AXIOS') { 
            this.clientAPI = new ClientAxiosGTL(this.defaultConfig);
        } else {
            this.clientAPI = new ClientSupertestGTL(this.defaultConfig);
        }
        
    }

    async get(url: string, config?: RequestClientGTL): Promise<ResponseClientAxios | ResponseClientSupertest> {
        let requestConfig: RequestClientGTL = this.defaultConfig;

        if (config) {
            requestConfig = {
                ...this.defaultConfig,
                ...config,
            };
        }
        return this.clientAPI.get(url, requestConfig);
    }

    async post(url: string, body: ILooseData, config?: RequestClientGTL): Promise<ResponseClientAxios | ResponseClientSupertest> {
        let requestConfig: RequestClientGTL = this.defaultConfig;

        if (config) {
            requestConfig = {
                ...this.defaultConfig,
                ...config,
            };
        }
        return this.clientAPI.post(url, body, requestConfig);
    }
}

export default ClientAPIGTL;
