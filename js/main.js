document.addEventListener("DOMContentLoaded", function () {
  const { annotate } = window.RoughNotation;

  const names = document.querySelectorAll('.highlight-text');
  const boxLinks = document.querySelectorAll('.boxed-link');
  const underlineLinks = document.querySelectorAll('.underline-link');
  const bracketedContent = document.querySelectorAll('.bracket-enclosed');
  const boxedContent = document.querySelectorAll('.boxed');

  names.forEach(name => {
    const nameAnnotation = annotate(name, { type: 'highlight', color: '#17B89080'});
    nameAnnotation.show();
  });

  bracketedContent.forEach(content => {
    const nameAnnotation = annotate(content, { type: 'bracket', brackets:['left', 'right'], padding: [8, 8, 4, 8], color: '#17B89080', strokeWidth: 5 });
    nameAnnotation.show();
  });

  boxedContent.forEach(content => {
    const nameAnnotation = annotate(content, { type: 'box', color: '#17B89080'});
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
