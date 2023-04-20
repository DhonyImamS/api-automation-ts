import dotenv from 'dotenv';
import ClientAxiosGTL from '@client/client_axios';
import ClientSupertestGTL from '@client/client_supertest';
import responseTransformer from '@transformer/response_transformer';
import { ILooseData } from '@interface/loose_data';
import { ClientGTL } from '@interface/client';
import { RequestClientGTL } from '@interface/request';
import { ResponseClientGTL } from '@interface/response';
dotenv.config();

class ClientAPIGTL implements ClientGTL {
    private clientAPI: ClientAxiosGTL | ClientSupertestGTL;
    private defaultConfig: RequestClientGTL;

    constructor() {
        const options = process.env.CLIENT_STRATEGY;
        this.defaultConfig = { baseURL: process.env.BASE_URL };

        if (options === 'AXIOS') { 
            this.clientAPI = new ClientAxiosGTL(this.defaultConfig);
        } else if (options === 'SUPERTEST') {
            this.clientAPI = new ClientSupertestGTL(this.defaultConfig);
        } else {
            throw new Error('Request Call STOPPED - Currently Strategy Supported ONLY AXIOS & SUPERTEST');
        }
        
    }

    async get(url: string, config?: RequestClientGTL): Promise<ResponseClientGTL> {
        let requestConfig: RequestClientGTL = this.defaultConfig;

        if (config) {
            requestConfig = {
                ...this.defaultConfig,
                ...config,
            };
        }
        return responseTransformer(this.clientAPI.get(url, requestConfig));
    }

    async post(url: string, body: ILooseData, config?: RequestClientGTL): Promise<ResponseClientGTL> {
        let requestConfig: RequestClientGTL = this.defaultConfig;

        if (config) {
            requestConfig = {
                ...this.defaultConfig,
                ...config,
            };
        }
        return responseTransformer(this.clientAPI.post(url, body, requestConfig));
    }
}

export default ClientAPIGTL;
