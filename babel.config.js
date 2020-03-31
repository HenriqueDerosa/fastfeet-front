/*
  Used for storybook
 */
module.exports = api => {
  api.cache(true)

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        root: __dirname,
        rootPathPrefix: '~/',
        rootPathSuffix: 'src',
      },
    ],
  ]

  return { plugins }
}
