import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Publisher {
  /* private userListUpdateSubscriberList: UserListUpdateEventSubscriber[] = []; */

  public unsubscribeFromAll(tag: string) {
    /* for (let i = 0; i < this.userListUpdateSubscriberList.length; i++) {
      if (this.userListUpdateSubscriberList[i].TAG === tag) {
        this.userListUpdateSubscriberList.splice(i, 1);
      }
    } */
  }
  /* public subscribeForUserListUpdateEvents(
    subscriber: UserListUpdateEventSubscriber
  ) {
    for (const sub of this.userListUpdateSubscriberList) {
      if (subscriber.TAG === sub.TAG) {
        return;
      }
    }
    this.userListUpdateSubscriberList.push(subscriber);
  }

  public fireUpdateUserListEvents() {
    for (const sub of this.userListUpdateSubscriberList) {
      sub.userListUpdateEvent();
    }
  } */
}
