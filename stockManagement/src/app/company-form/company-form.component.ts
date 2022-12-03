import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  /** Constructor */
  constructor(private _companyService: CompanyService, private router :Router) { }

  /** Company Form Group */
  public companyForm = new FormGroup({
    companyName : new FormControl('',Validators.required),
    ceo : new FormControl('', Validators.required),
    websiteLink : new FormControl('', [Validators.required, Validators.pattern('http(s?)(:\/\/)((www.)?)([a-zA-z0-9\-_]+)(.com)')])
  });

  /** variable Declarations */
  public submitted : Boolean = false;
  public companyData : any;

  ngOnInit(): void {
    if(localStorage.getItem('UID')== null) {
      this.router.navigate(['/login'],{})
    }
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date : 2022-04-21 13:08:07,
   * @description : Get the control values
   */
  get cf() {
    return this.companyForm.controls;
  }

  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date : 2022-04-20 20:23:43
   * @description : Function to add the Company data into the json server
   */
  public submitCompany() : void {
    this.submitted = true;
    if(this.submitted && this.companyForm.valid) {
      this.companyData = {
        companyName : this.companyForm.controls['companyName'].value,
        companyCeo : this.companyForm.controls['ceo'].value,
        companySite : this.companyForm.controls['websiteLink'].value
      }
      this.addCompany();
    }
  }
    
  /**
   * @Author : Dhivya Vijayaragavan
   * @created_date: 2022-04-18 18:27:15
   * @description Function to Add the new company data into db.json
   */
  public addCompany() {
    this._companyService.addCompany(this.companyData).subscribe(data=>{
      this.router.navigate(['/home/companyList'], {replaceUrl:true})
    })
  }
}
