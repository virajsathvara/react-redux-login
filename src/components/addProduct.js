import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { adding_product } from '../actions';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [validation, setValidation] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    if (isNaN(price) || isNaN(quantity)) {
      setValidation("Invalid value for Price/Quantity");
    } else if (name && price && quantity) {
      setValidation(true);
      dispatch(adding_product({
        name,
        description,
        price,
        quantity,
        image
      }));
      resetState();
      history.push("/profile");
    } else if (!name || !price || !quantity) {
      setValidation("Name, Price and Quantity are required.");
    }
  };

  const resetState = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setQuantity(0);
    setImage("");
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 ml-auto mr-auto">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title ">Add Product</h4>
              </div>
              {
                validation &&
                <>
                  <p className="description text-center text-danger">
                    {validation}
                  </p>
                </>}
              <div className="card-body">
                <form onSubmit={handleChange}>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">info</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="*Name..." value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">list</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="Description..." value={description} onChange={e => setDescription(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">attach_money</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="*Price..." value={price ? price : ""} onChange={e => setPrice(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">border_all</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="*Quantity..." value={quantity ? quantity : ""} onChange={e => setQuantity(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">add_photo_alternate</i>
                      </span>
                    </div>
                    <input type="name" className="form-control" placeholder="Image..." value={image} onChange={e => setImage(e.target.value)} />
                  </div>
                  <div className="footer text-center">
                    <button className="btn btn-primary btn-link btn-wd btn-lg" type="submit">Get Started</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
