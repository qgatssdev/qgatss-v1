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

export const setHoverAnimation = (element: HTMLLIElement | null) => {
  if (!element) {
    return () => {};
  }

  const boundingBox = element.getBoundingClientRect();

  const centerX = boundingBox.left + boundingBox.width / 2;
  const centerY = boundingBox.top + boundingBox.height / 2;

  const handleMouseMove = (e: { clientX: any; clientY: any }) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    const maxDistance = boundingBox.width / 2;
    const newX = centerX + Math.cos(angle) * maxDistance;
    const newY = centerY + Math.sin(angle) * maxDistance;

    gsap.to(element, {
      x: newX - centerX,
      y: newY - centerY,
      duration: 0.7,
      ease: 'sine.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'sine.out',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mousemove', handleMouseLeave);
  };
};
