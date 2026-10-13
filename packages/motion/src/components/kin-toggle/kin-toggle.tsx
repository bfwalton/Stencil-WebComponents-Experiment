import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({ tag: 'kin-toggle', styleUrl: 'kin-toggle.css', shadow: true })
export class KinToggle {
  /** Whether the switch is on. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Prevents user changes. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitted after a user changes the switch. */
  @Event({ eventName: 'kin-change', bubbles: true, composed: true }) kinChange!: EventEmitter<{ checked: boolean }>;

  private toggle(): void {
    this.checked = !this.checked;
    this.kinChange.emit({ checked: this.checked });
  }

  render() {
    return <button type="button" role="switch" part="switch" aria-checked={String(this.checked)} disabled={this.disabled} onClick={() => this.toggle()}>
      <span class="track" aria-hidden="true"><span class="thumb"></span></span><slot>Enable</slot>
    </button>;
  }
}
