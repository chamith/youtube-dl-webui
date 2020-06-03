import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
