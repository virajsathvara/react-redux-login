import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search_products, sort_by_qty, sort_by_price } from '../actions';

const ProductList = () => {

  const { products } = useSelector(state => state);
  const [search, setSearch] = useState("");
  const [toggleResults, setToggleResults] = useState(false);
  const [qtySort, setQtySort] = useState("DSC");
  const [priceSort, setPriceSort] = useState("DSC");
  const dispatch = useDispatch();
  const productsToShow = toggleResults ? products.filtered : products.all;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search_products(products.all, search));
    setToggleResults(true);
  };

  const handleQuantitySort = () => {
    const type = (qtySort === "DSC") ? "ASC" : "DSC";
    setQtySort(type);
    dispatch(sort_by_qty(productsToShow, type));
  };

  const handlePriceSort = () => {
    const type = (priceSort === "DSC") ? "ASC" : "DSC";
    setPriceSort(type);
    dispatch(sort_by_price(productsToShow, type));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <div className="row col-md-8">
                <h4 className="card-title">Products</h4>
                <div className="col-md-2">
                  <a className="btn btn-primary btn-round" href="/addproduct"> Add Product </a>
                </div>
                <form className="form-inline ml-auto mr-auto" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" value={search} onChange={(e) => setSearch
                      (e.target.value)} />
                  </div>
                  <button type="submit" className="btn btn-white btn-raised btn-fab btn-round">
                    <i className="material-icons">search</i>
                  </button>
                </form>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className=" text-primary">
                    <tr>
                      <th>
                        ID
                        </th>
                      <th>
                        NAME
                        </th>
                      <th>
                        DESCRIPTION
                        </th>
                      <th>
                        <div className="row" style={{ alignItems: "center" }}>
                          <button className="btn btn-fab btn-round" onClick={handleQuantitySort}>
                            {(qtySort === "ASC") ?
                              <i className="material-icons">arrow_circle_up</i> :
                              <i className="material-icons">arrow_circle_down</i>}
                          </button>
                        QTY
                        </div>
                      </th>
                      <th>
                        <div className="row" style={{ alignItems: "center" }}>
                          <button className="btn btn-fab btn-round" onClick={handlePriceSort}>
                            {(priceSort === "ASC") ?
                              <i className="material-icons">arrow_circle_up</i> :
                              <i className="material-icons">arrow_circle_down</i>}
                          </button>
                          PRICE
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productsToShow.map((product, i) => {
                        return <tr key={i}>
                          <td>
                            {i}
                          </td>
                          <td>
                            <div className="row" style={{ alignItems: "center" }}>
                              <div className="profile-photo-small">
                                <img src={product.image} alt={product.name} className="rounded-circle img-fluid" />
                              </div>
                              <div className="col-md-8">
                                {product.name}
                              </div>
                            </div>
                          </td>
                          <td>
                            {product.description.substring(0, 30)}...
                          </td>
                          <td>
                            {product.quantity}
                          </td>
                          <td className="text-primary">
                            ${product.price}
                          </td>
                        </tr>;
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;