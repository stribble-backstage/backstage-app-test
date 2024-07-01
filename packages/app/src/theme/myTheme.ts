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
                main: '#2E3A87', // adjusted dark blue with more contrast
            },
            secondary: {
                main: '#4D5568', // adjusted grayish blue with more contrast
            },
            error: {
                main: '#B33030', // adjusted red with more contrast
            },
            warning: {
                main: '#B57B15', // adjusted orange with more contrast
            },
            info: {
                main: '#2E5BA8', // adjusted blue with more contrast
            },
            success: {
                main: '#4A7032', // adjusted green with more contrast
            },
            background: {
                default: '#D4D5D9', // slightly darker light gray
                paper: '#D4D5D9', // slightly darker light gray
            },
            banner: {
                info: '#2E5BA8', // adjusted blue with more contrast
                error: '#B33030', // adjusted red with more contrast
                text: '#2E3A87', // adjusted dark blue with more contrast
                link: '#4D5568', // adjusted grayish blue with more contrast
            },
            errorBackground: '#B33030', // adjusted red with more contrast
            warningBackground: '#B57B15', // adjusted orange with more contrast
            infoBackground: '#2E3A87', // adjusted dark blue with more contrast
            navigation: {
                background: '#2E3A87', // adjusted dark blue with more contrast
                indicator: '#B57B15', // adjusted orange with more contrast
                color: '#E5E6EA', // adjusted light gray with more contrast
                selectedColor: '#FFFFFF', // white
            },
        },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Georgia, serif',
    /* below drives the header colors */
    pageTheme: {
        home: genPageTheme({ colors: ['#B33030', '#2E3A87'], shape: shapes.wave }),
        documentation: genPageTheme({
            colors: ['#B33030', '#2E3A87'],
            shape: shapes.wave2,
        }),
        tool: genPageTheme({ colors: ['#B33030', '#2E3A87'], shape: shapes.round }),
        service: genPageTheme({
            colors: ['#B33030', '#2E3A87'],
            shape: shapes.wave,
        }),
        website: genPageTheme({
            colors: ['#B33030', '#2E3A87'],
            shape: shapes.wave,
        }),
        library: genPageTheme({
            colors: ['#B33030', '#2E3A87'],
            shape: shapes.wave,
        }),
        other: genPageTheme({ colors: ['#B33030', '#2E3A87'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#B33030', '#2E3A87'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#B33030', '#2E3A87'], shape: shapes.wave }),
    },
});
