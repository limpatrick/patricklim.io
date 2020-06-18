import 'typeface-raleway';
import 'typeface-roboto';
import 'typeface-varela';
import { IntlProps } from 'gatsby-plugin-intl';
import React, { useEffect } from 'react';
import { useConfigActions } from '~/providers/config';

type Props = { children: React.ReactNode } & { intl: IntlProps };

const WrapPageElement = ({ children, intl }: Props) => {
  const { setPath } = useConfigActions();

  useEffect(() => {
    setPath(intl.originalPath);
  }, [intl.originalPath, setPath]);

  return <>{children}</>;
};

export default WrapPageElement;
