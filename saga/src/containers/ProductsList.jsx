import * as React from "react";
import {connect} from 'react-redux';
const errorMessage = {
  color: "red"
};

let ProductListComponent = ({ products }) =>
  products ? (
    <div>
      <table>
        <thead>
          <tr>
            {
              console.log(JSON.stringify(products))
              /*products.map((v, i) => (
              <td key={i}>{v}</td>
            ))*/}
            <td>Product Row Id</td>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Manufacturer</td>
            <td>Category Name</td>
            <td>Description</td>
            <td>Base Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p, j) => (
            <tr key={j}>
              {Object.keys(p).map((v, i) => (
                <td key={i}>{p[v]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps,null)(ProductListComponent);
