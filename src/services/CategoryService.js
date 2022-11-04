import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/';
// const BASE_URL = 'http://192.168.3.199:8000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class CategoryService {
    context_path = "expense/";
    getCategories() {
        return axios.get(BASE_URL + this.context_path + "categories");

    }
    addExpense(data) {
        return axios.post(BASE_URL + this.context_path + "add_user_expense_category", data);
    }
}

export default new CategoryService();