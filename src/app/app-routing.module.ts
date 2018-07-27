import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component'
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'contact', component: ContactComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}