import { MAIN_URL, groupId } from '../config';

export class Users {
    async getById (userId) {
        const response = await fetch(`${MAIN_URL}/user/${userId}`, {
            method: 'GET',
            headers: {
                Authorization: this.token,
            }
        });

        const { data, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return data;
    }

}
