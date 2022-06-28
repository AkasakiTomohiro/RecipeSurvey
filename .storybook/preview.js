import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { ThemeProvider as MUThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from 'notistack';
import { lightTheme } from '../src/theme/LightTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MUThemeProvider theme={lightTheme}>
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter>
          <SnackbarProvider maxSnack={3}>
            <Story />
          </SnackbarProvider>
        </MemoryRouter>
      </ThemeProvider>
    </MUThemeProvider>
  ),
];
