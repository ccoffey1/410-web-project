import React, { Component } from "react";
import * as d3 from "d3";

class Ball extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      x: props.x
    };
  }

  circleRef = React.createRef();

  componentDidUpdate() {
    let el = d3.select(this.circleRef.current);

    el.transition()
      .duration(1000)
      .style('fill', 'orange')
      .on("end", () =>
        this.setState({
          x: this.props.x
        })
      );
  }

  render() {
    const { x } = this.state;

    return <circle r="75" cx={200} cy={200} fill="purple" ref={this.circleRef} />;
  }
}

export default Ball;