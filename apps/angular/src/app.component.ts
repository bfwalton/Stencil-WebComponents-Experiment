import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly progress = signal(68);
  readonly ambient = signal(true);

  advance(): void { this.progress.update(value => Math.min(100, value + 8)); }
  reset(): void { this.progress.set(0); }
  onAmbientChange(event: Event): void {
    this.ambient.set((event as CustomEvent<{ checked: boolean }>).detail.checked);
  }
}
