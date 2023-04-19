import dotenv from 'dotenv';
import axios from 'axios';
import { ILooseData } from '@interface/loose_data';
import { ClientGTL, AxiosClient } from '@interface/client';
import { ResponseClientAxios } from '@interface/response';
import { RequestClientGTL } from '@interface/request';
dotenv.config();

class ClientAxiosGTL implements ClientGTL {
    private client: AxiosClient;
    private defaultConfig: RequestClientGTL;

    constructor(config: RequestClientGTL) {
        this.defaultConfig = config;
        this.client = axios.create(this.defaultConfig);
    }

    async get(url: string, config: RequestClientGTL): Promise<ResponseClientAxios> {
        return this.client.get(url, config);
    }

    async post(url: string, body: ILooseData, config?: RequestClientGTL): Promise<ResponseClientAxios> {
        return this.client.post(url, body, config);
    }
}

export default ClientAxiosGTL;