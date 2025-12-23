document.addEventListener('DOMContentLoaded', function() {
  
  // Mapear triángulos con sus desplegables
  const pares = [
    { tri: '.triangulo1', desp: '.cuadradodesplegable1' },
    { tri: '.triangulo2', desp: '.cuadradodesplegable2' },
    { tri: '.triangulo3', desp: '.cuadradodesplegable3' },
    { tri: '.triangulo4', desp: '.cuadradodesplegable4' },
    { tri: '.triangulo5', desp: '.cuadradodesplegable5' }
  ];

  pares.forEach(par => {
    const triangulo = document.querySelector(par.tri);
    const desplegable = document.querySelector(par.desp);
    
    if (!triangulo || !desplegable) {
      console.warn(`No encontrado: ${par.tri} o ${par.desp}`);
      return;
    }

    triangulo.addEventListener('click', function(e) {
      console.log(`Click en ${par.tri}`);
      
      if (desplegable.style.display === 'block') {
        desplegable.style.display = 'none';
      } else {
        desplegable.style.display = 'block';
      }
    });
  });

  // Logo draggable
  const logo = document.querySelector('.githublogo');
  if (logo) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    logo.addEventListener('mousedown', (e) => {
      isDragging = true;
      const rect = logo.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      logo.style.position = 'fixed';
      logo.style.left = (e.clientX - offsetX) + 'px';
      logo.style.top = (e.clientY - offsetY) + 'px';
      logo.style.right = 'auto';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
});
