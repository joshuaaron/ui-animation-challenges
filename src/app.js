'use strict';

(() => {
    // first we need to get the references to the sections we want to observe
    const landingEl = getEl('.landing');
    const benefitsEl = getEl('.benefits');
    const popularEl = getEl('.popular');

    function init() {
        // set up observer instance for each el
        [landingEl, benefitsEl, popularEl].forEach((el) => {
            trackInView(el);
        });

        // landing
        const landingText = getEl('.landing-text h1');
        const landingSubtitle = getEl('.landing-text h2');

        const splitLandingText = splitText(landingText.textContent, 'title');
        const splitLandingSubtitle = splitText(landingSubtitle.textContent, 'subtitle');

        landingText.replaceChildren(...splitLandingText);
        landingSubtitle.replaceChildren(...splitLandingSubtitle);
    }

    function trackInView(element) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.dataset.inview = true;
                } else {
                    delete element.dataset.inview;
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(element);
    }

    function getEl(el) {
        return document.querySelector(el);
    }

    function splitText(text, attr) {
        return [...text].map((char, i) => {
            if (i === 10) return document.createElement('br');
            let span = document.createElement('span');
            span.style.display = 'inline-flex';
            span.innerText = char === ' ' ? String.fromCharCode(160) : char;
            span.dataset[attr] = '';
            span.style.setProperty('--i', i);
            return span;
        });
    }

    init();
})();
