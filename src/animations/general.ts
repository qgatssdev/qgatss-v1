import { MouseEvent } from 'react';
import gsap from 'gsap';

export const onGreen = ({ currentTarget }: MouseEvent<HTMLSpanElement>) => {
  gsap.to(currentTarget, {
    color: '#ccf381',
    textFillColor: 'unset',
    textStroke: 'unset',
    ease: 'circ',
    duration: 1.5,
  });
};

export const onTransparent = ({
  currentTarget,
}: MouseEvent<HTMLSpanElement>) => {
  gsap.to(currentTarget, {
    color: '#ccf381',
    textFillColor: 'transparent',
    textStroke: '1px white',
    ease: 'circ',
    duration: 1.5,
  });
};
