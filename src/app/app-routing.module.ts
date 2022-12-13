import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtAGlanceComponent } from './@pages/at-a-glance/at-a-glance.component';
import { BusinessComponent } from './@pages/business/business.component';
import { DownloadComponent } from './@pages/download/download.component';
import { HighlightsComponent } from './@pages/highlights/highlights.component';
import { HistoryComponent } from './@pages/history/history.component';
import { HomeComponent } from './@pages/home/home.component';
import { StartComponent } from './@pages/start/start.component';
import { StatementComponent } from './@pages/statement/statement.component';
import { StrategyComponent } from './@pages/strategy/strategy.component';

const routes: Routes = [
  {
    path: 'Hoolio-App/',
    component: HomeComponent
  },
  {
    path: 'highlights',
    component: HighlightsComponent,
  },
  {
    path: 'galance',
    component: AtAGlanceComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'statement',
    component: StatementComponent,
  },  
  {
    path: 'strategy',
    component: StrategyComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'download',
    component: DownloadComponent,
  },
  {
    path: '**',
    redirectTo: 'Hoolio-App/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
