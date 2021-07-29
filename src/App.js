import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MailingList from "./components/MailingList";
import data from "./data/store-items.json";

class App extends React.Component {
  state = {
    clothes: data,
  };
  render() {
    return (
      <BrowserRouter>
        <Header />
        <>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} clothes={this.state.clothes} />
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
