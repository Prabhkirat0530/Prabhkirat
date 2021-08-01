anime.timeline({ loop: false })
    .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 700,
        delay: (el, i) => 800 * i

    }).add({
        targets: '.ml15',
        duration: 900,
        easing: "easeOutExpo",
        delay: 1000
    });