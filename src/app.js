'use strict';

const box = document.getElementById('box');
const animateRight = box.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(200px)' }],
    {
        fill: 'forwards',
        easing: 'ease-in-out',
        duration: 2000,
    }
);

animateRight.finished.then(() => {
    box.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(200px)' }], {
        composite: 'add',
        fill: 'both',
        duration: 1500,
    });
});
