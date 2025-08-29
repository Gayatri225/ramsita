const root = document.documentElement;
const btn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.classList.toggle('dark', saved === 'dark');
btn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  btn.textContent = isDark ? '☼' : '☾';
});
btn.textContent = root.classList.contains('dark') ? '☼' : '☾';

// reveal-on-scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// year
document.getElementById('year').textContent = new Date().getFullYear();
