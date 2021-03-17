import { extendTheme } from '@chakra-ui/react';

const colors = {
  // primary: {
  //   100: '#E5FCF1',
  //   200: '#27EF96',
  //   300: '#10DE82',
  //   400: '#0EBE6F',
  //   500: '#0CA25F',
  //   600: '#0A864F',
  //   700: '#086F42',
  //   800: '#075C37',
  //   900: '#064C2E',
  // },
  /** Reddit pallette */
  // primary: {
  //   100: '#FFECE6',
  //   200: '#FFD9CC',
  //   300: '#FFC7B3',
  //   400: '#FFB499',
  //   500: 'FFA180',
  //   600: '#FF8E67',
  //   700: '#FF7B4D',
  //   800: '#FF6934',
  //   900: 'FF561A',
  // },
  /** Dark blue */
  // primary: {
  // 100: '#CDCDD7',
  // 200: '#B5B3C3',
  // 300: '#9C9AAF',
  // 400: '#83819B',
  // 500: '#6A6887',
  // 600: '#514F73',
  // 700: '#39355F',
  // 800: '#201C4B',
  // 900: '#070337',
  // },
  /** Black */
  primary: {
    100: '#6F6F6F',
    200: '#676767',
    300: '#5F5F5F',
    400: '#575757',
    500: '#4E4E4E',
    600: '#464646',
    700: '#3E3E3E',
    800: '#353535',
    900: '#2D2D2D',
  },
};

const customTheme = extendTheme({
  colors,
  fonts: { body: 'Rubik', heading: 'Rubik', mono: 'Rubik' },
});

export default customTheme;
