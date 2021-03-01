import React, { Component } from "react";
import classes from "../Image/Image.module.css";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "Dog",
    };
  }

  getAnimal() {
    // Would be an API here to get the new data
    this.setState({ animal: "Red Panda" });
  }

  componentDidMount() {
    this.getAnimal();
  }

  render() {
    return <div className={classes.frame}>{this.state.animal}</div>;
  }
}

export default Lifecycle;
