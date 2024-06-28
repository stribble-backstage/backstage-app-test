import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
  } from '@backstage/theme';
  
  export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        ...palettes.light,
        primary: {
          main: '#FFB74D', // softer orange
        },
        secondary: {
          main: '#AED581', // light green
        },
        error: {
          main: '#EF9A9A', // soft red
        },
        warning: {
          main: '#FFCC80', // soft orange
        },
        info: {
          main: '#81D4FA', // soft blue
        },
        success: {
          main: '#A5D6A7', // soft green
        },
        background: {
          default: '#FFFDE7', // very light yellow
          paper: '#FFFDE7', // very light yellow
        },
        banner: {
          info: '#81D4FA', // soft blue
          error: '#EF9A9A', // soft red
          text: '#FFB74D', // softer orange
          link: '#AED581', // light green
        },
        errorBackground: '#EF9A9A', // soft red
        warningBackground: '#FFCC80', // soft orange
        infoBackground: '#81D4FA', // soft blue
        navigation: {
          background: '#FFB74D', // softer orange
          indicator: '#AED581', // light green
          color: '#000', // very light yellow
          selectedColor: '#000', // white
        },
      },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Georgia, Merriweather, serif',
    /* below drives the header colors */
    pageTheme: {
      home: genPageTheme({ colors: ['#EF9A9A', '#FFB74D'], shape: shapes.wave }),
      documentation: genPageTheme({
        colors: ['#EF9A9A', '#FFB74D'],
        shape: shapes.round,
      }),
      tool: genPageTheme({ colors: ['#EF9A9A', '#FFB74D'], shape: shapes.wave2 }),
      service: genPageTheme({
        colors: ['#EF9A9A', '#FFB74D'],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: ['#EF9A9A', '#FFB74D'],
        shape: shapes.round,
      }),
      library: genPageTheme({
        colors: ['#EF9A9A', '#FFB74D'],
        shape: shapes.wave2,
      }),
      other: genPageTheme({ colors: ['#EF9A9A', '#FFB74D'], shape: shapes.round }),
      app: genPageTheme({ colors: ['#EF9A9A', '#FFB74D'], shape: shapes.wave }),
      apis: genPageTheme({ colors: ['#EF9A9A', '#FFB74D'], shape: shapes.wave2 }),
    },
  });
