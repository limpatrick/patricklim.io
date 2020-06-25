import { mergeRight } from 'ramda';
import { useState } from 'react';

const defaultArg: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
};

const useScrollTo = (idSelector: string, arg: ScrollIntoViewOptions = {}) => {
  const [id, setId] = useState(idSelector);

  const scrollTo = (event?: React.MouseEvent & { target: { ownerDocument?: Document } }) => {
    alert(`scrollTo call #${id} ${event} ${document.querySelector(`#${id}`)}`);
    const anchor = (event?.target?.ownerDocument || document).querySelector(`#${id}`);

    alert(`scrollTo ${anchor}`);
    if (anchor) {
      const options = mergeRight(defaultArg, arg);
      alert(`scrollTo ${options}`);
      anchor.scrollIntoView(options);
    }
  };

  return { id, setId, scrollTo };
};

export default useScrollTo;
