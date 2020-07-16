import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import ChooseMenu from 'parts/ChooseMenu';
import NewProduct from 'parts/NewProduct';

import landingPage from 'json/landingPage.json';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refChooseMenu = React.createRef();
  }

  render() {
    return (
      <>
        <Header { ...this.props }></Header>
        <Hero refChooseMenu={this.refChooseMenu} data={ landingPage.hero }/>
        <ChooseMenu refChooseMenu={this.refChooseMenu} data={ landingPage.chooseMenu }/>
        <NewProduct data={landingPage.categories} />
      </>
    );
  }
}