document.addEventListener("DOMContentLoaded", function () {
  const { annotate } = window.RoughNotation;

  const names = document.querySelectorAll('.name');
  const links = document.querySelectorAll('.annotated-link');

  names.forEach(name => {
    const nameAnnotation = annotate(name, { type: 'highlight', color: '#17B89080' });
    nameAnnotation.show();
  });

  links.forEach(link => {
    const annotation = annotate(link, { type: 'box', padding: [1, 1], color: '#14A380', animationDuration: 600 });

    link.addEventListener('mouseenter', () => {
      annotation.show();
    });

    link.addEventListener('mouseleave', () => {
      annotation.hide();
    });
  });
});
