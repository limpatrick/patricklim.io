import { mergeRight } from 'ramda';
import { useState } from 'react';

const defaultArg: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
};

const useScrollTo = (idSelector: string, arg: ScrollIntoViewOptions = {}) => {
  const [id, setId] = useState(idSelector);

  const scrollTo = (event: React.MouseEvent & { target: { ownerDocument?: Document } }) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${id}`);

    if (anchor) {
      anchor.scrollIntoView(mergeRight(defaultArg, arg));
    }
  };

  return { id, setId, scrollTo };
};

export default useScrollTo;
