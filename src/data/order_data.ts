import RandomizerGTL from '@utils/randomizer';

export type OrderPayload = {
    order_id?: string;
    order_description?: string;
    order_status?: string;
    last_updated_timestamp?: number;
    special_order?: boolean;
};

export const orderData: OrderPayload = {
    "order_id": RandomizerGTL.uuid(),
    "order_description": RandomizerGTL.descriptor(),
    "order_status":"New",
    "last_updated_timestamp": new Date().getTime(),
    "special_order":false
};