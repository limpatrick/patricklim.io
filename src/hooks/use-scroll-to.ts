import { useState } from 'react';

const defaultArg: ScrollIntoViewOptions = {
  behavior: 'smooth',
};

const useScrollTo = (idSelector: string, arg: ScrollIntoViewOptions = {}) => {
  const [id, setId] = useState(idSelector);

  const scrollTo = () => {
    alert(`scrollTo call #${id} query=${document.querySelector(`#${id}`)}`);
    const anchor = document.querySelector(`#${id}`) as HTMLElement;

    if (anchor) {
      alert(
        `scrollTo options=${{
          behavior: 'smooth',
          left: anchor.offsetLeft,
          top: anchor.offsetTop,
        }}`
      );
      window.scrollTo({
        behavior: 'smooth',
        left: anchor.offsetLeft,
        top: anchor.offsetTop,
      });
    }
  };

  return { id, setId, scrollTo };
};

export default useScrollTo;
