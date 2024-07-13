import './style.css'
import products from "./api/product.json"
import { showProductContainer } from './homeProductCards';

console.log(products);
// call the functions to display all the products 
showProductContainer(products);
