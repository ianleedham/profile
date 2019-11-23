import { Dimension } from './Dimension';

export class Line {
    private color = 'red';
    private x1: Dimension;
    private y1: Dimension;
    private x2: Dimension;
    private y2: Dimension;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.x1 = new Dimension(Math.random() * 10, 0, window.innerHeight);
        this.x2 = new Dimension(Math.random() * 10, 0, window.innerHeight);
        this.y1 = new Dimension(Math.random() * 10, 0, window.innerWidth);
        this.y2 = new Dimension(Math.random() * 10, 0, window.innerWidth);
    }

    public spin() {
        this.x1.changeValue();
        this.x2.changeValue();
        this.y1.changeValue();
        this.y2.changeValue();
    }
}
