import dotenv from 'dotenv';
import supertest from 'supertest';
import supertestTransformer from '@transformer/supertest_transformer';
import { ILooseData } from '@interface/loose_data';
import { ClientGTL, SuperTestClient } from '@interface/client';
import { ResponseClientSupertest } from '@interface/response';
import { RequestClientGTL } from '@interface/request';
dotenv.config();

class ClientSupertestGTL implements ClientGTL {
    private client: SuperTestClient;
    private defaultConfig: RequestClientGTL;

    constructor(config: RequestClientGTL) {
        this.defaultConfig = config;
        this.client = supertest.agent(this.defaultConfig.baseURL);
    }

    async get(url: string, config: RequestClientGTL): Promise<ResponseClientSupertest> {
        return supertestTransformer(this.client.get(url), config);
    }

    async post(url: string, body: ILooseData, config: RequestClientGTL): Promise<ResponseClientSupertest> {
        return supertestTransformer(this.client.get(url), config);
    }
}

export default ClientSupertestGTL;
