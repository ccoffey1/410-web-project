import React, { Component } from 'react';
import * as d3 from "d3";

// source: https://vizhub.com/undefined/0e0e3f80e3bb40ab918c72dea3f11930
class Smiley extends Component {

    constructor(props) {
        super(props);
        // create a ref to store the moveable DOM element
        this.moveable = React.createRef();
      }
    
      componentDidMount() {
        this.drawSmiley();
    }

    drawSmiley() {
        const svg=d3.select('svg');

        const height = parseFloat(svg.attr('height'));
        const width =+svg.attr('width');
      
        const g = svg.append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);
      
        const circle = g.append('circle')
          .attr('r',height/2)
            .attr('fill', '#8acbb5');
      
        const eyeSpacing = 100;
        const eyebrowvar = 35;
        const eyebrowheight = 7;
        const eyeBOffset = 10;
      
        const eyesG = g.append('g')
            .attr('fill', '#305147');
      
        const eyeB = eyesG.append('g')
            .attr('fill', '#305147')
            .attr('transform',`translate(0,${eyeBOffset})`);
      
        const leftEye = eyesG.append('circle')
          .attr('r',10)
            .attr('cx', - eyeSpacing);
      

        const rightEye = eyesG.append('circle')
          .attr('r',10)
            .attr('cx',+ eyeSpacing);
      
      
        const leftEyebrow = eyeB.append('rect')
            .attr("id", "leftBrow")
            .attr('x',-eyeSpacing - eyebrowvar/2)
            .attr('y',-40)
            .attr('width', eyebrowvar)
            .attr('height', eyebrowheight)
            // .transition().duration(2000)
            //     .attr('y', -30)
            // .transition().duration(1000)
            //     .attr('y', -70);
      
        const rightEyebrow = eyeB.append('rect')
            .attr('x',+eyeSpacing -eyebrowvar/2)
            .attr('y',-40)
            .attr('width', eyebrowvar)
          .attr('height', eyebrowheight);
      
      
        const mouth = g
          .append('path')
            .attr('width', 80)
          .attr('fill', '#305147')
          .attr('d', d3.arc()({
              innerRadius: 160,
              outerRadius: 150,
              startAngle: Math.PI / 2 +0.4,
              endAngle: Math.PI +0.3
            }));
    }
    
    handleSubmit() {
        d3.select('#leftBrow')
        .transition().duration(2000)
        .attr('y', -30)
        .transition().duration(1000)
        .attr('y', -70);
    }

    render() {
        return <svg width="350" height="350"> </svg>
     }
}

export default Smiley;