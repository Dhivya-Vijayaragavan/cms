import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockService } from '../stock/stock.service';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() addCompanyData : Company | any;
  /** variable Declarations */
  public companyList : Array<Company> = [];

  /** Constructor */
  constructor(private router : Router, private _companyService : CompanyService, private _stockService: StockService, private dialog : MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem('UID')!= null) {
      this.retrieveCompanyDatas();
    } else {
      this.router.navigate(['/login'],{})
    }
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date : 2022-04-20 21:06:29
   * @description Function to Edit the stock price of the company
   */
  public editStock(selectedCompanyData : any) : void {
    let dialogRef = this.dialog.open(StockFormComponent,{width:'600px', height:'500px', data : {companyId : selectedCompanyData.id}})
    dialogRef.afterClosed().subscribe(result => {
      this.updateCompany(result, selectedCompanyData);
    });
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-16 14:01:25
   * @description Function to Emit the company id to the app component
   */
  public removeData(companyId : number) : void {
    this._companyService.removeCompany(companyId).subscribe(data=>{
      this.removeStock(companyId);
      this.retrieveCompanyDatas();
    });
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-18 18:28:10
   * @description Function to Fetch all the company datas
   */
  public retrieveCompanyDatas() :void {
    this._companyService.getCompanyDetails().subscribe(data => {
      this.companyList = data;
    })
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-21 22:20:10
   * @description Function to Remove the stock against company
   */
  public removeStock(companyId : any) : void {
    this._stockService.getStockDetails().subscribe(data => {
      data.map(stock => {
        if(stock.companyId == companyId) {
          this._stockService.removeStock(stock.id).subscribe(res => {
          })
        }
      })
    })
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-18 21:25:50
   * @description Function to Update the company Details
   */
  public updateCompany(latestStockPrice: number, companyData:any) :void {
    companyData.latestStockPrice = latestStockPrice;
    this._companyService.updateCompany(companyData, companyData.id).subscribe(data=>{
      this.retrieveCompanyDatas();
    });
  }
  
  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-21 15:23:02
   * @description Navigate to Stock component
   */
  public navigate(companyData : any) : void {
    localStorage.setItem("CN",companyData.companyName);
    this.router.navigate( ['/home/companyStock',  {id: companyData.id}]);
  }
}
