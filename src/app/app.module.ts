import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatSidenavModule, MatIconModule, } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavButtonComponent } from './side-nav-button/side-nav-button.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NonMajorExpComponent } from './experience/non-major-exp/non-major-exp.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavButtonComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceComponent,
    MySkillsComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent,
    NonMajorExpComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatSidenavModule, 
    MatIconModule, 
    BrowserAnimationsModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
