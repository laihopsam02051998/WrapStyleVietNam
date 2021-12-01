import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import Store from "./containers/Store";
import Login from "./containers/Login";
import Cart from "./containers/Cart";
import ModelProduct from "./containers/ModelProduct";
import News from "./containers/News";
import Activity from "./containers/Activity";
import Hiring from "./containers/Hiring";
import SignUp from "./containers/SignUp";
import ManagementUser from "./containers/ManagementUser";
import BookingService from "./containers/BookingServices";
import Detail from "./containers/Store/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Login" component={Login} />
          <Route path="/Store" component={Store} />
          <Route path="/Cart" component={Cart} />
          <Route path="/ModelProduct" component={ModelProduct} />
          <Route path="/News" component={News} />
          <Route path="/Activity" component={Activity} />
          <Route path="/Hiring" component={Hiring} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/BookingService" component={BookingService} />
          {/* <Route path="/ManagementUser" component={ManagementUser} />  */}
          <Route path="/Detail/:courseId" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
