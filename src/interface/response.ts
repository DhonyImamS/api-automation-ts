import { Test } from 'supertest';
import { ILooseData } from '@interface/loose_data';

export interface ResponseClientSupertest extends ILooseData, Test{};

export interface ResponseClientAxios {
    data: ILooseData;
    status: number;
    statusText: string;
    headers: ILooseData;
    config: ILooseData;
    request: ILooseData;
}