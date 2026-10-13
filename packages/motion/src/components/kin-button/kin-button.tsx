import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({ tag: 'kin-button', styleUrl: 'kin-button.css', shadow: true })
export class KinButton {
  /** Visual treatment of the button. */
  @Prop({ reflect: true }) variant: 'primary' | 'quiet' = 'primary';
  /** Shows a spinner and prevents activation. */
  @Prop({ reflect: true }) loading = false;
  /** Prevents activation. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitted after the user activates the button. */
  @Event({ eventName: 'kin-activate', bubbles: true, composed: true }) kinActivate!: EventEmitter<{ variant: string }>;

  private button?: HTMLButtonElement;

  private ripple(event: PointerEvent): void {
    if (!this.button || this.button.disabled || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = this.button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    this.button.append(ripple);
  }

  render() {
    return <button
      type="button"
      part="button"
      disabled={this.disabled || this.loading}
      aria-busy={String(this.loading)}
      ref={element => { this.button = element as HTMLButtonElement; }}
      onClick={() => this.kinActivate.emit({ variant: this.variant })}
      onPointerDown={event => this.ripple(event)}
    ><span class="spinner" aria-hidden="true"></span><slot /></button>;
  }
}
