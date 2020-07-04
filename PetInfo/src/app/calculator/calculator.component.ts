import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  oper: string;
  result: number;

  constructor() {
  }

  caculate() {
    switch (this.oper) {
      case "+":
        this.result = this.num1 + this.num2
        break;

      case "-":
        this.result = this.num1 - this.num2
        break;

      case "*":
        this.result = this.num1 * this.num2
        break;

      case "/":

        this.result = (parseFloat((this.num1 / this.num2).toFixed(4)))
        break;
    }
  }

  ngOnInit(): void {
  }


}
