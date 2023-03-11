export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1025 },
    items: 5,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 768, min: 641 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobileLarge: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
    partialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 460, min: 0 },
    items: 1,
    partialVisibilityGutter: 10
  }
};
