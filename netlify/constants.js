const env = require('../generated/env.json');

const {
  PL_SITE_URL,
  NODE_ENV,
  URL: NETLIFY_SITE_URL = PL_SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV || env.CONTEXT || env.NODE_ENV,
} = process.env;

let SITE_URL = '';

if (NETLIFY_ENV === 'production') SITE_URL = PL_SITE_URL;
else if (NETLIFY_ENV === 'development') SITE_URL = 'http://localhost:8888';
else SITE_URL = env.DEPLOY_PRIME_URL;

module.exports = {
  NETLIFY_SITE_URL,
  NETLIFY_DEPLOY_URL,
  NETLIFY_ENV,
  SITE_URL,
};
