import * as React from 'react';
import SaveProduct from '../containers/SaveProduct';
import Loading from '../containers/Loading';
import ProductsList from '../containers/ProductsList';


let App =() =>(
    <div>
        <SaveProduct/>
        <Loading/>
        <ProductsList/>
    </div>
);

export default App;