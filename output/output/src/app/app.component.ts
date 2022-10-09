import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

onomatopoeiaList :Array<string>=new Array<string>;

onReceiveNewOnomatopia(event: string): void{
  this.onomatopoeiaList.push(event);
}


}
