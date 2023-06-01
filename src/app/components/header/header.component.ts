import { Component, OnInit } from '@angular/core';
import { ApiCurrencyService } from 'src/app/services/api-currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currencyDataEURtoUAH: any;
  currencyDataUSDtoUAH: any;

  constructor(private apiCurrencyService: ApiCurrencyService) {}

  ngOnInit(): void {
    this.getCurrencyDataEURtoUAH();
    this.getCurrencyDataUSDtoUAH();
  }

  getCurrencyDataEURtoUAH(): void {
    this.apiCurrencyService.getCurrencyData('EUR').subscribe(
      (response: any) => {
        this.currencyDataEURtoUAH = response.rates.UAH;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  getCurrencyDataUSDtoUAH(): void {
    this.apiCurrencyService.getCurrencyData('USD').subscribe(
      (response: any) => {
        this.currencyDataUSDtoUAH = response.rates.UAH;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
