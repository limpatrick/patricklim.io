import React from 'react';
import Contact from '~/components/contact';
import Home from '~/components/home';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';

const skillSetId = 'skill-set-section';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Home id={skillSetId} />
    <SkillSet id={skillSetId} />
    <Contact />
  </>
);

export default IndexPage;
