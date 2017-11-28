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
      ],
    ],
    'scope-empty': [
      2,
      'never',
    ],
  },
};
