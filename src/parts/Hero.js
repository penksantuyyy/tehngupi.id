import React from 'react';
import Button from 'elements/Button';

import LocationIcon from 'assets/images/icons/location-outline.svg';
import CoffeeIcon from 'assets/images/icons/cafe-outline.svg';
import FoodIcon from 'assets/images/icons/fast-food-outline.svg';

import formatNumber from 'utils/formatNumber';

export default function Hero(props) {

  function showMenu() {
    window.scrollTo({
      top: props.refChooseMenu.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <div className="hero">
      <div className="hero-text">
        <h3 className="hero-text-open">Cari Kopi Terbaik?</h3>
        <h2 className="hero-text-solution">Cari Aja di <span className="hero-text-solution-bold">TehNgupi</span></h2>
        <p className="hero-text-excellence">Cepat, Mudah, dan Murah</p>
      </div>
      <div className="hero-cta">
        <Button className="btn btn-primary btn-medium" hasShadow isPrimary onClick={showMenu}>
          Cari Kopi
        </Button>
      </div>
      <div className="hero-icon">
        <div className="hero-icon-text">
          <img src={ LocationIcon } alt="Cafe"/>
          <h6 className="hero-icon-text-description">
            <span className="hero-icon-text-bold">{ formatNumber(props.data.cafe) }</span> Cafe 
          </h6>
        </div>
        <div className="hero-icon-text">
          <img src={ CoffeeIcon } alt="Coffee"/>
          <h6 className="hero-icon-text-description">
            <span className="hero-icon-text-bold">{ formatNumber(props.data.coffee) }</span> Coffee 
          </h6>
        </div>
        <div className="hero-icon-text">
          <img src={ FoodIcon } alt="Bites"/>
          <h6 className="hero-icon-text-description">
            <span className="hero-icon-text-bold">{ formatNumber(props.data.bites) }</span> Bites 
          </h6>
        </div>
      </div>
    </div>
  )
}
