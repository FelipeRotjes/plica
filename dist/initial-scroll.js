var titulo = basicScroll.create({
    elem: document.querySelector('.plica-press-text-4'),
    from: 'top-bottom',
    to: 'bottom-middle',
    props: {
      '--titulo': {
        from: '50%',
        to: '0'
      },
      '--titulo-opacidad': {
        from: 0,
        to: 1
      }
    }
  });