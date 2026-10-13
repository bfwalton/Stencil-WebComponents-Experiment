import { defineCustomElements } from '@webcomp/motion';
import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

defineCustomElements();
bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()]
}).catch(error => console.error(error));
