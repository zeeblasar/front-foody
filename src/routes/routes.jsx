import { Switch, Route } from 'react-router-dom';
import Login from '../components/login/login';
import ProductList from "../components/products/list/product-list";

function Routes(){
    return(
        <Switch>
            <Route exact path = '/' component = { Login }/>
            <Route exact path = '/Products' component = { ProductList }/>
        </Switch>
    );
}

export default Routes;

