import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new go.GraphLinksModel(
    [
      { key: 1, text: 'Enterprise Co', color: 'lightblue' },
      { key: 2, text: 'East Coast Group', color: 'orange' },
      { key: 3, text: 'West Coast Group', color: 'orange' },
      { key: 4, text: 'Eastern Foreign', color: 'orange' },
      { key: 5, text: 'Eastern Domestic', color: 'orange' },
      { key: 6, text: 'Western Foreign', color: 'orange' },
      {
        key: 11,
        text: 'Boston BMW',
        color: 'pink',
        otherInfo: { stuff: 'things' },
      },
      { key: 12, text: 'Baltimore BMW', color: 'pink' },
      { key: 18, text: 'Nissan Nashville', color: 'pink' },
      { key: 15, text: 'Cleveland Chevy', color: 'pink' },
      { key: 13, text: 'Tucson Toyota', color: 'pink' },
      { key: 14, text: 'Houston Honda', color: 'pink' },
      { key: 16, text: 'Seattle Subaru', color: 'pink' },
      { key: 17, text: 'Kirkland Kia', color: 'pink' },
      { key: 19, text: 'Volvo Vancouver', color: 'pink' },
    ],
    [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 6 },
      { from: 4, to: 11 },
      { from: 4, to: 12 },
      { from: 4, to: 18 },
      { from: 5, to: 15 },
      { from: 6, to: 13 },
      { from: 6, to: 14 },
      { from: 6, to: 16 },
      { from: 6, to: 17 },
      { from: 6, to: 19 },
    ]
  );
}
