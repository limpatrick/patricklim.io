import React from 'react';
import Home from '~/components/home';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';

const skillSetId = 'skill-set-section';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Home id={skillSetId} />
    <SkillSet id={skillSetId} />
  </>
);

export default IndexPage;
