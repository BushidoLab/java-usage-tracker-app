
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./inspect-product/inspect-product.component";
// import Usage from "./usage";

const Inspect = () => {
  return (
    <Router>
      <div>
        <h2>Inspect</h2>
        <ul>
          <li>
            <Link to="/inspect/product">Product</Link>
          </li>
          <li>
            {/* <Link to="/inspect/usage">Usage</Link> */}
          </li>
        </ul>

        <Route path="/inspect/product" component={Product} />
        {/* <Route path="/inspect/usage" component={Usage} /> */}
      </div>
    </Router>
  )
}

export default Inspect;