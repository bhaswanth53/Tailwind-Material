/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()


/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  'black-flat' : '#000000',
  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'grey-darken-4' : '#212121',
  'grey-darken-3' : '#424242',
  'grey-darken-2' : '#616161',
  'grey-darken-1' : '#757575',
  'grey-flat' : '#9e9e9e',
  'grey-lighten-1' : '#bdbdbd',
  'grey-lighten-2' : '#e0e0e0',
  'grey-lighten-3' : '#eeeeee',
  'grey-lighten-4' : '#f5f5f5',
  'grey-lighten-5' : '#fafafa',
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',
  'red-accent-4' : '#d50000',
  'red-accent-3' : '#ff1744',
  'red-accent-2' : '#ff5252',
  'red-accent-1' : '#ff8a80',
  'red-darken-4' : '#b71c1c',
  'red-darken-3' : '#c62828',
  'red-darken-2' : '#d32f2f',
  'red-darken-1' : '#e53935',
  'red-flat' : '#f44336',
  'red-lighten-1' : '#ef5350',
  'red-lighten-2' : '#e57373',
  'red-lighten-3' : '#ef9a9a',
  'red-lighten-4' : '#ffcdd2',
  'red-lighten-5' : '#ffebee',


  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',
  'orange-accent-4' : '#ff6d00',
  'orange-accent-3' : '#ff9100',
  'orange-accent-2' : '#ffab40',
  'orange-accent-1' : '#ffd180',
  'orange-darken-4' : '#e65100',
  'orange-darken-3' : '#ef6c00',
  'orange-darken-2' : '#f57c00',
  'orange-darken-1' : '#fb8c00',
  'orange-flat' : '#ff9800',
  'orange-lighten-1' : '#ffa726',
  'orange-lighten-2' : '#ffb74d',
  'orange-lighten-3' : '#ffcc80',
  'orange-lighten-4' : '#ffe0b2',
  'orange-lighten-5' : '#fff3e0',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',
  'yellow-accent-4' : '#ffd600',
  'yellow-accent-3' : '#ffea00',
  'yellow-accent-2' : '#ffff00',
  'yellow-accent-1' : '#ffff8d',
  'yellow-darken-4' : '#f57f17',
  'yellow-darken-3' : '#f9a825',
  'yellow-darken-2' : '#fbc02d',
  'yellow-darken-1' : '#fdd835',
  'yellow-flat' : '#ffeb3b',
  'yellow-lighten-1' : '#ffee58',
  'yellow-lighten-2' : '#fff176',
  'yellow-lighten-3' : '#fff59d',
  'yellow-lighten-4' : '#fff9c4',
  'yellow-lighten-5' : '#fffde7',

  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',
  'green-accent-4' : '#00c853',
  'green-accent-3' : '#00e676',
  'green-accent-2' : '#69f0ae',
  'green-accent-1' : '#b9f6ca',
  'green-darken-4' : '#1b5e20',
  'green-darken-3' : '#2e7d32',
  'green-darken-2' : '#388e3c',
  'green-darken-1' : '#43a047',
  'green-flat' : '#4caf50',
  'green-lighten-1' : '#66bb6a',
  'green-lighten-2' : '#81c784',
  'green-lighten-3' : '#a5d6a7',
  'green-lighten-4' : '#c8e6c9',
  'green-lighten-5' : '#e8f5e9',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',
  'teal-accent-4' : '#00bfa5',
  'teal-accent-3' : '#1de9b6',
  'teal-accent-2' : '#64ffda',
  'teal-accent-1' : '#a7ffeb',
  'teal-darken-4' : '#004d40',
  'teal-darken-3' : '#00695c',
  'teal-darken-2' : '#00796b',
  'teal-darken-1' : '#00897b',
  'teal-flat' : '#009688',
  'teal-lighten-1' : '#26a69a',
  'teal-lighten-2' : '#4db6ac',
  'teal-lighten-3' : '#80cbc4',
  'teal-lighten-4' : '#b2dfdb',
  'teal-lighten-5' : '#e0f2f1',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',
  'blue-accent-4' : '#2962ff',
  'blue-accent-3' : '#2979ff',
  'blue-accent-2' : '#448aff',
  'blue-accent-1' : '#82b1ff',
  'blue-darken-4' : '#0d47a1',
  'blue-darken-3' : '#1565c0',
  'blue-darken-2' : '#1976d2',
  'blue-darken-1' : '#1e88e5',
  'blue-flat' : '#2196f3',
  'blue-lighten-1' : '#42a5f5',
  'blue-lighten-2' : '#64b5f6',
  'blue-lighten-3' : '#90caf9',
  'blue-lighten-4' : '#bbdefb',
  'blue-lighten-5' : '#e3f2fd',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',
  'indigo-accent-4' : '#304ffe',
  'indigo-accent-3' : '#3d5afe',
  'indigo-accent-2' : '#536dfe',
  'indigo-accent-1' : '#8c9eff',
  'indigo-darken-4' : '#1a237e',
  'indigo-darken-3' : '#283593',
  'indigo-darken-2' : '#303f9f',
  'indigo-darken-1' : '#3949ab',
  'indigo-flat' : '#3f51b5',
  'indigo-lighten-1' : '#5c6bc0',
  'indigo-lighten-2' : '#7986cb',
  'indigo-lighten-3' : '#9fa8da',
  'indigo-lighten-4' : '#c5cae9',
  'indigo-lighten-5' : '#e8eaf6',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',
  'purple-accent-4' : '#aa00ff',
  'purple-accent-3' : '#d500f9',
  'purple-accent-2' : '#e040fb',
  'purple-accent-1' : '#ea80fc',
  'purple-darken-4' : '#4a148c',
  'purple-darken-3' : '#6a1b9a',
  'purple-darken-2' : '#7b1fa2',
  'purple-darken-1' : '#8e24aa',
  'purple-flat' : '#9c27b0',
  'purple-lighten-1' : '#ab47bc',
  'purple-lighten-2' : '#ba68c8',
  'purple-lighten-3' : '#ce93d8',
  'purple-lighten-4' : '#e1bee7',
  'purple-lighten-5' : '#f3e5f5',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',
  'pink-accent-4' : '#c51162',
  'pink-accent-3' : '#f50057',
  'pink-accent-2' : '#ff4081',
  'pink-accent-1' : '#ff80ab',
  'pink-darken-4' : '#880e4f',
  'pink-darken-3' : '#ad1457',
  'pink-darken-2' : '#c2185b',
  'pink-darken-1' : '#d81b60',
  'pink-flat' : '#e91e63',
  'pink-lighten-1' : '#ec407a',
  'pink-lighten-2' : '#f06292',
  'pink-lighten-3' : '#f48fb1',
  'pink-lighten-4' : '#f8bbd0',
  'pink-lighten-5' : '#fce4ec',

  'deep-purple-accent-4' : '#6200ea',
  'deep-purple-accent-3' : '#651fff',
  'deep-purple-accent-2' : '#7c4dff',
  'deep-purple-accent-1' : '#b388ff',
  'deep-purple-darken-4' : '#311b92',
  'deep-purple-darken-3' : '#4527a0',
  'deep-purple-darken-2' : '#512da8',
  'deep-purple-darken-1' : '#5e35b1',
  'deep-purple-flat' : '#673ab7',
  'deep-purple-lighten-1' : '#7e57c2',
  'deep-purple-lighten-2' : '#9575cd',
  'deep-purple-lighten-3' : '#b39ddb',
  'deep-purple-lighten-4' : '#d1c4e9',
  'deep-purple-lighten-5' : '#ede7f6',

  'light-blue-accent-4' : '#0091ea',
  'light-blue-accent-3' : '#00b0ff',
  'light-blue-accent-2' : '#40c4ff',
  'light-blue-accent-1' : '#80d8ff',
  'light-blue-darken-4' : '#01579b',
  'light-blue-darken-3' : '#0277bd',
  'light-blue-darken-2' : '#0288d1',
  'light-blue-darken-1' : '#039be5',
  'light-blue-flat' : '#03a9f4',
  'light-blue-lighten-1' : '#29b6f6',
  'light-blue-lighten-2' : '#4fc3f7',
  'light-blue-lighten-3' : '#81d4fa',
  'light-blue-lighten-4' : '#b3e5fc',
  'light-blue-lighten-5' : '#e1f5fe',

  'cyan-accent-4' : '#00b8d4',
  'cyan-accent-3' : '#00e5ff',
  'cyan-accent-2' : '#18ffff',
  'cyan-accent-1' : '#84ffff',
  'cyan-darken-4' : '#006064',
  'cyan-darken-3' : '#00838f',
  'cyan-darken-2' : '#0097a7',
  'cyan-darken-1' : '#00acc1',
  'cyan-flat' : '#00bcd4',
  'cyan-lighten-1' : '#26c6da',
  'cyan-lighten-2' : '#4dd0e1',
  'cyan-lighten-3' : '#80deea',
  'cyan-lighten-4' : '#b2ebf2',
  'cyan-lighten-5' : '#e0f7fa',

  'light-green-accent-4' : '#64dd17',
  'light-green-accent-3' : '#76ff03',
  'light-green-accent-2' : '#b2ff59',
  'light-green-accent-1' : '#ccff90',
  'light-green-darken-4' : '#33691e',
  'light-green-darken-3' : '#558b2f',
  'light-green-darken-2' : '#689f38',
  'light-green-darken-1' : '#7cb342',
  'light-green-flat' : '#8bc34a',
  'light-green-lighten-1' : '#9ccc65',
  'light-green-lighten-2' : '#aed581',
  'light-green-lighten-3' : '#c5e1a5',
  'light-green-lighten-4' : '#dcedc8',
  'light-green-lighten-5' : '#f1f8e9',

  'lime-accent-4' : '#aeea00',
  'lime-accent-3' : '#c6ff00',
  'lime-accent-2' : '#eeff41',
  'lime-accent-1' : '#f4ff81',
  'lime-darken-4' : '#827717',
  'lime-darken-3' : '#9e9d24',
  'lime-darken-2' : '#afb42b',
  'lime-darken-1' : '#c0ca33',
  'lime-flat' : '#cddc39',
  'lime-lighten-1' : '#d4e157',
  'lime-lighten-2' : '#dce775',
  'lime-lighten-3' : '#e6ee9c',
  'lime-lighten-4' : '#f0f4c3',
  'lime-lighten-5' : '#f9fbe7',

  'amber-accent-4' : '#ffab00',
  'amber-accent-3' : '#ffc400',
  'amber-accent-2' : '#ffd740',
  'amber-accent-1' : '#ffe57f',
  'amber-darken-4' : '#ff6f00',
  'amber-darken-3' : '#ff8f00',
  'amber-darken-2' : '#ffa000',
  'amber-darken-1' : '#ffb300',
  'amber-flat' : '#ffc107',
  'amber-lighten-1' : '#ffca28',
  'amber-lighten-2' : '#ffd54f',
  'amber-lighten-3' : '#ffe082',
  'amber-lighten-4' : '#ffecb3',
  'amber-lighten-5' : '#fff8e1',

  'deep-orange-accent-4' : '#dd2c00',
  'deep-orange-accent-3' : '#ff3d00',
  'deep-orange-accent-2' : '#ff6e40',
  'deep-orange-accent-1' : '#ff9e80',
  'deep-orange-darken-4' : '#bf360c',
  'deep-orange-darken-3' : '#d84315',
  'deep-orange-darken-2' : '#e64a19',
  'deep-orange-darken-1' : '#f4511e',
  'deep-orange-flat' : '#ff5722',
  'deep-orange-lighten-1' : '#ff7043',
  'deep-orange-lighten-2' : '#ff8a65',
  'deep-orange-lighten-3' : '#ffab91',
  'deep-orange-lighten-4' : '#ffccbc',
  'deep-orange-lighten-5' : '#fbe9e7',

  'brown-darken-4' : '#3e2723',
  'brown-darken-3' : '#4e342e',
  'brown-darken-2' : '#5d4037',
  'brown-darken-1' : '#6d4c41',
  'brown-flat' : '#795548',
  'brown-lighten-1' : '#8d6e63',
  'brown-lighten-2' : '#a1887f',
  'brown-lighten-3' : '#bcaaa4',
  'brown-lighten-4' : '#d7ccc8',
  'brown-lighten-5' : '#efebe9',

  'blue-grey-darken-4' : '#263238',
  'blue-grey-darken-3' : '#37474f',
  'blue-grey-darken-2' : '#455a64',
  'blue-grey-darken-1' : '#546e7a',
  'blue-grey-flat' : '#607d8b',
  'blue-grey-lighten-1' : '#78909c',
  'blue-grey-lighten-2' : '#90a4ae',
  'blue-grey-lighten-3' : '#b0bec5',
  'blue-grey-lighten-4' : '#cfd8dc',
  'blue-grey-lighten-5' : '#eceff1',
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },


  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  |
  */

  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '5': '5px',
    '6': '6px',
    '7': '7px',
    '8': '8px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),


  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  },


  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0': '0',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'outline': '0 0 0 3px rgba(52,144,220,0.5)',

    'red' : '0 2px 4px 0 rgba(244, 67, 54,0.10)',
    'red-md' : '0 4px 8px 0 rgba(244, 67, 54,0.12), 0 2px 4px 0 rgba(244, 67, 54,0.08)',
    'red-lg' : '0 15px 30px 0 rgba(244, 67, 54, 0.11), 0 5px 15px 0 rgba(244, 67, 54, 0.08)',
    'red-inner' : 'inset 0 2px 4px 0 rgba(244, 67, 54, 0.06)',
    'red-outline' : '0 0 0 3px rgba(244, 67, 54, 0.5)',

    'pink' : '0 2px 4px 0 rgba(233, 30, 99, 0.10)',
    'pink-md' : '0 4px 8px 0 rgba(233, 30, 99, 0.12), 0 2px 4px 0 rgba(233, 30, 99, 0.08)',
    'pink-lg' : '0 15px 30px 0 rgba(233, 30, 99, 0.11), 0 5px 15px 0 rgba(233, 30, 99, 0.08)',
    'pink-inner' : 'inset 0 2px 4px 0 rgba(233, 30, 99, 0.06)',
    'pink-outline' : '0 0 0 3px rgba(233, 30, 99, 0.5)',

    'purple' : '0 2px 4px 0 rgba(156, 39, 176, 0.10)',
    'purple-md' : '0 4px 8px 0 rgba(156, 39, 176, 0.12), 0 2px 4px 0 rgba(156, 39, 176, 0.08)',
    'purple-lg' : '0 15px 30px 0 rgba(156, 39, 176, 0.11), 0 5px 15px 0 rgba(156, 39, 176, 0.08)',
    'purple-inner' : 'inset 0 2px 4px 0 rgba(156, 39, 176, 0.06)',
    'purple-outline' : '0 0 0 3px rgba(156, 39, 176, 0.5)',

    'deep-purple' : '0 2px 4px 0 rgba(103, 58, 183, 0.10)',
    'deep-purple-md' : '0 4px 8px 0 rgba(103, 58, 183, 0.12), 0 2px 4px 0 rgba(103, 58, 183, 0.08)',
    'deep-purple-lg' : '0 15px 30px 0 rgba(103, 58, 183, 0.11), 0 5px 15px 0 rgba(103, 58, 183, 0.08)',
    'deep-purple-inner' : 'inset 0 2px 4px 0 rgba(103, 58, 183, 0.06)',
    'deep-purple-outline' : '0 0 0 3px rgba(103, 58, 183, 0.5)',

    'indigo' : '0 2px 4px 0 rgba(63, 81, 181, 0.10)',
    'indigo-md' : '0 4px 8px 0 rgba(63, 81, 181, 0.12), 0 2px 4px 0 rgba(63, 81, 181, 0.08)',
    'indigo-lg' : '0 15px 30px 0 rgba(63, 81, 181, 0.11), 0 5px 15px 0 rgba(63, 81, 181, 0.08)',
    'indigo-inner' : 'inset 0 2px 4px 0 rgba(63, 81, 181, 0.06)',
    'indigo-outline' : '0 0 0 3px rgba(63, 81, 181, 0.5)',

    'blue' : '0 2px 4px 0 rgba(33, 150, 243, 0.10)',
    'blue-md' : '0 4px 8px 0 rgba(33, 150, 243, 0.12), 0 2px 4px 0 rgba(33, 150, 243, 0.08)',
    'blue-lg' : '0 15px 30px 0 rgba(33, 150, 243, 0.11), 0 5px 15px 0 rgba(33, 150, 243, 0.08)',
    'blue-inner' : 'inset 0 2px 4px 0 rgba(33, 150, 243, 0.06)',
    'blue-outline' : '0 0 0 3px rgba(33, 150, 243, 0.5)',

    'light-blue' : '0 2px 4px 0 rgba(3, 169, 244, 0.10)',
    'light-blue-md' : '0 4px 8px 0 rgba(3, 169, 244, 0.12), 0 2px 4px 0 rgba(3, 169, 244, 0.08)',
    'light-blue-lg' : '0 15px 30px 0 rgba(3, 169, 244, 0.11), 0 5px 15px 0 rgba(3, 169, 244, 0.08)',
    'light-blue-inner' : 'inset 0 2px 4px 0 rgba(3, 169, 244, 0.06)',
    'light-blue-outline' : '0 0 0 3px rgba(3, 169, 244, 0.5)',

    'cyan' : '0 2px 4px 0 rgba(0, 188, 212, 0.10)',
    'cyan-md' : '0 4px 8px 0 rgba(0, 188, 212, 0.12), 0 2px 4px 0 rgba(0, 188, 212, 0.08)',
    'cyan-lg' : '0 15px 30px 0 rgba(0, 188, 212, 0.11), 0 5px 15px 0 rgba(0, 188, 212, 0.08)',
    'cyan-inner' : 'inset 0 2px 4px 0 rgba(0, 188, 212, 0.06)',
    'cyan-outline' : '0 0 0 3px rgba(0, 188, 212, 0.5)',

    'teal' : '0 2px 4px 0 rgba(0, 150, 136, 0.10)',
    'teal-md' : '0 4px 8px 0 rgba(0, 150, 136, 0.12), 0 2px 4px 0 rgba(0, 150, 136, 0.08)',
    'teal-lg' : '0 15px 30px 0 rgba(0, 150, 136, 0.11), 0 5px 15px 0 rgba(0, 150, 136, 0.08)',
    'teal-inner' : 'inset 0 2px 4px 0 rgba(0, 150, 136, 0.06)',
    'teal-outline' : '0 0 0 3px rgba(0, 150, 136, 0.5)',

    'green' : '0 2px 4px 0 rgba(76, 175, 80, 0.10)',
    'green-md' : '0 4px 8px 0 rgba(76, 175, 80, 0.12), 0 2px 4px 0 rgba(76, 175, 80, 0.08)',
    'green-lg' : '0 15px 30px 0 rgba(76, 175, 80, 0.11), 0 5px 15px 0 rgba(76, 175, 80, 0.08)',
    'green-inner' : 'inset 0 2px 4px 0 rgba(76, 175, 80, 0.06)',
    'green-outline' : '0 0 0 3px rgba(76, 175, 80, 0.5)',

    'light-green' : '0 2px 4px 0 rgba(139, 195, 74, 0.10)',
    'light-green-md' : '0 4px 8px 0 rgba(139, 195, 74, 0.12), 0 2px 4px 0 rgba(139, 195, 74, 0.08)',
    'light-green-lg' : '0 15px 30px 0 rgba(139, 195, 74, 0.11), 0 5px 15px 0 rgba(139, 195, 74, 0.08)',
    'light-green-inner' : 'inset 0 2px 4px 0 rgba(139, 195, 74, 0.06)',
    'light-green-outline' : '0 0 0 3px rgba(139, 195, 74, 0.5)',

    'lime' : '0 2px 4px 0 rgba(205, 220, 57, 0.10)',
    'lime-md' : '0 4px 8px 0 rgba(205, 220, 57, 0.12), 0 2px 4px 0 rgba(205, 220, 57, 0.08)',
    'lime-lg' : '0 15px 30px 0 rgba(205, 220, 57, 0.11), 0 5px 15px 0 rgba(205, 220, 57, 0.08)',
    'lime-inner' : 'inset 0 2px 4px 0 rgba(205, 220, 57, 0.06)',
    'lime-outline' : '0 0 0 3px rgba(205, 220, 57, 0.5)',

    'yellow' : '0 2px 4px 0 rgba(255, 235, 59, 0.10)',
    'yellow-md' : '0 4px 8px 0 rgba(255, 235, 59, 0.12), 0 2px 4px 0 rgba(255, 235, 59, 0.08)',
    'yellow-lg' : '0 15px 30px 0 rgba(255, 235, 59, 0.11), 0 5px 15px 0 rgba(255, 235, 59, 0.08)',
    'yellow-inner' : 'inset 0 2px 4px 0 rgba(255, 235, 59, 0.06)',
    'yellow-outline' : '0 0 0 3px rgba(255, 235, 59, 0.5)',

    'amber' : '0 2px 4px 0 rgba(255, 193, 7, 0.10)',
    'amber-md' : '0 4px 8px 0 rgba(255, 193, 7, 0.12), 0 2px 4px 0 rgba(255, 193, 7, 0.08)',
    'amber-lg' : '0 15px 30px 0 rgba(255, 193, 7, 0.11), 0 5px 15px 0 rgba(255, 193, 7, 0.08)',
    'amber-inner' : 'inset 0 2px 4px 0 rgba(255, 193, 7, 0.06)',
    'amber-outline' : '0 0 0 3px rgba(255, 193, 7, 0.5)',

    'orange' : '0 2px 4px 0 rgba(255, 152, 0, 0.10)',
    'orange-md' : '0 4px 8px 0 rgba(255, 152, 0, 0.12), 0 2px 4px 0 rgba(255, 152, 0, 0.08)',
    'orange-lg' : '0 15px 30px 0 rgba(255, 152, 0, 0.11), 0 5px 15px 0 rgba(255, 152, 0, 0.08)',
    'orange-inner' : 'inset 0 2px 4px 0 rgba(255, 152, 0, 0.06)',
    'orange-outline' : '0 0 0 3px rgba(255, 152, 0, 0.5)',

    'deep-orange' : '0 2px 4px 0 rgba(255, 87, 34, 0.10)',
    'deep-orange-md' : '0 4px 8px 0 rgba(255, 87, 34, 0.12), 0 2px 4px 0 rgba(255, 87, 34, 0.08)',
    'deep-orange-lg' : '0 15px 30px 0 rgba(255, 87, 34, 0.11), 0 5px 15px 0 rgba(255, 87, 34, 0.08)',
    'deep-orange-inner' : 'inset 0 2px 4px 0 rgba(255, 87, 34, 0.06)',
    'deep-orange-outline' : '0 0 0 3px rgba(255, 87, 34, 0.5)',

    'brown' : '0 2px 4px 0 rgba(121, 85, 72, 0.10)',
    'brown-md' : '0 4px 8px 0 rgba(121, 85, 72, 0.12), 0 2px 4px 0 rgba(121, 85, 72, 0.08)',
    'brown-lg' : '0 15px 30px 0 rgba(121, 85, 72, 0.11), 0 5px 15px 0 rgba(121, 85, 72, 0.08)',
    'brown-inner' : 'inset 0 2px 4px 0 rgba(121, 85, 72, 0.06)',
    'brown-outline' : '0 0 0 3px rgba(121, 85, 72, 0.5)',

    'grey' : '0 2px 4px 0 rgba(158, 158, 158, 0.10)',
    'grey-md' : '0 4px 8px 0 rgba(158, 158, 158, 0.12), 0 2px 4px 0 rgba(158, 158, 158, 0.08)',
    'grey-lg' : '0 15px 30px 0 rgba(158, 158, 158, 0.11), 0 5px 15px 0 rgba(158, 158, 158, 0.08)',
    'grey-inner' : 'inset 0 2px 4px 0 rgba(158, 158, 158, 0.06)',
    'grey-outline' : '0 0 0 3px rgba(158, 158, 158, 0.5)',

    'blue-grey' : '0 2px 4px 0 rgba(96, 125, 139, 0.10)',
    'blue-grey-md' : '0 4px 8px 0 rgba(96, 125, 139, 0.12), 0 2px 4px 0 rgba(96, 125, 139, 0.08)',
    'blue-grey-lg' : '0 15px 30px 0 rgba(96, 125, 139, 0.11), 0 5px 15px 0 rgba(96, 125, 139, 0.08)',
    'blue-grey-inner' : 'inset 0 2px 4px 0 rgba(96, 125, 139, 0.06)',
    'blue-grey-outline' : '0 0 0 3px rgba(96, 125, 139, 0.5)',

    'black' : '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
    'black-md' : '0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    'black-lg' : '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
    'black-inner' : 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'black-outline' : '0 0 0 3px rgba(0, 0, 0, 0.5)',

    'white' : '0 2px 4px 0 rgba(255, 255, 255, 0.10)',
    'white-md' : '0 4px 8px 0 rgba(255, 255, 255, 0.12), 0 2px 4px 0 rgba(255, 255, 255, 0.08)',
    'white-lg' : '0 15px 30px 0 rgba(255, 255, 255, 0.11), 0 5px 15px 0 rgba(255, 255, 255, 0.08)',
    'white-inner' : 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
    'white-outline' : '0 0 0 3px rgba(255, 255, 255, 0.5)',

    'none': 'none',
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover', 'focus'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
      // center: true,
      // padding: '1rem',
    }),
  ],


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
