import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: 'First Content',
      description: 'Description of first content',
      creator: 'John Doe',
      imgURL: 'https://picsum.photos/id/10/200/300',
      type: 'Type A',
      tags: ['Tag 1', 'Tag 2', 'Tag 3']
    },
    {
      id: 2,
      title: 'Second Content',
      description: 'Description of second content',
      creator: 'Jane Doe',
      imgURL: 'https://picsum.photos/id/11/200/300',
      type: 'Type B',
      tags: ['Tag 4', 'Tag 5', 'Tag 6']
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'Description of third content',
      creator: 'John Smith',
      imgURL: 'https://picsum.photos/id/12/200/300',
      type: 'Type A',
      tags: ['Tag 7', 'Tag 8', 'Tag 9']
    },
    {
      id: 4,
      title: 'Fourth Content',
      description: 'Description of fifth content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/13/200/300',
      type: 'Type A',
      tags: []
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'Description of fifth content',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/14/200/300',
      type: 'Type B',
      tags: ['Tag 16', 'Tag 17', 'Tag 18']
    },
    {
      id: 6,
      title: 'Sixth Content',
      description: '',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/15/200/300',
      type: 'Type A',
    }
  ]

  constructor() {}

  ngOnInit() {}

  onContentClick(content: Content) {
    console.log(`Content clicked: id: ${content.id}, title: ${content.title}`);
  }
}
/* I was trying to do this way, but I was struggling

 export class ContentListComponent implements OnInit {
  @Input() content: Content[];
  constructor(){

  }
  ngOnInit() {
    this.content = {
      id:0,
      title: 'First content',
      creator: 'Creator of the first content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the  first content',
      type: 'news'
    },
    {
      id:1,
      title: 'Second content',
      creator: 'Creator of the second content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the second content',
      type: 'news'
    },
    {
      id:2,
      title: 'Thrird content',
      creator: 'Creator of the third content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the third content',
      type: 'news'
    },
    {
      id:3,
      title: 'Fourth content',
      creator: 'Creator of the fourth content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the fourth content',
      type: 'news'
    },
    {
      id:4,
      title: 'Fifth content',
      creator: 'Creator of the fifth content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the fifth content',
      type: 'news'
    },
    {
      id:5,
      title: 'Sixth content',
      creator: 'Creator of the sixth content',
      imgURL: 'https://picsum.photos/200',
      description: 'This is the body of the sixth content',
      type: 'news'
    }
  }
} */

