import React from 'react';
import { Navbars } from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Product } from './pages/Product/Product';


function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <div className="container pt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products/name" component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
