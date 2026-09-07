/**
 * Slot-machine number reels.
 * Markup is rendered by <SlotNumber/>; these helpers drive the spin.
 * Cascade timing: leftmost digit settles first, rightmost catches up later.
 */

const BASE_DURATION = 1000;
const PER_REEL_DELAY = 500;
const PER_ELEMENT_OFFSET = 60;

const nextFrame = (fn: () => void) =>
  requestAnimationFrame(() => requestAnimationFrame(fn));

/** Spin every reel inside one `.slot-machine` element to its final digit. */
export function animateSlotMachine(el: HTMLElement, elIdx = 0) {
  el.querySelectorAll<HTMLElement>('.slot-reel').forEach((reel, reelIdx) => {
    const finalIndex = reel.children.length - 1;
    const duration =
      BASE_DURATION + reelIdx * PER_REEL_DELAY + elIdx * PER_ELEMENT_OFFSET;
    reel.style.transition = 'none';
    reel.style.transform = 'translateY(0)';
    nextFrame(() => {
      reel.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      reel.style.transform = `translateY(-${finalIndex}em)`;
    });
  });
}

/** Grow a `[data-fill-to]` progress bar from 0 to its target width. */
export function animateFillBar(el: HTMLElement) {
  el.style.transition = 'width 1.8s cubic-bezier(0.16, 1, 0.3, 1)';
  nextFrame(() => {
    el.style.width = `${el.dataset.fillTo}%`;
  });
}
