module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/pages': './src/pages',
            '@/redux': './src/redux',
            '@/services': './src/services',
          },
        },
      ],
    ]
  }
}
