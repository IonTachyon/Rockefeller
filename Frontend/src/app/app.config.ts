import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { tickerReducer } from './store/ticker/ticker.reducers';
import { provideEffects } from '@ngrx/effects';
import { TickerEffects } from './store/ticker/ticker.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore(),
    provideState({name: "tickers", reducer: tickerReducer}),
    provideEffects(TickerEffects),
  ]
};
