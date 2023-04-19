import axios from 'axios';
import { ILooseData } from '@interface/loose_data';
import { ClientGTL, AxiosClient } from '@interface/client';
import { ResponseClientAxios } from '@interface/response';
import { RequestClientGTL } from '@interface/request';

class ClientAxiosGTL implements ClientGTL {
    private client: AxiosClient;
    private requestData: RequestClientGTL;

    constructor(config: RequestClientGTL) {
        this.requestData = config;
        this.client = axios.create(this.requestData);
    }

    async get(url: string): Promise<ResponseClientAxios> {
        return this.client.get(url, this.requestData);
    }

    async post(url: string, body: ILooseData): Promise<ResponseClientAxios> {
        return this.client.post(url, body, this.requestData);
    }
}

export default ClientAxiosGTL;