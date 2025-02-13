import {BrowserRouter,Switch,Route} from "react-router-dom"
import './App.css';

import Home from './Pages/Home/Home'
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import ProductDescription from "./Pages/Product/ProductDescription";
import About from "./Pages/About/About";
function App() {
  return (
   <BrowserRouter>
     <Switch>
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/productDescription" component={ProductDescription} />
     </Switch>
   </BrowserRouter>
  );
}

export default App;
