import { useIntl } from 'gatsby-plugin-intl';
import { useMemo } from 'react';
import {
  Anchor,
  ID_ABOUT_ME,
  ID_CONTACT,
  ID_EDUCATION,
  ID_EXPERIENCE,
  ID_TECHNOLOGIES,
} from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';

type SectionData = {
  id: Anchor;
  scrollTo: ReturnType<typeof useScrollTo>['scrollTo'];
  title: string;
};

const useSections = () => {
  const { formatMessage } = useIntl();
  const { scrollTo: scrollToAboutMe } = useScrollTo(ID_ABOUT_ME);
  const { scrollTo: scrollToContact } = useScrollTo(ID_CONTACT);
  const { scrollTo: scrollToEducation } = useScrollTo(ID_EDUCATION);
  const { scrollTo: scrollToExperience } = useScrollTo(ID_EXPERIENCE);
  const { scrollTo: scrollToTechnologies } = useScrollTo(ID_TECHNOLOGIES);

  const data: SectionData[] = useMemo(
    () => [
      {
        id: ID_ABOUT_ME,
        scrollTo: scrollToAboutMe,
        title: formatMessage({ id: 'about-me.nav' }),
      },
      {
        id: ID_EXPERIENCE,
        scrollTo: scrollToExperience,
        title: formatMessage({ id: 'experience.nav' }),
      },
      {
        id: ID_TECHNOLOGIES,
        scrollTo: scrollToTechnologies,
        title: formatMessage({ id: 'technologies.nav' }),
      },
      {
        id: ID_EDUCATION,
        scrollTo: scrollToEducation,
        title: formatMessage({ id: 'education.nav' }),
      },
      {
        id: ID_CONTACT,
        scrollTo: scrollToContact,
        title: formatMessage({ id: 'contact.nav' }),
      },
    ],
    [
      formatMessage,
      scrollToAboutMe,
      scrollToContact,
      scrollToEducation,
      scrollToExperience,
      scrollToTechnologies,
    ]
  );

  return data;
};

export default useSections;
