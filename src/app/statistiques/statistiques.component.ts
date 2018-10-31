import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../etudiant.service';
import {ActivatedRoute} from '@angular/router';
import 'echarts/src/chart/pie';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  echarts;
  etudiant;

  constructor(
    private route: ActivatedRoute,
    private etudiantsService: EtudiantService,

  ) { }

  ngOnInit() {
    this.getStudent();
    this.initEchart();
  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.etudiantsService.getStudentDetails(Number(id)).subscribe(etudiant => this.etudiant = etudiant);
  }

  initEchart(): void{
    // initialize echarts instance with prepared DOM
    const myChart = this.echarts.init(document.getElementById('main'));
  // draw chart
    myChart.setOption({
      title: {
        text: 'ECharts introductory example'
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}
