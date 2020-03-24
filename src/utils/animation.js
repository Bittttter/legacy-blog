export function tween({
  from = 0,
  to = 1,
  duration = 1000,
  easing = x => x,
  onUpdate = () => {},
}) {
  const startTime = performance.now();
  const delta = to - from;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    if (progress < 1) {
      const latest = from + easing(progress) * delta;
      onUpdate(latest);
      window.requestAnimationFrame(update);
    }
  }

  window.requestAnimationFrame(update);
}

export const ease = p => t => 1 - Math.pow(1 - t, p);
