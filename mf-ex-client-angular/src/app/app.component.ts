import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mf-ex-client-angular';
  users: any[] = [];

  async ngOnInit() {
    try {
      // @ts-ignore (For System)
      const utils = await System.import('@maxkalchenko/utils');
      
      const response = await utils.httpGet('angular');
      const data = await response;

      this.users = data;
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  }
}
