import { Line } from './Line';
import { Light } from './light';

export class SpinningLine {
    center = { x: 100, y: 100 };
    positionOne = { x: 100, y: 100 };
    positionTwo = { x: 200, y: 500 };
    radius = 400;
    angle = Math.PI;
    light: Light;
    constructor(private ctx: CanvasRenderingContext2D) {
        this.center.x = this.ctx.canvas.width / 4;
        this.center.y = this.ctx.canvas.height  * 0.8 * Math.random();
        this.angle = Math.PI * 2 * Math.random();

        this.light = new Light(this.ctx);
        this.light.position = this.positionTwo;
    }


    public move() {

        this.ctx.strokeStyle = 'white';
        this.light.draw();

        this.ctx.strokeStyle = 'green';
        this.angle += Math.PI / 360;
        this.positionOne.y =  this.radius * Math.sin(this.angle) / 3 - this.ctx.canvas.height * 5;
        this.positionOne.x = this.radius * Math.cos(this.angle) + this.ctx.canvas.width * 1.5;

        this.positionTwo.y = this.radius * Math.sin(this.angle) / 3 + this.center.y;
        this.positionTwo.x = this.radius * Math.cos(this.angle) + this.center.x * 2;

        this.draw();
    }

    private draw() {
        this.ctx.translate(0.5, 0.5);
        this.ctx.beginPath();
        this.ctx.moveTo(this.positionTwo.x, this.positionTwo.y);
        this.ctx.lineTo(this.positionOne.x, this.positionOne.y);
        this.ctx.stroke();
        this.ctx.translate(-0.5, -0.5);
    }
}


