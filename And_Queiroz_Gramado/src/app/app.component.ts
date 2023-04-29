import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { GramadoServiceService } from './gramado-service.service';
import { ContentList } from './helper-files/content-list';
import { MessageService } from './message.service';


/* In your AppComponent, add an input where the user can specify an id number, and a button that, when clicked, wi l use the new service to retrieve and display a single ContentCard on the page. If anything other than a number is entered, or a number outside of the array bounds is entered (which you must check the array length dynamicaly, not hard code it in!), display a message using your message service saying an some kind of error occured. */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

    contentList: ContentList;
    id: number;
    errorMessage: string;

    constructor(private gramadoService: GramadoServiceService, private messageService: MessageService) {
      this.contentList = new ContentList();
      this.id = 0;
      this.errorMessage = '';
    }

    ngOnInit(): void {
      this.gramadoService.getContentArray()
        .subscribe(contentArray => this.contentList.loadContentArray(contentArray));
    }

    getContentItem(): void {
      this.gramadoService.getContentItem(this.id)
        .subscribe(contentItem => this.contentItem = contentItem);
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
