import { Test } from 'supertest';
import { ILooseData } from '@interface/loose_data';

export interface ResponseClientGTL {
    data?: ILooseData;
    status: number;
    headers: ILooseData;
}

export interface ResponseClientSupertest extends Test, ResponseClientGTL{};

export interface ResponseClientAxios extends ResponseClientGTL{
    statusText: string;
    config: ILooseData;
    request: ILooseData;
}