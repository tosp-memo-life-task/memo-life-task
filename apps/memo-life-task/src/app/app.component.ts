import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@memo-life-task/dtos';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'tosp-memo-life-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('custom-icons', {
      dashboard:
        '<svg viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_147_160" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="37"><rect y="0.75" width="36" height="36"/></mask><g mask="url(#mask0_147_160)"><path d="M19.125 15.375V5.25H31.5V15.375H19.125ZM4.5 19.875V5.25H16.875V19.875H4.5ZM19.125 32.25V17.625H31.5V32.25H19.125ZM4.5 32.25V22.125H16.875V32.25H4.5Z"/></g></svg>',
      invitations:
        '<svg viewBox="0 0 36 36" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M17.8313 18.315C18.3188 17.715 18.6797 17.0963 18.9141 16.4588C19.1484 15.8213 19.2656 15.0806 19.2656 14.2369C19.2656 13.3931 19.1484 12.6525 18.9141 12.015C18.6797 11.3775 18.3188 10.7588 17.8313 10.1588C19.2563 9.84002 20.5078 10.0556 21.5859 10.8056C22.6641 11.5556 23.2031 12.6994 23.2031 14.2369C23.2031 15.7744 22.6641 16.9181 21.5859 17.6681C20.5078 18.4181 19.2563 18.6338 17.8313 18.315ZM23.9062 27.4838V24.84C23.9062 23.8838 23.6625 22.9931 23.175 22.1681C22.6875 21.3431 21.8438 20.6494 20.6438 20.0869C23.8875 20.4994 26.1047 21.0994 27.2953 21.8869C28.4859 22.6744 29.0813 23.6588 29.0813 24.84V27.4838H23.9062ZM27 19.3556V16.5431H24.1875V14.8556H27V12.0431H28.6875V14.8556H31.5V16.5431H28.6875V19.3556H27ZM13.3594 18.4556C12.1219 18.4556 11.1094 18.0619 10.3219 17.2744C9.53438 16.4869 9.14062 15.4744 9.14062 14.2369C9.14062 12.9994 9.53438 11.9869 10.3219 11.1994C11.1094 10.4119 12.1219 10.0181 13.3594 10.0181C14.5969 10.0181 15.6094 10.4119 16.3969 11.1994C17.1844 11.9869 17.5781 12.9994 17.5781 14.2369C17.5781 15.4744 17.1844 16.4869 16.3969 17.2744C15.6094 18.0619 14.5969 18.4556 13.3594 18.4556ZM4.5 27.4838V24.84C4.5 24.1838 4.67344 23.5885 5.02031 23.0541C5.36719 22.5197 5.83125 22.1213 6.4125 21.8588C7.7625 21.2588 8.96719 20.8275 10.0266 20.565C11.0859 20.3025 12.1969 20.1713 13.3594 20.1713C14.5219 20.1713 15.6281 20.3025 16.6781 20.565C17.7281 20.8275 18.9281 21.2588 20.2781 21.8588C20.8594 22.1213 21.3281 22.5197 21.6844 23.0541C22.0406 23.5885 22.2188 24.1838 22.2188 24.84V27.4838H4.5Z"/></svg>',
      profile:
        '<svg viewBox="0 0 36 37" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M18 18.3727C16.4187 18.3727 15.125 17.8696 14.1188 16.8633C13.1125 15.8571 12.6094 14.5633 12.6094 12.9821C12.6094 11.4008 13.1125 10.1071 14.1188 9.10081C15.125 8.09456 16.4187 7.59143 18 7.59143C19.5813 7.59143 20.875 8.09456 21.8812 9.10081C22.8875 10.1071 23.3906 11.4008 23.3906 12.9821C23.3906 14.5633 22.8875 15.8571 21.8812 16.8633C20.875 17.8696 19.5813 18.3727 18 18.3727ZM6.5 29.9086V26.5305C6.5 25.6201 6.7276 24.8414 7.18281 24.1946C7.63802 23.5477 8.225 23.0565 8.94375 22.7211C10.549 22.0024 12.0883 21.4633 13.5617 21.1039C15.0352 20.7446 16.5146 20.5649 18 20.5649C19.4854 20.5649 20.9589 20.7505 22.4203 21.1219C23.8818 21.4933 25.4151 22.0263 27.0203 22.7211C27.763 23.0565 28.362 23.5477 28.8172 24.1946C29.2724 24.8414 29.5 25.6201 29.5 26.5305V29.9086H6.5Z"/></svg>',
      logout:
        '<svg viewBox="0 0 36 37" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_147_138" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="37"><rect y="0.75" width="36" height="36"/></mask><g mask="url(#mask0_147_138)"><path d="M6.75 32.25C6.15 32.25 5.625 32.025 5.175 31.575C4.725 31.125 4.5 30.6 4.5 30V7.5C4.5 6.9 4.725 6.375 5.175 5.925C5.625 5.475 6.15 5.25 6.75 5.25H17.6625V7.5H6.75V30H17.6625V32.25H6.75ZM24.975 25.3125L23.3625 23.7L27.1875 19.875H14.0625V17.625H27.1125L23.2875 13.8L24.9 12.1875L31.5 18.7875L24.975 25.3125Z"/></g></svg>',
      add_circle:
        '<svg width="28" height="29" viewBox="0 0 28 29" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_283_140" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="29"><rect y="0.5" width="28" height="28"/></mask><g mask="url(#mask0_283_140)"><path d="M13.2124 20.3334H14.9624V15.4917H19.8333V13.7417H14.9624V8.66671H13.2124V13.7417H8.16659V15.4917H13.2124V20.3334ZM13.9999 26.1667C12.4055 26.1667 10.8985 25.8605 9.47909 25.248C8.05964 24.6355 6.82006 23.7993 5.76034 22.7396C4.70061 21.6799 3.8645 20.4403 3.252 19.0209C2.6395 17.6014 2.33325 16.0848 2.33325 14.4709C2.33325 12.8764 2.6395 11.3695 3.252 9.95004C3.8645 8.5306 4.70061 7.29587 5.76034 6.24587C6.82006 5.19587 8.05964 4.36462 9.47909 3.75212C10.8985 3.13962 12.4152 2.83337 14.0291 2.83337C15.6235 2.83337 17.1305 3.13962 18.5499 3.75212C19.9694 4.36462 21.2041 5.19587 22.2541 6.24587C23.3041 7.29587 24.1353 8.5306 24.7478 9.95004C25.3603 11.3695 25.6666 12.8862 25.6666 14.5C25.6666 16.0945 25.3603 17.6014 24.7478 19.0209C24.1353 20.4403 23.3041 21.6799 22.2541 22.7396C21.2041 23.7993 19.9694 24.6355 18.5499 25.248C17.1305 25.8605 15.6138 26.1667 13.9999 26.1667ZM14.0291 24.4167C16.7708 24.4167 19.1041 23.4493 21.0291 21.5146C22.9541 19.5799 23.9166 17.232 23.9166 14.4709C23.9166 11.7292 22.9541 9.39587 21.0291 7.47087C19.1041 5.54587 16.761 4.58337 13.9999 4.58337C11.2583 4.58337 8.92006 5.54587 6.98534 7.47087C5.05061 9.39587 4.08325 11.7389 4.08325 14.5C4.08325 17.2417 5.05061 19.5799 6.98534 21.5146C8.92006 23.4493 11.268 24.4167 14.0291 24.4167Z"/></g></svg>',
      edit: '<svg width="28" height="28" viewBox="0 0 28 28" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_283_324" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect y="0.5" width="28" height="28" /></mask><g mask="url(#mask0_283_324)"><path d="M5.83333 22.6667H7.46667L17.5292 12.6042L15.8958 10.9709L5.83333 21.0334V22.6667ZM22.5167 10.9125L17.5583 6.01254L19.1917 4.37921C19.6389 3.93199 20.1884 3.70837 20.8402 3.70837C21.4912 3.70837 22.0403 3.93199 22.4875 4.37921L24.1208 6.01254C24.5681 6.45976 24.8014 6.99954 24.8208 7.63187C24.8403 8.26343 24.6264 8.80282 24.1792 9.25004L22.5167 10.9125ZM20.825 12.6334L8.45833 25H3.5V20.0417L15.8667 7.67504L20.825 12.6334Z" /></g></svg>',
      share:
        '<svg width="28" height="28" viewBox="0 0 28 28" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_283_333" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect y="0.5" width="28" height="28" /></mask><g mask="url(#mask0_283_333)"><path d="M21 26.1667C20.0278 26.1667 19.2014 25.8264 18.5208 25.1459C17.8403 24.4653 17.5 23.6389 17.5 22.6667C17.5 22.5306 17.5097 22.3894 17.5292 22.2432C17.5486 22.0978 17.5778 21.9667 17.6167 21.85L9.39167 17.0667C9.06111 17.3584 8.69167 17.5867 8.28333 17.7515C7.875 17.9172 7.44722 18 7 18C6.02778 18 5.20139 17.6598 4.52083 16.9792C3.84028 16.2987 3.5 15.4723 3.5 14.5C3.5 13.5278 3.84028 12.7014 4.52083 12.0209C5.20139 11.3403 6.02778 11 7 11C7.44722 11 7.875 11.0825 8.28333 11.2474C8.69167 11.413 9.06111 11.6417 9.39167 11.9334L17.6167 7.15004C17.5778 7.03337 17.5486 6.90232 17.5292 6.75687C17.5097 6.61065 17.5 6.46949 17.5 6.33337C17.5 5.36115 17.8403 4.53476 18.5208 3.85421C19.2014 3.17365 20.0278 2.83337 21 2.83337C21.9722 2.83337 22.7986 3.17365 23.4792 3.85421C24.1597 4.53476 24.5 5.36115 24.5 6.33337C24.5 7.3056 24.1597 8.13199 23.4792 8.81254C22.7986 9.4931 21.9722 9.83337 21 9.83337C20.5528 9.83337 20.125 9.75054 19.7167 9.58487C19.3083 9.41999 18.9389 9.19171 18.6083 8.90004L10.3833 13.6834C10.4222 13.8 10.4514 13.9311 10.4708 14.0765C10.4903 14.2228 10.5 14.3639 10.5 14.5C10.5 14.6362 10.4903 14.7769 10.4708 14.9224C10.4514 15.0686 10.4222 15.2 10.3833 15.3167L18.6083 20.1C18.9389 19.8084 19.3083 19.5797 19.7167 19.414C20.125 19.2492 20.5528 19.1667 21 19.1667C21.9722 19.1667 22.7986 19.507 23.4792 20.1875C24.1597 20.8681 24.5 21.6945 24.5 22.6667C24.5 23.6389 24.1597 24.4653 23.4792 25.1459C22.7986 25.8264 21.9722 26.1667 21 26.1667ZM21 7.50004C21.3306 7.50004 21.6074 7.38843 21.8307 7.16521C22.0547 6.94121 22.1667 6.66393 22.1667 6.33337C22.1667 6.00282 22.0547 5.72554 21.8307 5.50154C21.6074 5.27832 21.3306 5.16671 21 5.16671C20.6694 5.16671 20.3926 5.27832 20.1693 5.50154C19.9453 5.72554 19.8333 6.00282 19.8333 6.33337C19.8333 6.66393 19.9453 6.94121 20.1693 7.16521C20.3926 7.38843 20.6694 7.50004 21 7.50004ZM7 15.6667C7.33056 15.6667 7.60783 15.5547 7.83183 15.3307C8.05506 15.1075 8.16667 14.8306 8.16667 14.5C8.16667 14.1695 8.05506 13.8922 7.83183 13.6682C7.60783 13.445 7.33056 13.3334 7 13.3334C6.66944 13.3334 6.39217 13.445 6.16817 13.6682C5.94494 13.8922 5.83333 14.1695 5.83333 14.5C5.83333 14.8306 5.94494 15.1075 6.16817 15.3307C6.39217 15.5547 6.66944 15.6667 7 15.6667ZM21 23.8334C21.3306 23.8334 21.6074 23.7214 21.8307 23.4974C22.0547 23.2742 22.1667 22.9973 22.1667 22.6667C22.1667 22.3362 22.0547 22.0593 21.8307 21.836C21.6074 21.612 21.3306 21.5 21 21.5C20.6694 21.5 20.3926 21.612 20.1693 21.836C19.9453 22.0593 19.8333 22.3362 19.8333 22.6667C19.8333 22.9973 19.9453 23.2742 20.1693 23.4974C20.3926 23.7214 20.6694 23.8334 21 23.8334Z"/></g></svg>',
      decline:
        '<svg width="20" height="21" viewBox="0 0 20 21" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_274_170" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21"><rect y="0.5" width="20" height="20"/></mask><g mask="url(#mask0_274_170)"><path d="M5.1875 16.1875L4.3125 15.3125L9.125 10.5L4.3125 5.6875L5.1875 4.8125L10 9.625L14.8125 4.8125L15.6875 5.6875L10.875 10.5L15.6875 15.3125L14.8125 16.1875L10 11.375L5.1875 16.1875Z"/></g></svg>',
      accept:
        '<svg width="20" height="21" viewBox="0 0 20 21" fill="#fff" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_274_164" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21"><rect y="0.5" width="20" height="20" /></mask><g mask="url(#mask0_274_164)"><path d="M7.87492 15.375L3.20825 10.7083L4.10409 9.8125L7.87492 13.5833L15.8749 5.58333L16.7708 6.47916L7.87492 15.375Z" /></g></svg>'
    });
  }

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  spinnerWithoutBackdrop = false;
}
