import { ILooseData } from '@interface/loose_data';

export interface RequestClientGTL {
    baseURL?: string;
    url?: string;
    method?: string;
    data?: ILooseData;
    headers?: ILooseData;
    params?: ILooseData;
}

