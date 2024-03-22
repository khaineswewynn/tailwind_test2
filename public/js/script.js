const carouselElement = document.getElementById('mycarousel');

const items = [
    {
        position: 0,
        el: document.getElementById('item1'),
    },
    {
        position: 1,
        el: document.getElementById('item2'),
    },
    {
        position: 2,
        el: document.getElementById('item3'),
    }
    
];

// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3'),
            },
           
        ],
    },

    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: () => {
        console.log('previous slider item is shown');
    },
    onChange: () => {
        console.log('new slider item has been shown');
    },
};

// instance options object
const instanceOptions = {
  id: 'mycarousel',
  override: true
};


import {Carousel} from '../../node_modules/flowbite';
//Carousel=require('flowbite');

const carousel = new Carousel(carouselElement, items, options, instanceOptions);
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});