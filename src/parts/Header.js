import React from 'react';
import Button from 'elements/Button';
import BrandIcon from 'parts/iconText';
import { ReactComponent as SearchIcon } from 'assets/images/icons/search-outline.svg';
import { ReactComponent as CartOutline } from 'assets/images/icons/cart-outline.svg';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-promo">
        Cari Kopi Cepat Mudah dan Nikmat...
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <BrandIcon />
        </div>
        <form className="navbar-form">
          <input type="search" className="navbar-form-search" placeholder="Cari Kopi, Cafe, ataupun Majalah...." />
          <button className="btn btn-primary navbar-form-btn" type="submit">
            <SearchIcon />
          </button>
        </form>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Button className="navbar-link" type="link" href="/shop">
              <CartOutline />
            </Button>
          </li>
          <li className="navbar-item">
            <Button className="navbar-link" type="link" href="/login">
              Masuk
            </Button>
          </li>
          <li className="navbar-item">
            <Button className="navbar-link btn btn-primary btn-register" type="link" href="/register">
              Daftar
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}