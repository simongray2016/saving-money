import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LaunchScreenComponent } from 'src/app/components/launch-screen/launch-screen.component';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ng-container[launchScreen]]'
})
export class LaunchScreenDirective {

  constructor(
    public _viewContainerRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.showLaunchScreen();
  }

  showLaunchScreen() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(LaunchScreenComponent);
    const componentRef = this._viewContainerRef.createComponent(componentFactory);
    timer(2000)
      .pipe(
        tap(() => componentRef.location.nativeElement.style.opacity = 0),
        switchMap(() => timer(500)),
        tap(() => componentRef.destroy())
      ).subscribe();
  }

}
