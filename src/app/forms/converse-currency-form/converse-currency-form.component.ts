import { Component } from '@angular/core';
import { ApiCurrencyService } from 'src/app/services/api-currency.service';

@Component({
  selector: 'app-converse-currency-form',
  templateUrl: './converse-currency-form.component.html',
  styleUrls: ['./converse-currency-form.component.css'],
})
export class ConverseCurrencyFormComponent {
  fromInputValue: any;
  toInputValue: any;
  fromSelectValue: any;
  toSelectValue: any;
  constructor(private apiCurrencyService: ApiCurrencyService) {}

  convertFrom(
    fromInputValue: any,
    fromSelectValue: any,
    toSelectValue: any
  ): void {
    this.apiCurrencyService.getCurrencyData(fromSelectValue).subscribe(
      (data: any) => {
        const exchangeRateToSelect = data.rates[toSelectValue];

        if (exchangeRateToSelect) {
          this.fromInputValue = fromInputValue * exchangeRateToSelect;
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  convertTo(fromSelectValue: any, toInputValue: any, toSelectValue: any): void {
    this.apiCurrencyService.getCurrencyData(toSelectValue).subscribe(
      (data: any) => {
        const exchangeRateFromSelect = data.rates[fromSelectValue];

        if (exchangeRateFromSelect) {
          this.toInputValue = toInputValue * exchangeRateFromSelect;
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
