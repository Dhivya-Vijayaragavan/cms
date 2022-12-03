import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  
  /** variable Declarations */
  public stockList : Array<Stock> = [];
  public statisticData : any = {};
  public companyId : any;
  public selectedCompanyName : any = '';

  /** Constructor */
  constructor(private _stockService : StockService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('UID')== null) {
      this.router.navigate(['/login'],{})
    } else {
      this.companyId = this.route.snapshot.paramMap.get('id');
      if(this.companyId != null) {
        this.selectedCompanyName = localStorage.getItem("CN");
      }
      this.retrieveStock();
    }
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-16 13:32:34
   * @description Function to Emit the Stock id to the app component
   */
  public removeData(stock : any) : void {
    console.log(stock)
    this._stockService.removeStock(stock.id).subscribe(data=>{
      this.retrieveStock();
    });
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-18 18:56:10
   * @description Function to Fetch all the stock details
   */
  public retrieveStock() : void {
    this._stockService.getStockDetails().subscribe(stockData => {
      if(this.companyId != null) {
        this.stockList = [];
        stockData.map((data : any) => {
          if(data.companyId == this.companyId) {
            this.stockList.push(data)
          }
        })
      } else {
         this.stockList = stockData;
      }
      this.statisticData = {
        companyName : this.selectedCompanyName,
        data : this.stockList
      }
    })
  }  
}
