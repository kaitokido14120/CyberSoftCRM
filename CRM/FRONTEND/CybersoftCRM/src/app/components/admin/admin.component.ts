import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/core/services/admin/transferData.service';

declare var $:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private tranformService: TransferDataService) { }

  ngOnInit() {
    this.moveNavbar();
  }

  moveNavbar(){
    this.tranformService.data.subscribe(data => {
      if(typeof data === 'number' && data % 2 === 1){
        $('.navbarLeft').css({
          'width':'0px'
        })
      } else {
        $('.navbarLeft').css({
          'width':'255px'
        })
      }
    })
  }

}
