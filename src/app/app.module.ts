import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from './@ui/common-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './@components/nav/nav.component';
import { HeaderComponent } from './@components/header/header.component';
import { FooterComponent } from './@components/footer/footer.component';
import { StartComponent } from './@pages/start/start.component';
import { HomeComponent } from './@pages/home/home.component';
import { SideNavComponent } from './@components/side-nav/side-nav.component';
import { HighlightsComponent } from './@pages/highlights/highlights.component';
import { AtAGlanceComponent } from './@pages/at-a-glance/at-a-glance.component';
import { HistoryComponent } from './@pages/history/history.component';
import { StatementComponent } from './@pages/statement/statement.component';
import { BusinessComponent } from './@pages/business/business.component';
import { StrategyComponent } from './@pages/strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    HomeComponent,
    SideNavComponent,
    HighlightsComponent,
    AtAGlanceComponent,
    HistoryComponent,
    StatementComponent,
    BusinessComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    CommonUiModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
