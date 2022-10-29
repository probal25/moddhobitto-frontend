import axios from "axios";

// const BASE_URL = 'http://localhost:8000/api/';
const BASE_URL = 'http://192.168.3.199:8000/api/';


class AuthenticationService {
    context_path = "auth/";
    signupApi(data) {
        console.log(data);
        axios.post(BASE_URL + this.context_path + "signup", data)
            .then(
                res => {
                    console.log(res);
                }
            ).catch(err => {
                console.log(err);
        });

    }

    signinApi(data) {
        axios.post(BASE_URL + this.context_path + "login", data)
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
            }).catch(err => {
                console.log(err);
        });
    }
}

export default new AuthenticationService();