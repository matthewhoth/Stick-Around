import React from "react";
import Header from "./Header";
import Meta from "./Meta";
export default class Page extends React.PureComponent {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <p>Catch me up top how about that</p>
        {this.props.children}
      </div>
    );
  }
}
