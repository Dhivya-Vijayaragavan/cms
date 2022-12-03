import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  /** Variable Declaration */
  public apiUrl : String = "http://localhost:3000/stock";

  constructor(private http: HttpClient) { }
  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 13:30:52
   * @Description : Get the Stock data from the db.json 
   */
  getStockDetails() : Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}`).pipe(catchError(this.errorHandler));
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 17:50:42
   * @Description : Remove the company data
   */
  addStock(stock : Stock) : Observable<Stock> {
    console.log(stock)
    return this.http.post<Stock>(`${this.apiUrl}`, stock).pipe(catchError(this.errorHandler));
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 18:51:54
   * @Description : Remove the company data
   */
  removeStock(stockId : number) :Observable<Stock>{
    return this.http.delete<Stock>(`${this.apiUrl}/${stockId}`).pipe(catchError(this.errorHandler));
  }
  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 14:11:17
   * @Description : Error Handling function 
   */
  errorHandler(error:HttpErrorResponse) {
    return throwError(error.message + "Server is not responding")
  }
}
