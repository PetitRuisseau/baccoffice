import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SinglePageComponent },
  { path: 'mentions-legales', pathMatch: 'full', component: LegalNoticeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
