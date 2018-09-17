import { Posts } from './posts';
import { Auth } from './auth';

export default new class Api {
    posts = new Posts();
    auth = new Auth();
}();
