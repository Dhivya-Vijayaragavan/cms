import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { MenuGuardService } from './menu-guard.service';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path:'login/home',component: CompanyFormComponent, canActivate:[MenuGuardService]},
  { path:'login/company',component: CompanyFormComponent, canActivate:[MenuGuardService]},
  { path:'login/companyList',component: CompanyComponent, canActivate:[MenuGuardService]},
  { path:'login/companyStock',component: StockComponent, canActivate:[MenuGuardService]},
  { path:'login/stock',component: StockComponent, canActivate:[MenuGuardService]},
  { path : 'login', component : LoginComponent },
  { path:'home/companyList', component:CompanyComponent },
  { path:'home/companyStock', component:StockComponent },
  { path:'home/stock', component:StockComponent },
  { path:'home/company', component:CompanyFormComponent },
  { path:'home', component:CompanyFormComponent },
  { path:'', redirectTo:"/login", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
