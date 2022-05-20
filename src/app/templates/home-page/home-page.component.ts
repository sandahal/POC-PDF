import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit() {
  }

  downloadPDF() {
    const canvas: any = document.querySelector('#cool-canvas');
    //creates image
    var canvasImg = canvas && canvas.toDataURL("image/png", 1.0);
    
    //creates PDF from img
    var doc = new jsPDF('landscape');
    doc.addImage(canvasImg, 'PNG', 10, 10, 280, 150 );
    doc.save('Chart.pdf');
  }

}
