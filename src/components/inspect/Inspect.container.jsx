
import React, {Fragment, Component} from 'react';
import InspectProductComponent from './inspect-product/inspect-product.component';
import InspectUsageComponent from './inspect-usage/inspect-usage.component';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class InspectContainer extends Component {
  state = {
    expanded: false
  }

  handleExpand = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    return(
      <BrowserRouter>
        <Route path="/inspect">
          <Fragment>
            <br/>
            <ul>
              <li>
                <Link to="/inspect/product">Product</Link>
              </li>
              <li>
                <Link to="/inspect/usage">Usage</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/inspect/product" component={InspectProductComponent} />
              <Route path="/inspect/usage" component={InspectUsageComponent} />
            </Switch>
          </Fragment>
        </Route>
      </BrowserRouter>
    )
  }
};

export default InspectContainer;
