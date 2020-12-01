# ui-animation-challenges

Just working on different ways to animate, with basic css transform/animations, greensock, other libs and techniques.

### Animation-6

- Focused on setting css vars for animations, and tweaking them per element
```scss
*,
*::before,
*::after {
    animation-duration: var(--duration);
    animation-timing-function: var(--ease);
    animation-delay: var(--delay);
    animation-fill-mode: both;
}

// animate once the section is in view (using intersection observer)
[data-inview] {
    [data-title] {
        --duration: 0.4s;
        --delay: calc((var(--i) * 0.05s) + (var(--offset) * 3));
        animation-name: title-animation;
    }

    .landing-description {
        --duration: 0.8s;
        --delay: calc(var(--offset) * 5);
    }
}
```
