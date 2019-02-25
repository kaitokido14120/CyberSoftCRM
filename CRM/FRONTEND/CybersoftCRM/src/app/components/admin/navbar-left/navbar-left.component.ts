import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/core/services/admin/transferData.service';

declare var $:any;

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {

  constructor(private tranformService: TransferDataService) { }

  ngOnInit() {
    this.moveNavbar()
  }

  // Move navbar when click buttonResponsive
  moveNavbar(){
    this.tranformService.data.subscribe(data => {
      if(typeof data === 'number' && data % 2 === 1){
        $('#navbarLeft').css({
          'left':'-500px'
        })
      } else {
        $('#navbarLeft').css({
          'left':'0px'
        })
      }
    })
  }
}
