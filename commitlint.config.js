module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // Global scopes
        '*',
        'release',
        'angular',
        'react',
      ],
    ],
    'scope-empty': [
      2,
      'never',
    ],
  },
};
