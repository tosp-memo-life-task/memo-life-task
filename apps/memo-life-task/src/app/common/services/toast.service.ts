import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastrService: ToastrService) {}

  error(descp: string) {
    this.toastrService.error(descp, 'Error');
  }

  info(descp: string) {
    this.toastrService.info(descp, 'Info');
  }

  success(descp: string) {
    this.toastrService.success(descp, 'Success');
  }
}
