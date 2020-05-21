import { find, path, pathEq, pathOr, pipe } from 'ramda';
import { IconType, ImgType } from '~/data/skills';
import { GetImagesQuery } from '@generated/graphql-types';

export const isIconType = (icon: IconType | ImgType): icon is IconType =>
  (icon as IconType).icon !== undefined;

export const isImgType = (icon: IconType | ImgType): icon is ImgType =>
  (icon as ImgType).filename !== undefined;

export const getFixed = (
  filename: string,
  data: GetImagesQuery
): GetImagesQuery['allFile']['nodes'][0]['childImageSharp']['fixed'] | undefined =>
  pipe(
    pathOr<GetImagesQuery['allFile']['nodes']>([], ['allFile', 'nodes']),
    find<GetImagesQuery['allFile']['nodes'][0]>(
      pathEq(['childImageSharp', 'fixed', 'originalName'], filename)
    ),
    path<GetImagesQuery['allFile']['nodes'][0]['childImageSharp']['fixed']>([
      'childImageSharp',
      'fixed',
    ])
  )(data);

export const getIconOrSrc = (
  elem: IconType | ImgType,
  data: GetImagesQuery
): IconType | { src: ReturnType<typeof getFixed> } =>
  isIconType(elem) ? elem : { src: getFixed(elem.filename, data) };
