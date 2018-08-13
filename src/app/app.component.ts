import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jake';

  update: boolean = false;
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {

      updates .activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data.returnTheJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
