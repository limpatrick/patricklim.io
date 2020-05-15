export default (id: string) => (
  event: React.MouseEvent & { target: { ownerDocument?: Document } }
) => {
  const anchor = (event.target.ownerDocument || document).querySelector(`#${id}`);

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
