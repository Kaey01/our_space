module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
            'operator-linebreak': ['error', 'after'],
            'no-var': 'error',
            'array-bracket-spacing': ['error', 'never'],
            camelcase: 'error',
            quotes: ['error', 'single'],
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'no-trailing-spaces': 'error',
            indent: ['error', 2],
            'arrow-parens': ['error', 'as-needed'],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 3,
                        allowFirstLine: true
                    },
                    multiline: {
                        max: 1,
                        allowFirstLine: false
                    }
                }
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'never',
                        component: 'any'
                    },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT'
                    ],
                    alphabetical: false
                }
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ],
            'vue/singleline-html-element-content-newline': [
                'error',
                {
                    ignoreWhenNoAttributes: true,
                    ignoreWhenEmpty: true,
                    ignores: ['pre', 'textarea', ...INLINE_ELEMENTS]
                }
            ],
            'vue/attribute-hyphenation': [
                'error',
                'always' | 'never',
                {
                    ignore: []
                }
            ]
        }
    }
}
