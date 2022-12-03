import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  /** Variable Declaration */
  public apiUrl : String = "http://localhost:3000/company";
  constructor(private http : HttpClient) { }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 13:21:54,
   * @Description : Get the comapny data from the db.json 
   */
  getCompanyDetails() : Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}`).pipe(catchError(this.errorHandler));
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 18:24:38
   * @Description : Add a New Company date into db.json 
   */
  addCompany(company : Company) : Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}`, company).pipe(catchError(this.errorHandler));
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 18:50:08
   * @Description : Remove the company data
   */
  removeCompany(companyId : number) :Observable<Company>{
    return this.http.delete<Company>(`${this.apiUrl}/${companyId}`).pipe(catchError(this.errorHandler));
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @create_date : 2022-04-18 21:28:30
   * @Description : Update the company data
   */
  updateCompany(companyData : Company, companyId : number) : Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${companyId}`, companyData).pipe(catchError(this.errorHandler));
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
