import {Component, output, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {investmentInput} from "../models/investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<investmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');

  onsubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment()),
      duration:  Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestment())
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedInvestment.set('5');
    this.enteredDuration.set('10');
  };
}
