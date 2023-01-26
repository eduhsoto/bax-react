/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color_default: '#FFFFFF',
        color_secondary_1: '#002360',
        color_secondary_2: '#FF005C',
        color_primary_1: '#284A86',
        color_primary_2: '#010135',
        color_tertiary: '#232353',
        accent_color: '#F4CF2F',
        accent_color_form: '#E3EAF5',
        error_input: '#910000',
        correct_input: '#007400',
        menu_item_default: '#8A8A9E',
        error_sent_form: '#F9A9C6',
      },
      screens: {
        tablet: { max: '820px' },
        phone: { max: '540px' },
      },
      boxShadow: {
        'bax-shadow':
          '0px 4px 10px 4px rgb(0 0 0 / 7%), 0px 1px 3px rgb(0 0 0 / 20%)',
      },
      borderRadius: {
        'bax-radius': '30px 0px 30px 30px',
      },
      gridTemplateColumns: {
        '3-auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        gilgory: ['Gilroy'],
        roboto: ['roboto'],
      },
    },
  },
  plugins: [],
};
