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
      link: 'dashboard',
      pathMatch: 'prefix'
    },
    {
      title: 'Invitations',
      link: 'invitations',
      pathMatch: 'prefix'
    },
    {
      title: 'Profile',
      link: 'profile',
      pathMatch: 'prefix'
    }
  ];

  constructor(private themeService: NbThemeService) {}

  ngOnInit(): void {}
}
