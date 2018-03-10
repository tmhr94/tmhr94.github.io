import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobExperiencesPage } from './job-experiences';

@NgModule({
  declarations: [
    JobExperiencesPage,
  ],
  imports: [
    IonicPageModule.forChild(JobExperiencesPage),
  ],
})
export class JobExperiencesPageModule {}
