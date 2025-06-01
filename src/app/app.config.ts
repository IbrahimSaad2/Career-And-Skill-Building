import { headerInterceptor } from './Core/interceptor/header.interceptor';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {  provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './Core/interceptor/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withViewTransitions()), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([headerInterceptor,loadingInterceptor])),
    provideAnimations(),
    importProvidersFrom(NgxSpinnerModule),

  ]
};
