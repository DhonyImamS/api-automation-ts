import { SuperAgentTest } from 'supertest';
import { AxiosInstance } from 'axios';
import { ILooseData } from '@interface/loose_data';
import { RequestClientGTL } from '@interface/request';

export interface ClientGTL {
    get(url: string, config?: RequestClientGTL): Promise<ILooseData>;
    post(url: string, body: ILooseData, config?: RequestClientGTL): Promise<ILooseData>;
};

export interface SuperTestClient extends SuperAgentTest{};

export interface AxiosClient extends AxiosInstance{};