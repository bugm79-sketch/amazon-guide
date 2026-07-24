document.querySelectorAll('[data-amazon-placeholder]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});
