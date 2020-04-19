import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CustomersService {

    constructor() {}


    getCustomers() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    }
    getCustomersByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCustomer(pk) {
        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(customer) {
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.delete(url);
    }
    createCustomer(customer) {
        const url = `${API_URL}/api/customers/`;
        return axios.post(url, customer);
    }
    updateCustomer(customer) {
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.put(url, customer);
    }
}




// Класс CustomersService будет вызывать следующие методы Axios:

// getCustomers(): получает первую страницу клиентов.

// getCustomersByURL(): получает клиентов по URL.
// Это позволяет получить следующие страницы клиентов 
// путем передачи таких ссылок, 
// как / api / customers / ? page = 2.

// getCustomer(): получает клиента по первичному ключу.
// createCustomer(): создает клиента.
// updateCustomer(): обновляет клиента.
// deleteCustomer(): удаляет клиента.