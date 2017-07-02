import axios from 'axios'

export class Base {

    constructor() {

    }

    newAxios() {
        return axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: this.token,
                user_identity: 1
            },
            timeout: 1000 * 5,
        });
    }

    setToken(token) {
        this.token = token;
        this.$http = this.newAxios();
    }

}
