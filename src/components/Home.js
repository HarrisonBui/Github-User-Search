import React from "react";

import Searchbar from './Searchbar'
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Searchbar/>
      </div>
    );
  }
}
