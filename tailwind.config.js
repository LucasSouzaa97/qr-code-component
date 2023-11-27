/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js}', './**/*.{html}'],
    theme: {
        screens: {
            desktop: '1440px',
        },
        colors: {
            white: '#FFFFFF',
            'light-gray': '#D5E1EF',
            'grayish-blue': '#7D889E',
            'dark-yellowish-green': '#6f7f66',
            'dark-blue': '#1D2D44',
        },
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
        },
        fontSize: {
            paragraph: '15px',
        },
        extend: {},
    },
    plugins: [],
};
