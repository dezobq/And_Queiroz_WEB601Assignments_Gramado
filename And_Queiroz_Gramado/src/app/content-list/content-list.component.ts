import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
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
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
    {
      id: 2,
      title: 'Second Content',
      description: 'Description of second content',
      creator: 'Jane Doe',
      imgURL: 'https://picsum.photos/id/11/200/300',
      type: 'Type B',
      tags: ['Tag 4', 'Tag 5', 'Tag 6'],
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'Description of third content',
      creator: 'John Smith',
      imgURL: 'https://picsum.photos/id/12/200/300',
      type: 'Type A',
      tags: ['Tag 7', 'Tag 8', 'Tag 9'],
    },
    {
      id: 4,
      title: 'Fourth Content',
      description: 'Description of fifth content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/13/200/300',
      type: 'Type A',
      tags: [],
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'Description of fifth content',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/14/200/300',
      type: 'Type B',
      tags: ['Tag 16', 'Tag 17', 'Tag 18'],
    },
    {
      id: 6,
      title: 'Sixth Content',
      description: '',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/15/200/300',
      type: 'Type A',
    },
    //Assignment 3 - Add 3 more contents
    {
      id: 7,
      title: 'Seventh Content',
      description: 'Description of seventh content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/16/200/300',
      type: '',
      tags: ['Tag 19', 'Tag 20', 'Tag 21'],
    },
    {
      id: 8,
      title: 'Eighth Content',
      description: 'Description of eighth content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/17/200/300',
      type: 'Type A',
      tags: ['Tag 22', 'Tag 23', 'Tag 24'],
    },
    {
      id: 9,
      title: 'Ninth Content',
      description: 'Description of ninth content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/17/200/300',
      //type: 'Type A',
      tags: ['Tag 22', 'Tag 23', 'Tag 24'],
    },
  ];

  constructor() {}

  ngOnInit() {}

  onContentClick(content: Content) {
    console.log(`Content clicked: id: ${content.id}, title: ${content.title}`);
  }
}
