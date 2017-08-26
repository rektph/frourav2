import { Component } from '@angular/core';

import { MapsPage } from '../maps/maps';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapsPage;
  tab2Root = HistoryPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
