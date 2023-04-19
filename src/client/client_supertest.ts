import supertest from 'supertest';
import supertestTransformer from '@transformer/supertest_transformer';
import { ILooseData } from '@interface/loose_data';
import { ClientGTL, SuperTestClient } from '@interface/client';
import { ResponseClientSupertest } from '@interface/response';
import { RequestClientGTL } from '@interface/request';

class ClientSupertestGTL implements ClientGTL {
    private client: SuperTestClient;
    private requestData: RequestClientGTL;

    constructor(config: RequestClientGTL) {
        this.requestData = config;
        this.client = supertest.agent(this.requestData.baseURL);
    }

    async get(url: string): Promise<ResponseClientSupertest> {
        return supertestTransformer(this.client.get(url), this.requestData);
    }

    async post(url: string, body: ILooseData): Promise<ResponseClientSupertest> {
        this.requestData.data = body;
        return supertestTransformer(this.client.get(url), this.requestData);
    }
}

export default ClientSupertestGTL;
