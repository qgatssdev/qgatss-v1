type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type IOFunction = (
  item: Element,
  options: IntersectionObserverOptions
) => Promise<void>;

export const IO: IOFunction = (item, options) => {
  return new Promise((resolve) => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve();
        }
      });
    }, options);
    observer.observe(item);
  });
};
