// import { ILooseData } from '@interface/loose_data';
// import { IRequestInteface } from '@interface/request';

// class HttpSupertest implements IRequestInteface {
//     get(): Promise<ILooseData> {
        
//     }

//     post(data: ILooseData): Promise<ILooseData> {
        
//     }
// }

// export default HttpSupertest


// import * as httpLib from 'supertest';
// import { RequestCall } from '../interface/request.interface';

// export class RequestAPI {
//     private client: httpLib.SuperAgentTest;
//     private baseURL: string;
//     private apiVersion: string;

//     constructor(requestParam?: RequestCall) {
//         this.baseURL = requestParam?.baseURL ? requestParam.baseURL : 'https://api-dev.altolelang.co.id';
//         this.apiVersion = requestParam?.apiVersion ? requestParam.apiVersion : '/v1';
//         this.client = httpLib.agent(`${this.baseURL}${this.apiVersion}`);
//     }

//     protected clientAPI(): httpLib.SuperAgentTest{
//         return this.client;
//     }
// };