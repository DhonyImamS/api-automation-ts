import UserAPI from '@api/user_api';
import { orderData, OrderPayload } from '@data/order_data';

describe('User API - Test', () => {
    it('should return succeed when sending with valid data', async () => {
        const response = await UserAPI.getUser();
        expect(response.status).toEqual(200);
    });
});