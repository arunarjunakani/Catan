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
		this.drawTiltedHexagon(ctx, 400, 100, 50, "#0000FF");
		ctx.rotate(Math.PI / 4);
  }

  //Calculates the apothem of a hexagon based on the radius
  calcApothem(rad) {
  	return rad * Math.sin(Math.PI / 3);
  }

  drawHexagon(ctx, x, y, radius, color) {
  	if (!color) {
  		color = "#000000";
  	}
		ctx.beginPath();
		for (let i = 0; i < 7; i++) {
  		ctx.lineTo(x + radius * Math.cos(i * 2 * Math.PI / 6), y + radius * Math.sin(i * 2 * Math.PI / 6));
		}
		ctx.strokeStyle = "#000000";
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();
  }

  drawTiltedHexagon(ctx, x, y, radius, color) {
  	if (!color) {
  		color = "#000000";
  	}
		ctx.beginPath();
		for (let i = 0; i < 7; i++) {
			let coordinates = [x + radius * Math.cos(i * 2 * Math.PI / 6), y + radius * Math.sin(i * 2 * Math.PI / 6)];

			//Rotates the coordinates by 30 degrees
			let xDelta = coordinates[0] - x;
			let yDelta = coordinates[1] - y;
			let rotatedCoordinates = [xDelta * Math.cos(Math.PI / 6) - yDelta * Math.sin(Math.PI / 6) + x, 
				yDelta * Math.cos(Math.PI / 6) + xDelta * Math.sin(Math.PI / 6) + y];
			ctx.lineTo(rotatedCoordinates[0], rotatedCoordinates[1]);
		}
		ctx.strokeStyle = "#000000";
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