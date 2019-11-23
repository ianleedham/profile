export class LightCircle {
    public position = { x: 100, y: 100 };
    private radius = 0.05;

    constructor(private ctx: CanvasRenderingContext2D) {
    }

    public draw() {
        this.ctx.translate(0.5, 0.5);
        // Draw the ellipse
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.radius,
        this.radius, Math.PI / 4, 0, 2 * Math.PI);

        this.ctx.stroke();
        this.ctx.translate(-0.5, -0.5);
    }
}


