import {
    withVuetify,
    withThemeProvider,
} from '@socheatsok78/storybook-addon-vuetify/dist/decorators';

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: ['light', 'dark'],
        },
        themes: {
            light: {
                primary: '#1C1C1C',
                secondary: {
                    base: '#00B493',
                    lighten5: '#EBFFFB',
                    lighten4: '#D6FFF8',
                    lighten3: '#ADFFF0',
                    lighten2: '#99FFEC',
                    lighten1: '#70FFE5',
                    darken1: '#47FFDD',
                    darken2: '#0AFFD2',
                    darken3: '#00F5C8',
                    darken4: '#00CCA7',
                },
                error: '#EA5455',
                extra: {
                    base: '#FFFFFF',
                    lighten1: '#467D7E',
                    lighten2: '#1A3738',
                    lighten3: '#0B1A1B',
                    lighten4: '#FADD9E',
                    lighten5: '#F8CC6B',
                },
                gray: {
                    base: '#5C5C5C',
                    lighten1: '#858585',
                    lighten2: '#D6D6D6',
                    lighten3: '#0B1A1B',
                    lighten4: '#F5F5F5',
                    lighten5: '#FFFFFF',
                },
            },
        },
    },
};

export const decorators = [withThemeProvider, withVuetify];
