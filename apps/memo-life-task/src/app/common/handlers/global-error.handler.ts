import {
  ErrorHandler,
  Inject,
  Injectable,
  Injector,
  NgZone,
} from '@angular/core';
import { ErrorResponse } from '../models/error.response';
import { ToastService } from '../services/toast.service';
import { AppException } from '../exceptions/app-error.exception';
import { Router } from '@angular/router';
import { OverlayService } from '../progress-spinner/progress-spinner-overlay.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private D = true;

  constructor(
    @Inject(Injector) private injector: Injector,
    private ngZone: NgZone,
    private router: Router,
    private overlayService: OverlayService
  ) {}

  private get toastService(): ToastService {
    return this.injector.get(ToastService);
  }

  public handleError(error: any): void {
    this.overlayService.setDisplayProgressSpinner(false);

    this.ngZone.run(async () => {
      this.overlayService.setDisplayProgressSpinner(false);

      if (error.rejection) {
        //Unhandled exception
        if (error.rejection.error) {
          let e = error.rejection.error;

          if (e instanceof ErrorResponse) {
            if (e.code === 'exception.common.UNAUTHORIZED') {
              this.router.navigate(['/unauthenticated/login']);
            }

            if (this.D) {
              if (e.code === 'exception.auth.MISSING_PERMISSION') {
                this.router.navigate(['/home']);
              }
              console.error('Handling ErrorResponse thrown in Promise', e);
            }
            this.toastService.error(e.message);
            return;
          }
          if (e instanceof AppException) {
            if (this.D)
              console.error('Handling AppException  thrown in Promise', e);
            this.toastService.error(e.message);
            return;
          }

          if (this.D)
            console.error(
              'Handling unknown exception thrown in Promise',
              error
            );

          this.toastService.error('UNKNOWN_EXCEPTION_THROWN_IN_PROMISE');
        }
      }
      if (error instanceof ErrorResponse) {
        if (this.D) console.error('Handling ErrorResponse', error);
        this.toastService.error(error.message);
        return;
      }
      if (error instanceof AppException) {
        console.log('instance of AppException');

        if (this.D) console.error('Handling AppException', error);
        this.toastService.error(error.message);
        return;
      }

      if (error.message.includes('MISSING_PARAMS_IN_LOCALSTORAGE')) {
        console.error('Handling Local Storage missing parameters', error);
        this.toastService.error(
          'A művelet végrehajtásához nincs jogosultságod. Bejelentkezés szükséges'
        );
        await this.router.navigate(['/unauthenticated/login']);

        return;
      }

      console.log(error);

      if (this.D) {
        console.error('Handling Unknown Exception', error);
      }

      this.toastService.error('Unhandled exception');
    });
  }
}
