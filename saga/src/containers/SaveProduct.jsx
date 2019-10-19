import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/index";

let styles = {
  backgroundColor: "red",
  width: "250px",
  height: "100px",
  borderRadius: "100px",
  display: "block",
  margin: "60px auto",
  fontSize: "20px",
  border: "10px solid "
};

 

class SaveProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  render() {
    return (
      <div>
        <button
          style={
            !this.state.hover
              ? styles
              : { ...styles, backgroundColor: "DarkTurquoise " }
          }
          onMouseOut={() => {
            this.setState({ hover: false });
          }}
          onMouseOver={() => {
            this.setState({ hover: true });
          }}
          onClick={this.props.getProducts}
        >
          Press to Load Products
        </button>
      </div>
    );
  }
}
const mapDispatchToProps =  {
    getProducts: getProducts
};

export default connect(null,mapDispatchToProps)(SaveProductComponent);
