var elem = document.querySelector('.slider-container');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.slider-container', {
  // options
});