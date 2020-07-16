import React from 'react';

import Button from 'elements/Button';

export default function NewProduct({ data }) {
  return data.map( ( category, indexNew1 ) => {
    return <section className="new-product" key={`new-product-${indexNew1}`}>
      <h4 className="new-product-heading heading-lg">
        { category.name }
      </h4>
      <div className="container">
        {
          category.items.length === 0 ? 
          <div className="no-product">
            Mohon, maaf belum ada produk ditemukan
          </div>
          :
          category.items.map( (items, indexNew2) => {
            return (
              <div className="item column-3 row-1" key={`new-product-${indexNew1}-item-${indexNew2}`}>
                <div className="card">
                  {
                    items.isPopular && 
                    (
                      <div className="card-tag">
                        Popular{" "}<span className="card-tag-text">Choice</span>
                      </div>
                    )
                  }
                  <figure className="card-image" style={{ height: "20rem" }}>
                    <img src={ items.imageUrl } alt={ items.name } className="card-image-cover" />
                  </figure>
                  <div className="card-meta">
                    <Button type="link" className="card-link" href={`/properties/${ items._id }`}>
                      <h5 className="card-meta-heading">{ items.name }</h5>
                    </Button>
                    <span className="card-meta-description">
                      {items.city}, {items.country}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  })
}
