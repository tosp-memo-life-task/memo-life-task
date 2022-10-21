import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  PositionStrategy
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  displayProgressSpinner: boolean = false;
  displayMini: boolean = false;
  progressSpinnerVisibilityChange: Subject<boolean> = new Subject<boolean>();
  progressSpinnerMiniChange: Subject<boolean> = new Subject<boolean>();

  constructor(private overlay: Overlay) {
    this.progressSpinnerVisibilityChange.subscribe((value) => {
      this.displayProgressSpinner = value;
    });
    this.progressSpinnerMiniChange.subscribe((value) => {
      this.displayMini = value;
    });
  }
  createOverlay(config: OverlayConfig): OverlayRef {
    return this.overlay.create(config);
  }
  attachTemplatePortal(
    overlayRef: OverlayRef,
    templateRef: TemplateRef<any>,
    vcRef: ViewContainerRef
  ) {
    let templatePortal = new TemplatePortal(templateRef, vcRef);
    overlayRef.attach(templatePortal);
  }
  positionGloballyCenter(): PositionStrategy {
    return this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }

  positionHorizontallyCenter(): PositionStrategy {
    return this.overlay.position().global().centerHorizontally().top('80px');
  }

  setDisplayProgressSpinner(show: boolean) {
    this.progressSpinnerVisibilityChange.next(show);
  }

  setDisplayProgressSpinnerMini(mini: boolean) {
    this.progressSpinnerMiniChange.next(mini);
  }
}
