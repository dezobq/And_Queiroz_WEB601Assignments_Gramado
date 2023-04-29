import { Content } from './content-interface';
import { MessageService } from '../message.service';

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  count(): number {
    return this.contentArray.length;
  }

  readerFriendlyHTML(index: number): string {
    const content = this.contentArray[index];
    let html = `<h1>${content.title}</h1>`;
    html += `<p>${content.description}</p>`;
    html += `<p>Created by: ${content.creator}</p>`;
    if (content.imgURL) {
      html += `<img src="${content.imgURL}" alt="${content.title}"/>`;
    }
    if (content.type) {
      html += `<p>Type: ${content.type}</p>`;
    }
    if (content.tags) {
      html += `<p>Tags: ${content.tags.join(', ')}</p>`;
    }
    return html;
  }
  /* Invoke this services function in your ContentList in order to retrieve your array of data and use it to fix your ContentList component so it displays the content just as it did before. */
  loadContentArray(contentArray: Content[]): void {
    this.contentArray = contentArray;
  }
}
