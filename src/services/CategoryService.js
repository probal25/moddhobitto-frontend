import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class CategoryService {
    context_path = "expense/";
    getCategories() {
        return axios.get(BASE_URL + this.context_path + "categories");

    }
}

export default new CategoryService();