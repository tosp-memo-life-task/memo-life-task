import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NbMenuBag,
  NbMenuItem,
  NbMenuService,
  NbThemeService
} from '@nebular/theme';

@Component({
  selector: 'tosp-memo-life-task-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/home/dashboard',
      pathMatch: 'full',
      icon: { icon: 'dashboard', pack: 'custom-icons' }
    },
    {
      title: 'Invitations',
      link: '/home/invitations',
      pathMatch: 'full',
      icon: { icon: 'invitations', pack: 'custom-icons' }
    },
    {
      title: 'Profile',
      link: '/home/profile',
      pathMatch: 'full',
      icon: { icon: 'profile', pack: 'custom-icons' }
    },
    {
      title: 'Sign out',
      icon: { icon: 'logout', pack: 'custom-icons' },
      data: true // mark item as this is logout
    }
  ];

  constructor(private nbMenu: NbMenuService, private router: Router) {
    this.nbMenu.onItemClick().subscribe((value: NbMenuBag) => {
      if (value.item.data) {
        this.logout();
      }
    });
  }

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['unauthenticated']);
  }
}
