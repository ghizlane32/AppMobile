import {DefaultTheme} from 'react-native-paper';
export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    text: '#000',
    placeholder: '#000',
  },
};

export const API_URL =
  'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc';
