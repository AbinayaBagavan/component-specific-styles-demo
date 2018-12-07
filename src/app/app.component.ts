import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
 /* styles :[`
    table, th, td {
    border: 1px solid black;
    }
  `]*/
})
export class AppComponent  {
  userLocationDetails: any=[{ name: 'Rajesh', location: 'Chennai' },
  { name: 'Ritesh' , location: 'Bangalore' },
  { name: 'Snephal' , location : 'Hydrebad'}];
}
