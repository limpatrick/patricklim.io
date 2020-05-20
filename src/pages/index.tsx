import React from 'react';
import Contact from '~/components/contact';
import Intro from '~/components/intro';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';

const skillSetId = 'skill-set-section';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Intro id={skillSetId} />
    <SkillSet id={skillSetId} />
    <Contact />
  </>
);

export default IndexPage;
