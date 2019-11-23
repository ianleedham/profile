export class Dimension {
    Value: number;
    UpperMaximum: number;
    LowerMaximum: number;
    MovingPositive: boolean;

    constructor(val: number, min: number, max: number) {
        this.Value = val;
        this.LowerMaximum = min;
        this.UpperMaximum = max;
    }

    changeValue() {
        if (this.MovingPositive) {
            this.Value += 10;
        } else {
            this.Value -= 10;
        }

        if (this.Value > this.UpperMaximum) {
            this.MovingPositive = false;
        }

        if (this.Value < this.LowerMaximum) {
            this.MovingPositive = true;
        }
    }
}
