import { MAIN_URL, groupId } from '../config';

export class Posts {
    async get () {
        const response = await fetch(`${MAIN_URL}/feed`, {
            method: 'GET',
            headers: {
                'x-no-auth': groupId,
            }
        });

        const { data, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return data;
    }
}
