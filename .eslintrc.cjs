module.exports = {
  extends: '@antfu',
  ignorePatterns: ['**/*.spec.js'],
  rules: {
    // common
    'semi': ['warn', 'always'],
    '@typescript-eslint/semi': ['warn', 'always'],
    'curly': ['warn', 'all'],

    // vue
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/v-on-event-hyphenation': ['off', 'never', {}],

    // other
    'no-console': ['warn'],
    'antfu/top-level-function': ['off'],
  },
};
