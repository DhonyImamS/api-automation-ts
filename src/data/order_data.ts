import { faker } from '@faker-js/faker';

export type OrderPayload = {
    order_id?: string;
    order_description?: string;
    order_status?: string;
    last_updated_timestamp?: number;
    special_order?: boolean;
};

export const orderData: OrderPayload = {
    "order_id": faker.datatype.uuid(),
    "order_description": faker.commerce.productDescription(),
    "order_status":"New",
    "last_updated_timestamp": new Date().getTime(),
    "special_order":false
};