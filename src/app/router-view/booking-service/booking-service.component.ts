import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-booking-service',
  templateUrl: './booking-service.component.html',
  styleUrls: ['./booking-service.component.scss']
})
export class BookingServiceComponent implements AfterViewInit,OnInit {
  ngAfterViewInit(): void {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green'
    });
    $('#serviceDate').datetimepicker({
      format: "yyyy-mm-dd hh:ii",
      autoclose: true,
      todayBtn: true,
      pickerPosition: "bottom-left",
      language: "zh-CN",
      minuteStep: 30
    });
    new AMap.Autocomplete({
      input: "serviceAddress"
    });
  }

  constructor() {}

  ngOnInit() {
  }
}
