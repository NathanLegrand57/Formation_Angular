import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveModule } from './module/eleve.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ErrorInterceptorService } from './service/error-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EleveModule,
    FormsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    ErrorInterceptorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
