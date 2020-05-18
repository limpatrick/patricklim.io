import { useState } from 'react';

const useScrollTo = (
  idSelector: string,
  arg: Parameters<Element['scrollIntoView']>[0] = { behavior: 'smooth', block: 'center' }
) => {
  const [id, setId] = useState(idSelector);

  const scrollTo = (event: React.MouseEvent & { target: { ownerDocument?: Document } }) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${id}`);

    if (anchor) {
      anchor.scrollIntoView(arg);
    }
  };

  return { id, setId, scrollTo };
};

export default useScrollTo;
