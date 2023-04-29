/* Add a function to this service that will retrieve the content array from the contentDb file and return it using the obserable pattern.  Add another method to your new service that returns an individual item from the content array in the contentDb file, given an id number that is provided, also using the observable pattern. Use this to add a single ContentCard item to the top of your AppComponent at an id number of your choosing. Give this single content item a box-shadow using css defined as part of the ContentCard components style definitions. Only this content card should have a box-shadow applied to it. Add the ability to transmit messages to your application the way outlined at this link . Add your new AppMessages component to the AppComponent component You may style your messages component however you like Use your messages service to add a message saying "Content array loaded!" in the new service whenever the content array is retrieved Use your messages service to add a message saying "Content Item at id: idNumberHere" in the new service whenever a single content item at a specific id is retrieved, where you replace idNumberHere with the id that was used.
 */

import { Injectable } from '@angular/core';

import { Content } from './helper-files/content-interface';

import { Observable, of } from 'rxjs';
import { contentDb } from './helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GramadoServiceService {

    constructor(private messageService: MessageService) { }

    getContentArray(): Observable<Content[]> {
      this.messageService.add('Content array loaded!');
      return of(contentDb);
    }

    getContentItem(id: number): Observable<Content> {
      this.messageService.add(`Content Item at id: ${id}`);
      return of(contentDb[id]);
    }
  }
