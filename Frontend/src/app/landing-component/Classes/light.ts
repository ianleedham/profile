import { LightCircle } from './lightCircles';
export class Light {
    position = { x: 100, y: 100 };
    radius = 100;
    circles: LightCircle[] = [];
    angle = 0;
    constructor(private ctx: CanvasRenderingContext2D) {

        this.position.y =  200;
        this.position.x = 400;
    }

    public draw() {
        let x = 0;
        for (x; x < 100; x++) {
            this.angle = Math.PI * 2 * Math.random();
            this.radius = 3 * Math.random();
            const circle = new LightCircle(this.ctx);
            circle.position.x = this.radius * Math.cos(this.angle) + this.position.x;
            circle.position.y = this.radius * Math.sin(this.angle) + this.position.y;
            circle.draw();
        }

    }
}
