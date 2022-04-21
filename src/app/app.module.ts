import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './rugby/class/class.component';
import { DesktopHeaderComponent } from './header/desktop-header/desktop-header.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, ClassComponent, DesktopHeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
