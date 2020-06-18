import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';

type Props = { onClick: React.ComponentProps<typeof Button>['onClick'] };

const ErrorAction = ({ onClick }: Props) => (
  <FormattedMessage id="global.title.close">
    {(titleClose: string) => (
      <FormattedMessage id="global.btn.close">
        {(btnClose: string) => (
          <Button aria-label={titleClose} color="inherit" onClick={onClick}>
            {btnClose}
          </Button>
        )}
      </FormattedMessage>
    )}
  </FormattedMessage>
);

export default ErrorAction;
