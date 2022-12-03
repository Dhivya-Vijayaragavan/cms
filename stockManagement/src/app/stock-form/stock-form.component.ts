import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockService } from '../stock/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
/** constructor */
constructor(public dialogRef: MatDialogRef<StockFormComponent>, private router : Router, private _stockService : StockService, @Inject(MAT_DIALOG_DATA) private data : any) { 
}

/** Stock Form Group */
public stockForm = new FormGroup({
  stockId : new FormControl('',[Validators.required]),
  stockName : new FormControl('',[Validators.required]),
  stockPrice : new FormControl('', [Validators.required]),
  stockDate : new FormControl('',[Validators.required])
});

/** Variable Declaration */
public submitted : boolean = false;

ngOnInit(): void {
  if(localStorage.getItem('UID')== null) {
    this.router.navigate(['/login'],{})
  }
}

/**
 * @Author : Dhivya Vijayaragavan
 * @created_date: 2022-04-18 18:25:38
 * @description Function to Get the stock form controls
 */
get sf(){
  return this.stockForm.controls;
}
/**
 * @Author : Dhivya Vijayaragavan
 * @created_date: 2022-04-18 18:25:38
 * @description Function to Add a new Stock through service
 */
public submitStock() : void {
  this.submitted=true;
  if(this.stockForm.valid) {
    let stockData : any = {
      stockId : this.stockForm.controls['stockId'].value,
      stockName : this.stockForm.controls['stockName'].value,
      stockPrice: this.stockForm.controls['stockPrice'].value,
      stockDate : this.stockForm.controls['stockDate'].value,
      companyId : this.data.companyId
    }
    this._stockService.addStock(stockData).subscribe((data: any)=>{
      this.dialogRef.close(this.stockForm.controls['stockPrice'].value);
    });
  }
}

}
