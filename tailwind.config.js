// const themes = require('./tailwind/themes-plugin.js') 
// const forms = require('@tailwindcss/forms')

module.exports = {
  theme: {
    // fontSize: {
    //   xs: ['0.75rem', { lineHeight: '1rem' }],
    //   sm: ['0.875rem', { lineHeight: '1.5rem' }],
    //   base: ['1rem', { lineHeight: '1.75rem' }],
    //   lg: ['1.125rem', { lineHeight: '1.75rem' }],
    //   xl: ['1.25rem', { lineHeight: '2rem' }],
    //   '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
    //   '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
    //   '4xl': ['2rem', { lineHeight: '2.5rem' }],
    //   '5xl': ['2.5rem', { lineHeight: '3rem' }],
    //   '6xl': ['3rem', { lineHeight: '3.5rem' }],
    //   '7xl': ['4rem', { lineHeight: '4.5rem' }],
    // },
    fontFamily: {
      // 'header': ['Cheltenham', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 'header': ['Canela', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 'header': ['"Sharp Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 'header': ['"Original Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 'header': ['"circular-medium"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'header': ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'sans': ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    // extend: {
    //   fontFamily: {
    //     sans: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    //   }
    // }
  },

  content: [
    // "./components/app/AppButton.vue"
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    // "./app.vue",
  ],

  plugins: [
    // Our own themeing plugin
    // https://www.protailwind.com/workshops/multi-theme-strategy
    // themes,
    
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}