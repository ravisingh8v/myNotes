import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { ObservableInput } from 'rxjs';

@Injectable()
export class OverlayService {
  public overlayRef!: OverlayRef;
  constructor(private overlay: Overlay) {

  }
  openDialogue<T>(component: ComponentType<T>) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      panelClass: 'dialoguePanel',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })

    const Portal = new ComponentPortal(component);
    const ComponentRef = this.overlayRef.attach(Portal);
    this.overlayRef.backdropClick().subscribe((res) => {
      // this.overlayRef.detach()
      alert("please click on cancel button to back")
    })

  }
}
