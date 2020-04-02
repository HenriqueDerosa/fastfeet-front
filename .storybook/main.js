const path = require('path')

/* TODO Add this to Jest configuration to make addon-docs work
{
  "transform": {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  }
} */

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '..')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: {
            printWidth: 80,
            tabWidth: 2,
            bracketSpacing: true,
            trailingComma: 'es5',
            singleQuote: true,
            semi: false,
          },
        },
      },
    },
  ],
}
