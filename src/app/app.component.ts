import { Component } from '@angular/core';
import { AVATARS } from './avatars';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  avatars = AVATARS;
  dragIndex: number;
  dropIndex: number;
  temporal: any;

  drag(i) {
    this.dragIndex = i;
    this.temporal = JSON.parse(JSON.stringify(this.avatars[i]));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    this.dropIndex = Number(ev.target.id);
    this.avatars[this.dragIndex] = JSON.parse(
      JSON.stringify(this.avatars[this.dropIndex])
    );
    this.avatars[this.dropIndex] = this.temporal;
  }
}
