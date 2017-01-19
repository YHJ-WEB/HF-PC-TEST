import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements AfterViewInit,OnInit {
  ngAfterViewInit(): void {
    $('#serviceTime').datetimepicker({
      format: "yyyy-mm-dd hh:ii",
      autoclose: true,
      todayBtn: true,
      pickerPosition: "bottom-left",
      language: "zh-CN",
      minuteStep: 30
    });
    new AMap.Autocomplete({
      input: "address"
    });
  }

  constructor() {}

  ngOnInit() {
  }
}
