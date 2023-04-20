import { faker } from '@faker-js/faker';

class RandomizerGTL {
    static uuid(): string {
        return faker.datatype.uuid();
    }

    static descriptor(): string {
        return faker.commerce.productDescription();
    }
}

export default RandomizerGTL;