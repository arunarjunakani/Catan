import React, { Component } from 'react';

class Canvas extends Component {
	componentDidMount() {
		this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
		this.drawHexagon(ctx, 400, this.calcApothem(50), 50, "#FF0000");
		this.drawHexagon(ctx, 400, 3 * this.calcApothem(50), 50, "#00FF00");
		this.drawHexagon(ctx, 475, 2 * this.calcApothem(50), 50, "#0000FF");
  }

  //Calculates the apothem of a polygon based on the radius
  calcApothem(rad) {
  	return rad * Math.sin(Math.PI / 3);
  }

  drawHexagon(ctx, x, y, size, color) {
  	if (!color) {
  		color = "#000000";
  	}
		ctx.beginPath();
		for (let i = 0; i < 7; i++) {
  		ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
		}
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();
  }

	render() {
		return (
			<div className="Canvas">
        <canvas ref="canvas" width="800" height="600" />				
			</div>
		);
	}
}

export default Canvas;