import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {
  barChart: any;
  list: any;
  total: any;
  dataname: any;
  chart: any;
  countreq: any;



  constructor(public http: HttpClient) { }

  // get_data() {
  //   this.http.get('http://203.158.144.140/APIchart/charts/Employee')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.data1 = res.Table.map(res => res.Total);
  //       this.dataname = res.Table.map(res => res.et_name);

  //       this.barChartMethod();
  //     });
  // }
  get_data() {
    this.http.get('http://203.158.144.140/APIchart/charts/Empall')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.total = res.Table.map(res => res.total);
        this.dataname = res.Table.map(res => res.stafftype);

        this.barChartMethod();
      });
  }

  ngOnInit() {
    this.get_data();
  }

  barChartMethod() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',
      // The data for our dataset 
      data: {
        labels: this.dataname,
        datasets: [{
          label: "dataset",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: this.total,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        padding: 50,
        legend: {
          display: true,
          position: 'bottom',
          
          labels:{
            boxWidth: 20,            
          }

        }
      },
    });
  }
}



