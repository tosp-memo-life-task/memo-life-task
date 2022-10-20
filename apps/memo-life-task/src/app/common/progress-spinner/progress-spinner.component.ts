import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
import { OverlayService } from './progress-spinner-overlay.service';

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
  @Input() diameter?: number = 100;
  mode: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth?: number;
  @Input() value?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  displayProgressSpinner: boolean;

  displayMini: boolean = false;

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef: TemplateRef<any>;
  private progressSpinnerOverlayConfig: OverlayConfig;
  private overlayRef: OverlayRef;
  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: OverlayService
  ) {
    this.overlayService.progressSpinnerVisibilityChange.subscribe((value) => {
      this.displayProgressSpinner = value;
    });
    this.overlayService.progressSpinnerMiniChange.subscribe((value) => {
      this.displayMini = value;

      this.overlayRef.dispose();
      if (value) {
        this.changeToMiniOverlay();
      } else {
        this.changeToDefaultOverlay();
      }
    });
  }
  ngOnInit() {
    // Config for Overlay Service
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled,
    };

    if (this.positionGloballyCenter) {
      this.changeToDefaultOverlay();
    }
    // Create Overlay for progress spinner
  }
  ngDoCheck() {
    // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
    if (this.displayProgressSpinner && !this.overlayRef.hasAttached()) {
      this.overlayService.attachTemplatePortal(
        this.overlayRef,
        this.progressSpinnerRef,
        this.vcRef
      );
    } else if (!this.displayProgressSpinner && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  changeToDefaultOverlay() {
    this.backdropEnabled = true;
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled,
    };
    this.diameter = 100;
    this.progressSpinnerOverlayConfig['positionStrategy'] =
      this.overlayService.positionGloballyCenter();
    this.createOverlayForProgressSpinner();
  }
  changeToMiniOverlay() {
    this.backdropEnabled = false;
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled,
    };
    this.diameter = 50;
    this.progressSpinnerOverlayConfig['positionStrategy'] =
      this.overlayService.positionHorizontallyCenter();
    this.createOverlayForProgressSpinner();
  }

  createOverlayForProgressSpinner() {
    this.overlayRef = this.overlayService.createOverlay(
      this.progressSpinnerOverlayConfig
    );
  }
}
