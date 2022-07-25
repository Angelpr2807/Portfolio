import productCard from "./components/productCard.js";
import addProduct from "./helpers/addProduct.js";
import deleteProduct from "./helpers/deleteProduct.js";
import editProduct from "./helpers/editProduct.js";
import form from "./helpers/form.js";
import imageHandler from "./helpers/imageHandler.js";
import modal from "./helpers/modal.js";
import search from "./helpers/search.js";

export default function app() {
  form();
  productCard();
  modal();
  search();
  deleteProduct();
  editProduct();
  imageHandler();
  addProduct();
}
