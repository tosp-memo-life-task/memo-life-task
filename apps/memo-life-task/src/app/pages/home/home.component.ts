import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProfileResponse } from '@memo-life-task/interfaces';
import { NbMenuBag, NbMenuItem, NbMenuService } from '@nebular/theme';
import { GetUserService } from './profile/services/get-user.service';

@Component({
  selector: 'tosp-memo-life-task-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

  user: IGetProfileResponse;
  ready: boolean = false;

  constructor(
    private nbMenu: NbMenuService,
    private router: Router,
    private getUserService: GetUserService
  ) {
    this.nbMenu.onItemClick().subscribe((value: NbMenuBag) => {
      if (value.item.data) {
        this.logout();
      }
    });

    this.getUser();

    setInterval(() => {
      this.getUser();
    }, 2000);
  }

  async getUser() {
    const response = await this.getUserService.getUserApi();
    this.user = response;

    this.ready = true;
  }

  logout() {
    this.router.navigate(['unauthenticated']);
  }
}
