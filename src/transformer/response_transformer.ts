import { ILooseData } from '@interface/loose_data';
import { ResponseClientGTL, ResponseClientAxios, ResponseClientSupertest } from '@interface/response';

const responseTransformer = async (responseInput: Promise<ResponseClientAxios> | Promise<ResponseClientSupertest>): Promise<ResponseClientGTL> => {
    const response: ILooseData = await responseInput;
    const responseTransformed: ResponseClientGTL = {
        status: response.status,
        headers: response.headers
    };

    const { data, body } = await response;

    if ( data ) {
        responseTransformed.data = data;
    } else if ( body ) { 
        responseTransformed.data = body;
    }

    return responseTransformed;
};

export default responseTransformer;
