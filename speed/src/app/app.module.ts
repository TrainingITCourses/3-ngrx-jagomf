import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectCriteriaComponent } from './select-criteria/select-criteria.component';
import { ProviderService } from './provider.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectValueComponent } from './select-value/select-value.component';
import { MissionsViewerComponent } from './missions-viewer/missions-viewer.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SelectCriteriaComponent,
    SelectValueComponent,
    MissionsViewerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
