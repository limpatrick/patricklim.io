import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import useSections from '~/hooks/use-sections';
import useSiteMetadata from '~/hooks/use-site-metadata';
import { useConfigState } from '~/providers/config';
import { useMenuMobileActions } from '../provider';
import Subheader from './subheader';

const ItemsScroll = () => {
  const { path } = useConfigState();
  const { siteName } = useSiteMetadata();
  const { closePromise } = useMenuMobileActions();
  const sections = useSections();

  return path === '/' ? (
    <>
      <Subheader>{siteName}</Subheader>
      {sections.map(({ id, scrollTo, title }) => (
        <ListItem
          key={id}
          button
          component="li"
          onClick={async () => {
            await closePromise();
            scrollTo();
          }}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
      <Divider component="li" />
    </>
  ) : null;
};

export default ItemsScroll;
