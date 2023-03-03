import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  content: Content = { id: 0, title: '', description: '', creator: '' };

  onSubmit() {
    if (
      !this.content.title ||
      !this.content.description ||
      !this.content.creator
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    this.contentAdded.emit({ ...this.content });
    console.log(`Successfully added ${this.content.title}`);
    this.content = { id: 0, title: '', description: '', creator: '' };
  }
}
