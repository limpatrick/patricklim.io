import { duration } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { Overrides as MuiOverrides } from '@material-ui/core/styles/overrides';
import muiTransitions from '@material-ui/core/styles/transitions';
import zIndex from '@material-ui/core/styles/zIndex';
import { LabComponentNameToClassKey as MuiLabClassKey } from '@material-ui/lab/themeAugmentation';
import { TimelineDotClassKey } from '@material-ui/lab/TimelineDot';

export const transitions = {
  backgroundColor: muiTransitions.create('background-color', { duration: duration.complex }),
};

export type LabComponentNameToClassKey = MuiLabClassKey & {
  MuiTimelineDot: TimelineDotClassKey;
};
export type Overrides = MuiOverrides &
  {
    [Name in keyof LabComponentNameToClassKey]?: Partial<
      StyleRules<LabComponentNameToClassKey[Name]>
    >;
  };
export type Override<T extends keyof Overrides> = Record<T, Overrides[T]>;

export const muiCssBaseline = (
  backgroundColor: string,
  nprogressColor: string
): Override<'MuiCssBaseline'> => ({
  MuiCssBaseline: {
    '@global': {
      '::selection': {
        backgroundColor,
      },
      body: {
        '&, *': {
          transition: transitions.backgroundColor,
        },
        '& #nprogress': {
          '& .bar': {
            backgroundColor: nprogressColor,
          },
          '& .bar, .spinner': {
            zIndex: zIndex.appBar + 1,
          },
          '& .peg': {
            boxShadow: `0 0 10px ${nprogressColor}, 0 0 5px ${nprogressColor}`,
          },
          '& .spinner-icon': {
            borderTopColor: nprogressColor,
            borderLeftColor: nprogressColor,
          },
        },
      },
    },
  },
});

export const muiAppBar = (backgroundColor: string): Override<'MuiAppBar'> => ({
  MuiAppBar: {
    root: {
      transition: [muiTransitions.create('box-shadow'), transitions.backgroundColor].join(', '),
      '&$colorPrimary': {
        backgroundColor,
      },
    },
  },
});

export const muiOutlinedInput = (hoverColor: string): Override<'MuiOutlinedInput'> => ({
  MuiOutlinedInput: {
    root: {
      '&:hover $notchedOutline': {
        borderColor: hoverColor,
      },
    },
  },
});

export const muiPaper = (): Override<'MuiPaper'> => ({
  MuiPaper: {
    root: {
      transition: [muiTransitions.create('box-shadow'), transitions.backgroundColor].join(', '),
    },
  },
});

export const muiTimelineDot = (backgroundColor: string): Override<'MuiTimelineDot'> => ({
  MuiTimelineDot: {
    root: {
      '&$defaultPrimary': {
        backgroundColor,
      },
    },
  },
});
