import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './rugby/class/class.component';
import { DesktopHeaderComponent } from './header/desktop-header/desktop-header.component';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [AppComponent, ClassComponent, DesktopHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
