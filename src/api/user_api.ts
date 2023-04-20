import ClientAPIGTL from '@client/client';

class UserAPI {
    private static api: ClientAPIGTL = new ClientAPIGTL();

    static async getUser() {
        return UserAPI.api.get('/api/users?page=2');
    }
}

export default UserAPI;