import { Component } from '@angular/core';
import { GramadoServiceService } from './gramado-service.service';
import { ContentList } from './helper-files/content-list';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contentList: ContentList;
  id: number;
  errorMessage: string;

  constructor(
    private gramadoService: GramadoServiceService,
    private messageService: MessageService
  ) {
    this.contentList = new ContentList();
    this.id = 0;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.gramadoService
      .getContentArray()
      .subscribe((contentArray) =>
        this.contentList.loadContentArray(contentArray)
      );
  }

  getContentItem(): void {
    this.gramadoService
      .getContentItem(this.id)
      .subscribe((contentItem) => (this.contentItem = contentItem));
  }

  checkId(): void {
    if (this.id < 0 || this.id >= this.contentList.count()) {
      this.errorMessage = 'Invalid ID';
    } else {
      this.getContentItem();
    }
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  readerFriendlyHTML(): string {
    return this.contentList.readerFriendlyHTML(this.id);
  }

  addMessage(message: string): void {
    this.messageService.add(message);
  }

  clearMessages(): void {
    this.messageService.clear();
  }
}
