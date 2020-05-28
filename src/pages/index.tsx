import React from 'react';
import Contact from '~/components/contact';
import Intro from '~/components/intro';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Intro />
    <SkillSet />
    <Contact />
  </>
);

export default IndexPage;
