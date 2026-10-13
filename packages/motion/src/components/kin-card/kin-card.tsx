import { Component, h } from '@stencil/core';

@Component({ tag: 'kin-card', styleUrl: 'kin-card.css', shadow: true })
export class KinCard {
  private card?: HTMLElement;

  private tilt(event: PointerEvent): void {
    if (!this.card || event.pointerType === 'touch' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = this.card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    this.card.style.setProperty('--rx', `${(0.5 - y) * 5}deg`);
    this.card.style.setProperty('--ry', `${(x - 0.5) * 5}deg`);
    this.card.style.setProperty('--mx', `${x * 100}%`);
    this.card.style.setProperty('--my', `${y * 100}%`);
  }

  private resetTilt(): void {
    this.card?.style.setProperty('--rx', '0deg');
    this.card?.style.setProperty('--ry', '0deg');
  }

  render() {
    return <article part="card" ref={element => { this.card = element as HTMLElement; }} onPointerMove={event => this.tilt(event)} onPointerLeave={() => this.resetTilt()}>
      <div class="inner">
        <div class="eyebrow"><slot name="eyebrow" /></div>
        <h3><slot name="title" /></h3>
        <div class="body"><slot /></div>
        <div class="footer"><slot name="footer" /></div>
      </div>
    </article>;
  }
}
