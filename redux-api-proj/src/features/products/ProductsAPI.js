import axios from 'axios';

//making an async request for data
export function fetchProducts() {
 return axios.get('http://localhost:8080/products');
}
