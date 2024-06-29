import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/677px-Tata_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?20141228172036',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1024px-Godrej_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/de/thumb/3/31/Bosch-logotype.svg/768px-Bosch-logotype.svg.png?20190123165734',
  'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Thermax_logo.svg/800px-Thermax_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BHEL_logo.svg/750px-BHEL_logo.svg.png',
];

const darkLogos = whiteLogos
const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Trusted by the best companies
      </Typography>
      <Grid container spacing={5}justifyContent="center" sx={{ mt: 4,opacity: 1, }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}