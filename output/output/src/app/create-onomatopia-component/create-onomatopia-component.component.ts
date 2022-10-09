import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.css']
})
export class CreateOnomatopiaComponentComponent implements OnInit {

  newOnomatopia:string="";

  @Output()
  sendOnomatopiaToParent :EventEmitter<string>=new EventEmitter();

 createOnomatopia() :void{
    this.sendOnomatopiaToParent .emit(this.newOnomatopia);

  }

    constructor() { }

  ngOnInit(): void {
  }

 
}
