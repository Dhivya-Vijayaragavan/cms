import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StockFormComponent } from './stock-form/stock-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { MinPipe } from './pipes/min.pipe';
import { MaxPipe } from './pipes/max.pipe';
import { AvgPipe } from './pipes/avg.pipe';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    CompanyComponent,
    StockFormComponent,
    CompanyFormComponent,
    MinPipe,
    MaxPipe,
    AvgPipe,
    StatisticComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
