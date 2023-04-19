import ClientAPIGTL from '@client/client';
describe('Test API', () => {
    it('Test API', async () => {
        const response = await ClientAPIGTL.get('/api/users?page=2');
        console.log(response);
    });
});