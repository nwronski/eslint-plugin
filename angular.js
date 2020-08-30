module.exports = {
  extends: './base.js',
  env: {
    browser: true,
    es6: true,
    protractor: true,
    jasmine: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@angular-eslint'
  ],
  rules: {
    // '@angular-eslint/angular-whitespace': [
    //   'error',
    //   'check-interpolation',
    //   'check-pipe',
    //   'check-semicolon'
    // ],
    '@angular-eslint/component-class-suffix': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    // '@angular-eslint/import-destructuring-spacing': 'error',
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/component-max-inline-declarations': [
      'error',
      {
        template: 3,
        styles: 3,
        animations: 15
      }
    ],
    // '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-input-prefix': [
      'error',
      {
        prefixes: [
          'can',
          'disable',
          'has',
          'is',
          'not',
          'should'
        ]
      }
    ],
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/pipe-prefix': 'off',
    '@angular-eslint/prefer-inline-decorator': 'off',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/use-injectable-provided-in': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error'
  },
  // overrides: [
  //   {
  //     files: [
  //       '*.component.ts'
  //     ],
  //     parser: '@typescript-eslint/parser',
  //     plugins: [
  //       '@angular-eslint/template'
  //     ],
  //     processor: '@angular-eslint/template/extract-inline-html'
  //   },
  //   {
  //     files: [
  //       '*.component.html'
  //     ],
  //     parser: '@angular-eslint/template-parser',
  //     plugins: [ '@angular-eslint/template' ],
  //     rules: {
  //       '@typescript-eslint/await-thenable': 'off',
  //       '@typescript-eslint/restrict-plus-operands': 'off',
  //       '@typescript-eslint/strict-boolean-expressions': 'off',
  //       '@typescript-eslint/tslint/config': 'off',
  //       '@typescript-eslint/no-implied-eval': 'off',
  //       '@typescript-eslint/no-misused-promises': 'off',
  //       '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  //       '@typescript-eslint/no-unsafe-assignment': 'off',
  //       '@typescript-eslint/no-unsafe-call': 'off',
  //       '@typescript-eslint/no-unsafe-member-access': 'off',
  //       '@typescript-eslint/no-unsafe-return': 'off',
  //       '@typescript-eslint/prefer-regexp-exec': 'off',
  //       '@typescript-eslint/require-await': 'off',
  //       '@typescript-eslint/restrict-template-expressions': 'off',
  //       'import/first': 'off',
  //       'import/no-amd': 'off',
  //       'import/no-anonymous-default-export': 'off',
  //       'import/no-extraneous-dependencies': 'off',
  //       'import/no-webpack-loader-syntax': 'error',
  //       'import/order': 'off',
  //       'jsdoc/no-types': 'off',
  //       'strict': 'off',

  //       '@angular-eslint/template/accessibility-alt-text': 'error',
  //       '@angular-eslint/template/accessibility-elements-content': 'off',
  //       '@angular-eslint/template/accessibility-label-for': 'error',
  //       '@angular-eslint/template/accessibility-tabindex-no-positive': 'error',
  //       '@angular-eslint/template/accessibility-table-scope': 'error',
  //       '@angular-eslint/template/accessibility-valid-aria': 'error',
  //       '@angular-eslint/template/click-events-have-key-events': 'off',
  //       '@angular-eslint/template/conditional-complexity': [
  //         'error',
  //         3
  //       ],
  //       '@angular-eslint/template/mouse-events-have-key-events': 'off',
  //       '@angular-eslint/template/no-any': 'error',
  //       '@angular-eslint/template/no-autofocus': 'error',
  //       '@angular-eslint/template/no-distracting-elements': 'error',
  //       '@angular-eslint/template/banana-in-a-box': 'error',
  //       '@angular-eslint/template/cyclomatic-complexity': [
  //         'error',
  //         {
  //           maxComplexity: 8
  //         }
  //       ],
  //       '@angular-eslint/template/no-negated-async': 'error'
  //     }
  //   }
  // ]
};
