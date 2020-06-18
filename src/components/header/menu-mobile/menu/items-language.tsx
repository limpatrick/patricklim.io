import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LanguageIcon from '@material-ui/icons/LanguageRounded';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import useLanguages from '~/hooks/use-languages';
import Subheader from './subheader';

const ItemsLanguage = () => {
  const { formatMessage } = useIntl();
  const { languages, navigate, isCurrentLanguage } = useLanguages();

  return (
    <>
      <Subheader>{formatMessage({ id: 'global.language' })}</Subheader>
      {languages.map(([code, language]) =>
        !isCurrentLanguage(code) ? (
          <ListItem
            key={code}
            button
            component="li"
            onClick={() => navigate(code)}
            selected={isCurrentLanguage(code)}
          >
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={language} />
          </ListItem>
        ) : null
      )}
      <Divider component="li" />
    </>
  );
};

export default ItemsLanguage;
