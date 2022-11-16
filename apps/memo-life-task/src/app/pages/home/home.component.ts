import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';

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
    }
  ];

  constructor(private themeService: NbThemeService) {}

  ngOnInit(): void {}
}
