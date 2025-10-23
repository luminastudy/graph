// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import agent from 'eslint-config-agent';

export default [...agent, {
  ignores: ['dist/', 'node_modules/', 'coverage/', 'src/stories/', '**/*.stories.tsx', '.storybook/', 'storybook-static/'],
}, ...storybook.configs["flat/recommended"]];
