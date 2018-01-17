import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today=new Date();
  title:string="Us Time Zone Display"
  zone='UTC';
  onClick(new_zone){
    if(new_zone=="clear"){
      this.zone='UTC';
    }else{
      this.zone=new_zone;
    }
}
}
