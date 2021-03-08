import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Man',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Women',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Accessories',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Profile',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'LogOut',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  isDesk;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.isDesk= !this.platform.is('desktop');
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
