import { SuperAgentTest } from 'supertest';
import { AxiosInstance } from 'axios';
import { ILooseData } from '@interface/loose_data';

export interface ClientGTL {
    get(url: string): Promise<ILooseData>;
    post(url: string, body: ILooseData): Promise<ILooseData>;
};

export interface SuperTestClient extends SuperAgentTest{};

export interface AxiosClient extends AxiosInstance{};