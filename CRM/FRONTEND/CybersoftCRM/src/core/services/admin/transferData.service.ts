import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TransferDataService{

    @Output() data:any = new EventEmitter();

    constructor(){}


}