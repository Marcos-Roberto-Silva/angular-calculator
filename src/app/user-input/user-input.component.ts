import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private InvestmentService: InvestmentService) { }

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');

  investmentData = {
    initialInvestment: Number(this.enteredInitialInvestment()),
    duration:  Number(this.enteredDuration()),
    expectedReturn: Number(this.enteredExpectedInvestment()),
    annualInvestment: Number(this.enteredAnnualInvestment())
  }

  onsubmit() {
    this.InvestmentService.calculateInvestmentResults(this.investmentData);

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedInvestment.set('5');
    this.enteredDuration.set('10');
  };
}
