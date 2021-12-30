const withSass = require('@zeit/next-sass');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

module.exports = withSass({});

module.exports = {
  reactStrictMode: true
};
