import { Posts } from './posts';
import { Auth } from './auth';
import { Users } from './users';

export default new class Api {

    posts = new Posts();

    auth = new Auth();

    users = new Users();

    get token () {
        return localStorage.getItem('token');
    }

}();
