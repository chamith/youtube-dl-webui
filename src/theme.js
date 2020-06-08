import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main:'#d32f2f'},
    secondary: {main:'#9e9e9e'},
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
