import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatSidenavModule, MatIconModule, MatSliderModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavButtonComponent } from './side-nav-button/side-nav-button.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NonMajorExpComponent } from './experience/non-major-exp/non-major-exp.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavButtonComponent,
    HeaderComponent,
    ExperienceComponent,
    MySkillsComponent,
    FooterComponent,
    NonMajorExpComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatSidenavModule, 
    MatIconModule, 
    BrowserAnimationsModule, 
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
