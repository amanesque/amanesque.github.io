document.addEventListener("DOMContentLoaded", function () {
  const { annotate } = window.RoughNotation;

  const names = document.querySelectorAll('.highlight-text');
  const boxLinks = document.querySelectorAll('.boxed-link');
  const underlineLinks = document.querySelectorAll('.underline-link');
  const aboutContent = document.querySelectorAll('.bracket-enclosed');

  names.forEach(name => {
    const nameAnnotation = annotate(name, { type: 'highlight', color: '#17B89080' });
    nameAnnotation.show();
  });

  aboutContent.forEach(about => {
    const nameAnnotation = annotate(about, { type: 'bracket', brackets:['left', 'right'], padding: [1, 10, -10, 10], color: '#17B89080', strokeWidth: 5 });
    nameAnnotation.show();
  });

  boxLinks.forEach(link => {
    const annotation = annotate(link, { type: 'box', padding: [1, 1], color: '#14A380', animationDuration: 600 });

    link.addEventListener('mouseenter', () => {
      annotation.show();
    });

    link.addEventListener('mouseleave', () => {
      annotation.hide();
    });
  });

  underlineLinks.forEach(link => {
    const annotation = annotate(link, { type: 'underline', padding: [1, 0], color: '#14A380', animationDuration: 400 });

    link.addEventListener('mouseenter', () => {
      annotation.show();
    });

    link.addEventListener('mouseleave', () => {
      annotation.hide();
    });
  });
});
