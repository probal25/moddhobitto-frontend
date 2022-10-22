import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/';

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

    signinApi() {
        return axios.get(BASE_URL + this.context_path + "login");
    }
}

export default new AuthenticationService();