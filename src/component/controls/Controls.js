import React, { Component } from "react";

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render() {
    return (
      <section className="controls" >
        hello im the Controls
      </section>
    )
  }
}