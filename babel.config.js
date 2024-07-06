module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          root: ['./src'],
          alias: {
            '@/pages': './src/Pages',
            '@/redux': './src/Redux',
            '@/services': './src/Services',
          },
        },
      ],
    ]
  }
}
