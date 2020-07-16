import React from 'react'

import Button from 'elements/Button';

export default function ChooseMenu(props) {
  return (
    <section className="menu" ref={ props.refChooseMenu }>
      <h4 className="menu-heading heading-lg">
        Temukan yang anda inginkan
      </h4>
      <div className="menu-choose container">
        { 
          props.data.map( (item, index ) => {
            return (
              <div key={`menu-${index}`} className={`item column-4${index === 0 ? " row-2" : " row-1" }`}>
                <div className="card card-menu">
                  <div className="card-tag">
                    ${ item.price }
                    <span className="card-tag-text"> per { item.unit }</span>
                  </div>
                  <figure className="card-image">
                    <img
                      src={ item.imageUrl }
                      alt={ item.name }
                      className="card-image-cover"
                    />
                  </figure>
                  <div className="card-meta">
                    <Button type="link" className="card-link" href={`/properties/${ item._id }`}>
                      <h5 className="card-meta-heading">{ item.name }</h5>
                    </Button>
                    <span className="card-meta-description">
                      { item.description }
                    </span>
                  </div>
                </div>
              </div>
            );
          })          
        }
      </div>

    </section>
  )
}
