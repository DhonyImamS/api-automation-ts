import ClientAPIGTL from '@client/client';
import OrderAPI from '@api/order_api';
import { orderData, OrderPayload } from '@data/order_data';

describe('Order API - Test', () => {
    it('should return succeed when sending with valid data', async () => {
        const response = await OrderAPI.proceedOrder(orderData);
        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({order_status: "NEW", last_updated_timestamp: "1642321210439"});
    });

    it('should return bad request when sending with invalid data without order id', async () => {
        const payload: OrderPayload = { ...orderData};
        delete payload.order_id;

        const response = await OrderAPI.proceedOrder(orderData);
        expect(response.status).toEqual(400);
    });
});