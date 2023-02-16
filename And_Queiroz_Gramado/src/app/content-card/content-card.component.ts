import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input()
  content!: Content;

  displayContentIdAndTitle() {
    console.log(
      `Content id: ${this.content.id} - Title: ${this.content.title}`
    );
  }
}
