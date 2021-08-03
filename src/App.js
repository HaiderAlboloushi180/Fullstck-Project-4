import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MailingList from "./components/MailingList";
import data from "./data/store-items.json";

class App extends React.Component {
  state = {
    clothes: data,
    cart: [],
  };

  // Add to cart
  addToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item],
    });
    alert("Added");
    console.log(this.state.cart);
  };

  // Deleting

  render() {
    return (
      <BrowserRouter>
        <Header />
        <>
          {/* HOME PAGE */}
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} clothes={this.state.clothes} />
            )}
          />
          {/* ITEM PAGE */}
          <Route
            exact
            path="/collection/:id"
            render={(props) => (
              <ItemPage
                {...props}
                clothes={this.state.clothes}
                addingToCart={this.addToCart}
              />
            )}
          />
          {/* CART PAGE */}
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartPage {...props} cartItems={this.state.cart} />
            )}
          />
        </>
        <MailingList />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
