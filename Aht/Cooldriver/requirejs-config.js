var config = {
  map: {
    '*': {
      'owlCarousel':  'js/owl.carousel.min',
	  'slick':'js/slick'
    }
  },
	shim: {
		'js/owl.carousel.min': {
			'deps': ['jquery']
		},
		'js/jquery.scrollbar.min': {
			'deps': ['jquery']
		}
	},
};
