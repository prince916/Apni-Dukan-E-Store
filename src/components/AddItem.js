import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="col mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        <div className="mb-4 col-12">
          <label htmlFor="inputName" className="form-label">
            ProductName
          </label>
          <input
            type="text"
            className="form-control bg-light"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-12">
          <label htmlFor="inputPrice" className="form-label text-black ">
            Rate
          </label>
          <input
            type="number"
            className="form-control bg-light"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5 col-4">
          AddItem
        </button>
      </form>
    );
  }
}

export default AddItem;