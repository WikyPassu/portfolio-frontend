import ScrollReveal from 'scrollreveal';
import REVEALS from '../constants/ScrollReveal';

const sr = ScrollReveal({
  distance: "40px",
  duration: 1500,
  delay: 200
});

export const scrollReveal = () => {
  REVEALS.forEach(({tags, options}) => sr.reveal(tags, options));
};