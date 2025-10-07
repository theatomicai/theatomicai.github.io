document.addEventListener("DOMContentLoaded", () => {
  const v = document.getElementById("hero-video");
  if (!v) return;
  v.muted = true; // ensure property is set before play()
  v.play().catch(() => {
    const kick = () => { v.play().catch(()=>{}); cleanup(); };
    const cleanup = () => {
      document.removeEventListener("touchstart", kick);
      document.removeEventListener("click", kick);
      document.removeEventListener("scroll", kick);
    };
    document.addEventListener("touchstart", kick, { once: true, passive: true });
    document.addEventListener("click", kick, { once: true });
    document.addEventListener("scroll", kick, { once: true, passive: true });
  });
});