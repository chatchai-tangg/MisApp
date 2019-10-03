import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient,  } from '@angular/common/http';

@Component({
  selector: 'app-staffscholar',
  templateUrl: './staffscholar.page.html',
  styleUrls: ['./staffscholar.page.scss'],
})
export class StaffscholarPage implements OnInit {
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

  constructor(public http: HttpClient) { }

  get_reqscholar() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Reqscholar')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.dataposition = res.Table.map(res => res.ภายในประเทศ);
        this.datanameposition = res.Table.map(res => res.ต่างประเทศ);
        // console.log(this.dataposition)
        // console.log(this.datanameposition)
        // this.get_reqscholar();
      });
  }

  ngOnInit() {
    this.get_reqscholar();
  }

  Chartscholar() {
    var ctxscholar = (<any>document.getElementById('Chartscholar')).getContext('2d');
    this.chart = new Chart(ctxscholar, {
      // The type of chart we want to create
      type: 'horizontalBar',
      // The data for our dataset
      data: {
        labels: this.datanameposition,
        datasets: [{
          label: 'ระดับการศึกษา',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          data: this.dataposition,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          },
          render: 'value'
        },
      }
    });
  }

}
