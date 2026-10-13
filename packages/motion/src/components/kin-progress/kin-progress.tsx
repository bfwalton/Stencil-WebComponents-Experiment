import { Component, Element, h, Host, Prop } from '@stencil/core';

const CIRCUMFERENCE = 2 * Math.PI * 46;

@Component({ tag: 'kin-progress', styleUrl: 'kin-progress.css', shadow: true })
export class KinProgress {
  /** Current amount. Values outside 0..max are clamped for display. */
  @Prop() value = 0;
  /** Total amount. Invalid or nonpositive values use 100. */
  @Prop() max = 100;
  @Element() host!: HTMLElement;

  render() {
    const max = Number.isFinite(this.max) && this.max > 0 ? this.max : 100;
    const value = Number.isFinite(this.value) ? Math.min(max, Math.max(0, this.value)) : 0;
    const percentage = Math.round(value / max * 100);

    return <Host
      role="progressbar"
      aria-label={this.host.getAttribute('aria-label') || 'Progress'}
      aria-valuemin="0"
      aria-valuemax={String(max)}
      aria-valuenow={String(value)}
      aria-valuetext={`${percentage}% complete`}
    >
      <div class="wrap" part="wrap">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle class="track" cx="60" cy="60" r="46" />
          <circle class="meter" cx="60" cy="60" r="46" style={{ strokeDashoffset: String(CIRCUMFERENCE * (1 - value / max)) }} />
        </svg>
        <div class="content"><strong>{percentage}%</strong><small><slot>complete</slot></small></div>
      </div>
    </Host>;
  }
}
