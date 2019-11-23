import { Component, OnInit, NgZone, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Line } from './Classes/Line';
import { SpinningLine } from './Classes/SpinningLine';
import { LightCircle } from './Classes/lightCircles';
import { Light } from './Classes/light';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.sass']
})
export class LandingComponentComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  requestId;
  interval;
  innerWidth: number;
  lines: SpinningLine[] = [];
  private ctx: CanvasRenderingContext2D;
  lightCircles: LightCircle[] = [];
  light: Light;
  constructor(private ngZone: NgZone) { }
  ngOnInit() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ctx.font = "30px Arial";



    this.light = new Light(this.ctx);
    let x = 0;
    for (x; x < 27; x++) {
      const line = new SpinningLine(this.ctx);
      this.lines = this.lines.concat(line);
    }
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 100);
  }

  tick() {

    this.ctx.fillStyle = 'red';
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.lines.forEach((line: SpinningLine) => {
      line.move();
    });
    this.ctx.fillStyle = 'blue';
    this.ctx.fillText('Hello I\'m Ian a full stack web developer', this.ctx.canvas.width / 2 - 280, this.ctx.canvas.height / 2);
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    const line = new SpinningLine(this.ctx);
    this.lines = this.lines.concat(line);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId);
  }
}
