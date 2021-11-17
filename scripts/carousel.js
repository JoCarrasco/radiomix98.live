const customSlides = [
  {
    id: 0,
    dateDescription: 'Lunes a Viernes ',
    actionDescription: 'Mas Claro No Canta un Gallo',
    hourDate: 'de 6:00 AM a 8:00 AM'
  },
  {
    id: 1,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'El Club de Maria Celeste',
    hourDate: 'a las 3:00 PM'
  },
  {
    id: 2,
    dateDescription: 'Domingos',
    actionDescription: 'Tips de Salud',
    hourDate: 'a las 9:30 AM'
  },
  {
    id: 3,
    dateDescription: 'Sabados',
    actionDescription: 'Sin compromiso',
    hourDate: 'a las 9:00 AM'
  },
  {
    id: 4,
    dateDescription: 'Viernes y Sabado',
    actionDescription: 'Que hay pa hoy',
    hourDate: 'a las 7:00 PM'
  },
  {
    id: 5,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'La hora del vallenato',
    hourDate: 'a las 5:00 PM'
  },
  {
    id: 6,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'Puro Llano',
    hourDate: 'a las 1:00 PM'
  },
  {
    id: 7,
    dateDescription: 'Sabados',
    actionDescription: 'Ingenieria para la vida',
    hourDate: 'a las 10:00 AM'
  },
  {
    id: 8,
    dateDescription: 'Martes y Jueves',
    actionDescription: 'A tu estilo',
    hourDate: 'a las 4:00 PM'
  },
  {
    id: 9,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'Parranda Gaitera',
    hourDate: 'a las 1:00 PM'
  },
  {
    id: 10,
    dateDescription: 'Jueves',
    actionDescription: 'Sexo Gourmet',
    hourDate: 'a las 9:30 PM'
  },
  {
    id: 11,
    dateDescription: 'Sabados',
    actionDescription: 'Pateando La Calle',
    hourDate: 'a las 9:00 AM'
  },
  {
    id: 12,
    dateDescription: 'Lunes a Sabado',
    actionDescription: 'Clasificados Mix',
    hourDate: 'a las 1:00 PM & 6:00 PM'
  },
  {
    id: 13,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'Mix Party',
    hourDate: 'a las 7:00 PM'
  },
  {
    id: 14,
    dateDescription: 'Lunes a Viernes',
    actionDescription: 'Que Hable Mi Gente',
    hourDate: 'a las 12:00 PM'
  },
 ];

function getInnerCarouselItem(slide, i) {
  return `
    <div class="carousel-item ${i === 0 ? 'active' : ''}" data-img="./assets/img/${slide.id}.jpg" data-id="${slide.id}">
      <div class="featured-bg-img" style="background-image: url(./assets/img/${slide.id}.jpg)"></div>
      <img class="d-block w-100" src="./assets/img/${slide.id}.jpg" alt="${slide.id} alt image"/>
    </div>`;
}

function setInitialImages() {
  const initialSlideParentDiv = document.querySelector('.carousel-upper-wrapper');
  const bootstrapCarousel = `
    <div id="primaryCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">${customSlides.map((slide, i) => this.getInnerCarouselItem(slide, i)).reduce((a,b) => a+b)}</div>
    </div>`;
  
  initialSlideParentDiv.insertAdjacentHTML('beforeend', bootstrapCarousel);
}

setInitialImages();
