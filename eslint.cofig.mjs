import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // 1. Load standard JavaScript and TypeScript bug-catching rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 2. Turn off formatting rules so Prettier can do its job without conflicts
  eslintConfigPrettier,

  // 3. Configure rules specifically for your workspace code
  {
    rules: {
      'no-console': 'warn',                      // Warns if you leave random console.logs in production code
      '@typescript-eslint/no-explicit-any': 'warn', // Discourages using the lazy 'any' type
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }] // Errors on dead/unused code
    }
  },

  // 4. Tell ESLint which folders to ignore completely
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/build/**']
  }
);