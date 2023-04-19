import { ILooseData } from '@interface/loose_data';
import ClientAPIGTL from '@client/client';

class OrderAPI {
    private static api: ClientAPIGTL = new ClientAPIGTL();

    static async proceedOrder(body: ILooseData) {
        return OrderAPI.api.post('/processOrder', body);
    }
}

export default OrderAPI;