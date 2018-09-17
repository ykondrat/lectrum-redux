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

    async like (postId) {
        const response = await fetch(`${MAIN_URL}/feed/like/${postId}`, {
            method: 'PUT',
            headers: {
                Authorization: this.token,
            }
        });

        if (response.status !== 204) {
            const { message } = await response.json();
            throw new Error(message);
        }
    }

    async create (comment) {
        const response = await fetch(`${MAIN_URL}/feed`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                Authorization: this.token,
                'Content-type': 'application/json',
            }
        });

        const { data: post, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return post;
    }

    async remove (postId) {
        const response = await fetch(`${MAIN_URL}/feed/${postId}`, {
            method: 'DELETE',
            headers: {
                Authorization: this.token,
            }
        });

        if (response.status !== 204) {
            const { message } = await response.json();
            throw new Error(message);
        }
    }

}
