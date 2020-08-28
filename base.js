module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript'
  ],
  env: {
    es6: true,
    node: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'import',
    'jsdoc'
  ],
  settings: {
    'import/external-module-folders': [
      'node_modules',
      'packages'
    ],
    'import/ignore': [
      'node_modules'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts'
      ]
    }
  },
  ignorePatterns: [
    '**/{public,build,dist}/**',
    '**/*.fixture.*',
    '**/*.seed.*',
    '**/setupTests.*',
    '**/serviceWorker.*',
    '**/*.d.ts',
    'polyfills.*',
    'test-setup.*',
    'node_modules'
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'error',
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: [ 'camelCase' ]
      },
      {
        selector: 'variableLike',
        format: [ 'camelCase' ]
      },
      {
        selector: 'interface',
        format: [ 'PascalCase' ],
        prefix: [ 'I' ]
      },
      {
        selector: 'variable',
        format: [ 'camelCase', 'UPPER_CASE' ]
      },
      {
        selector: 'parameter',
        format: [ 'camelCase' ],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: [ 'private' ],
        format: [ 'camelCase' ],
        leadingUnderscore: 'require'
      },
      {
        selector: 'enumMember',
        format: [ 'PascalCase' ]
      },
      {
        selector: 'function',
        format: [ 'PascalCase', 'camelCase' ]
      },
      {
        selector: 'variable',
        types: [ 'function' ],
        format: [ 'PascalCase', 'camelCase' ]
      },
      {
        selector: 'typeLike',
        format: [ 'PascalCase' ]
      },
      {
        selector: 'typeParameter',
        format: [ 'PascalCase' ]
      },
      {
        selector: 'property',
        format: [ 'PascalCase', 'camelCase' ]
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        'default': [
          'signature',
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'private-abstract-method',
          'protected-abstract-method',
          'public-static-method',
          'protected-static-method',
          'private-static-method'
        ]
      }
    ],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [
          0,
          1,
          2,
          1000,
          -1,
          -1000
        ],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: false,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreEnums: true
      }
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_e'
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': [
      'error',
      'always'
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'complexity': [
      'error',
      {
        max: 15
      }
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'handle-callback-err': [
      'error',
      '^(err|error|e)$'
    ],
    'id-blacklist': [
      'error',
      'any',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined'
    ],
    'id-match': 'error',
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.*',
          '**/*.e2e-spec.*',
          '**/test-setup.*',
          '**/setupTests.*',
          '**/test/*',
          '**/.storybook/*',
          '**/*.stories.*',
          '**/prisma/**/*.ts'
        ]
      }
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external'
          ],
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '*/polyfills.{ts,tsx}',
            group: 'builtin',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: [
          'builtin',
          'external'
        ]
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ignoredNodes: [
          'JSXAttribute',
          'JSXSpreadAttribute'
        ]
      }
    ],
    'jsdoc/no-types': 'error',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        comments: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        tabWidth: 2
      }
    ],
    'max-lines': [
      'error',
      600
    ],
    'new-parens': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': [
      'error',
      'except-parens'
    ],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-class-members': 'off',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': 'error',
    'no-fallthrough': 'error',
    'no-implicit-coercion': [
      'error',
      {
        'boolean': true,
        number: true,
        string: true,
        allow: []
      }
    ],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: true,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>'
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          [
            '&&',
            '||'
          ],
          [
            'in',
            'instanceof'
          ]
        ],
        allowSamePrecedence: false
      }
    ],
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-regex-spaces': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'eval',
        message: 'Do not use eval()'
      },
      {
        name: 'isNaN',
        message: 'You can use Number.isNaN() instead of isNaN()'
      },
      'blur',
      'close',
      'closed',
      'confirm',
      'event',
      'external',
      'find',
      'length',
      'location',
      'name',
      'parent',
      'print',
      'screen',
      'scroll',
      'self',
      'status',
      'stop',
      'top'
    ],
    'no-restricted-imports': [
      'error',
      'lodash',
      'rxjs/Rx'
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message: 'Please use import() instead'
      },
      {
        object: 'System',
        property: 'import',
        message: 'Please use import() instead'
      }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'WithStatement',
      {
        selector: 'CallExpression[callee.name=\'setTimeout\'][arguments.length!=2]',
        message: 'setTimeout must always be invoked with two arguments.'
      }
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        builtinGlobals: false
      }
    ],
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    'radix': 'error',
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'semi-spacing': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '/'
          ],
          exceptions: [
            '-',
            '+'
          ]
        },
        block: {
          markers: [
            '!'
          ],
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ],
    'strict': [
      'error',
      'never'
    ],
    'unicode-bom': [
      'error',
      'never'
    ],
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    'yoda': 'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'no-mergeable-namespace': true,
          'no-reference-import': true,
          'number-literal-format': true,
          'one-line': [
            true,
            'check-catch',
            'check-finally',
            'check-else',
            'check-open-brace',
            'check-whitespace'
          ],
          'prefer-conditional-expression': true,
          'prefer-method-signature': true,
          'strict-string-expressions': [
            true,
            {
              'allow-empty-types': true
            }
          ]
        }
      }
    ]
  }
};
