import {
  ColorPartial,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
} from '@material-ui/core/styles/createPalette';

export type ColorOption =
  | SimplePaletteColorOptions['main']
  | SimplePaletteColorOptions
  | ColorPartial;

export const toPaletteColorOption = (option: ColorOption): PaletteColorOptions =>
  typeof option === 'string' ? { main: option } : option;

export const palette = ({
  backgroundDefault,
  backgroundPaper,
  error,
  primary,
  success,
  type,
}: {
  backgroundDefault: string;
  backgroundPaper: string;
  error: ColorOption;
  primary: ColorOption;
  success: ColorOption;
  type: PaletteOptions['type'];
}): Record<'palette', PaletteOptions> => ({
  palette: {
    background: { default: backgroundDefault, paper: backgroundPaper },
    error: toPaletteColorOption(error),
    primary: toPaletteColorOption(primary),
    success: toPaletteColorOption(success),
    type,
  },
});
