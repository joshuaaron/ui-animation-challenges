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

        setLandingPage();
        setBenefitsPage();
        setPopularItemsPage();
    }

    function setLandingPage() {
        const landingTextEl = getEl('.landing-text h1');
        const landingSubtitleEl = getEl('.landing-text h2');

        const splitLandingText = splitText(landingTextEl.textContent, 'title');
        splitLandingText.splice(10, 1, document.createElement('br')); // ensure line break is re-added

        const splitLandingSubtitle = splitText(landingSubtitleEl.textContent, 'subtitle');

        landingTextEl.replaceChildren(...splitLandingText);
        landingSubtitleEl.replaceChildren(...splitLandingSubtitle);
    }

    function setBenefitsPage() {
        const benefitsTextEl = getEl('.benefits-title h1');
        const benefitsSubtitleEl = getEl('.benefits-title h2');

        const splitBenefitsText = splitText(benefitsTextEl.textContent, 'title');
        const splitBenefitsSubtitle = splitText(benefitsSubtitleEl.textContent, 'subtitle');

        benefitsTextEl.replaceChildren(...splitBenefitsText);
        benefitsSubtitleEl.replaceChildren(...splitBenefitsSubtitle);
    }

    function setPopularItemsPage() {
        const popularTextEl = getEl('.popular-title h1');
        const popularSubtitleEl = getEl('.popular-title h2');

        const splitPopularText = splitText(popularTextEl.textContent, 'title');
        const splitPopularSubtitle = splitText(popularSubtitleEl.textContent, 'subtitle');

        popularTextEl.replaceChildren(...splitPopularText);
        popularSubtitleEl.replaceChildren(...splitPopularSubtitle);
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
                threshold: 0.1,
            }
        );

        observer.observe(element);
    }

    function getEl(el) {
        return document.querySelector(el);
    }

    function splitText(text, attr) {
        return [...text].map((char, i) => {
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
