import { Component } from '@angular/core'; /* WTH not working after all. I have checked that the module is correctly installed and imported in the app.module.ts file, but the error persists. I have also tried restarting the server and clearing the cache, but to no avail. */

import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

}
