var splide = new Splide(".splide", {
  perPage: 3,
  perMove: 1,
  gap: 15,
  omitEnd: true,
  padding: 15,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 1,
      fixedWidth: "90%",
    },
  },
});

splide.mount();


