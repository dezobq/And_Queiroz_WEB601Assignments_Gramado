import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  //method to get content from the database

  getContent() {
    return this.http.get('/api/content');
  }

  //method to add content

  addContent(newContent: any) {
    return this.http.post('/api/content', newContent);
  }

  //method to update content

  updateContent(updatedContent: any) {
    return this.http.put('/api/content', updatedContent);
  }
}
