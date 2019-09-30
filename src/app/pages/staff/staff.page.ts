import { Component, OnInit,ViewChild} from '@angular/core';
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
  data1: any;
  dataname: any;
  chart: any;
  dataposition: any;
  datanameposition: any;
  dlname: any;
  degree: any;
  etname: any;
  countreq: any;

  constructor(private http: HttpClient) { }

  get_data() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Employee')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.data1 = res.Table.map(res => res.Total)
        this.dataname = res.Table.map(res => res.et_name)
        // console.log(this.data1)
        // console.log(this.dataname)
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
          data: this.data1,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        },
      }
    });
  }
  

}
