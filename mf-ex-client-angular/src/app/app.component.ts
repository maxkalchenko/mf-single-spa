import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-ex-client-angular';

  async ngOnInit() {
    // try {
    //   // @ts-ignore
    //   const utils = await import('@maxkalchenko/utils');

    //   console.warn(utils);
    //   // console.warn(utils.httpGet('angular'));
    // } catch (error) {
    //   console.error('Failed to load @maxkalchenko/utils:', error);
    // }
  }
}