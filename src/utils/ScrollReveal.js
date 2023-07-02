import ScrollReveal from 'scrollreveal';
import REVEALS from '../constants/ScrollReveal';

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

export const scrollReveal = () => {
  REVEALS.forEach(({tags, options}) => ScrollReveal().reveal(tags, options));
};