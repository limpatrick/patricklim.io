import { mergeRight } from 'ramda';
import { useState } from 'react';

const defaultArg: ScrollIntoViewOptions = {
  behavior: 'smooth',
};

const useScrollTo = (idSelector: string, arg: ScrollIntoViewOptions = {}) => {
  const [id, setId] = useState(idSelector);

  const scrollTo = () => {
    const anchor = document.querySelector(`#${id}`);

    if (anchor) {
      alert('scrollTo');
      anchor.scrollIntoView(mergeRight(defaultArg, arg));
    }
  };

  return { id, setId, scrollTo };
};

export default useScrollTo;
