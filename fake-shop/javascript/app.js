import addProducts from "./helpers/add-product.js";
import productCard from "./components/product-card.js";
import hamburgerBtn from "./helpers/hamburger.js";
import modal from "./helpers/modal.js";
import scrollTop from "./helpers/scroll.js";
import slides from "./helpers/slides.js";
import cart from "./helpers/cart.js";
import shopFinish from "./helpers/shopFinish.js";
import toAdmin from "./helpers/toAdmin.js";

export default function App() {
  hamburgerBtn();
  modal();
  slides();
  scrollTop();
  productCard();
  addProducts();
  cart();
  shopFinish();
  toAdmin();
}
