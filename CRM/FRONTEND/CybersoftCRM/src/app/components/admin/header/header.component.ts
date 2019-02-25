import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/core/services/admin/transferData.service';

declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tranformService: TransferDataService) { }

  ngOnInit() {
    this.moveHeader()
  }

  moveHeader(){
    this.tranformService.data.subscribe(data => {
      if(typeof data === 'number' && data % 2 === 1){
        $('#myNavbar').css({
          'width':'100%'
        })
      } else {
        $('#myNavbar').css({
          'width':'calc(100% - 255px)'
        })
      }
    })
  }

}
