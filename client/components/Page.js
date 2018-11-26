import React from "react";

export default class Page extends React.PureComponent {
  render() {
    return (
      <div>
        <p>Catch me up top how about that</p>
        {this.props.children}
      </div>
    );
  }
}
