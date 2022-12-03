import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  /** Constructor */
  constructor(private router : Router) { }

  /** variable Declarations */
  @Input() statisticData : any;

  ngOnInit(): void {
    if(localStorage.getItem('UID')== null) {
      this.router.navigate(['/login'],{})
    }
  }
}
