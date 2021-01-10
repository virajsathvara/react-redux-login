import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {

  const { products } = useSelector(state => state);

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
                        QTY
                        </th>
                      <th>
                        PRICE
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.map((product, i) => {
                        return <tr key={i}>
                          <td>
                            {i}
                          </td>
                          <td className="row" style={{ alignItems: "center" }}>
                            <div className="profile-photo-small">
                              <img src={product.image} alt={product.name} className="rounded-circle img-fluid" />
                            </div>
                            <div className="col-md-8">
                              {product.name}
                            </div>
                          </td>
                          <td>
                            {product.description}
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