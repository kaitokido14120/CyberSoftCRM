import { Component, OnInit } from '@angular/core';
import { TransferDataService } from 'src/core/services/admin/transferData.service';
declare var $:any;


@Component({
  selector: 'app-button-animation',
  templateUrl: './button-animation.component.html',
  styleUrls: ['./button-animation.component.scss']
})
export class ButtonAnimationComponent implements OnInit {

  private flag:number = 0;

  constructor(private tranformService: TransferDataService) { }

  ngOnInit() {
    this.ButtonMenu();
  }

  // Check List
  checkClick(){
    this.flag += 1;
    this.tranformService.data.emit(this.flag);
  }



  // Button Menu Animation
  ButtonMenu(){
    var trigger = $('#hamburger'),
    isClosed = false;

    trigger.click(function () {
        burgerTime();
        $(".overplayMeny").toggleClass("openMenu");
        $(".burger-icon").toggleClass("bgMenu");
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
  }

}
