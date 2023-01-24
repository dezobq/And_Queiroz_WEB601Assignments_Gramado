import { Content } from './content-interface';

export class ContentList {
  private content: Content[] = []; // private array of type Content

  //constructor that initially sets the array to be empty
  constructor() {
    this.content = [];
  }

  //getter function that returns the Content array
  getContent(): Content[] {
    return this.content;
  }

  //add function that adds 1 Content item to the end of the array
  addContent(item: Content): void {
    this.content.push(item);
  }

  //function that returns the number of items in the array
  getLength(): number {
    return this.content.length;
  }

  //function that takes an input of an index of the array and returns a reader-friendly html output of a Content item's properties at that index
  getContentHTML(index: number): string {
    const item = this.content[index];
    return `<div>
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <p>Created by ${item.creator}</p>
      ${item.imgURL ? `<img src="${item.imgURL}" alt="${item.title}">` : ""}
      <p>Type: ${item.type}</p>
    </div>`;
  }
}
