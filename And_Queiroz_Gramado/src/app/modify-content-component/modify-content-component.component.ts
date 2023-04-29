import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() addMessageEvent = new EventEmitter<string>();

  id: number;
  title: string;
  description: string;
  creator: string;
  imgURL: string;
  type: string;
  tags: string;

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }

  ngOnInit(): void {}

  addContent(): void {
    const content: Content = {
      id: this.id,
      title: this.title,
      description: this.description,
      creator: this.creator,
      imgURL: this.imgURL,
      type: this.type,
      tags: this.tags.split(','),
    };

    if (this.id === 0) {
      this.contentService.addContent(content).subscribe((content) => {
        this.addMessageEvent.emit('Content added!');
        this.clearInputFields();
      });
    } else {
      this.contentService.updateContent(content).subscribe((content) => {
        this.addMessageEvent.emit('Content updated!');
        this.clearInputFields();
      });
    }
  }

  clearInputFields(): void {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.creator = '';
    this.imgURL = '';
    this.type = '';
    this.tags = '';
  }
}
