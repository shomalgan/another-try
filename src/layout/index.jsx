import React from 'react';
import { Helmet } from 'react-helmet';
import { createUseStyles, useTheme, ThemeProvider } from 'react-jss';
import config from '../../data/SiteConfig';

const useStyles = createUseStyles((theme) => ({
  bg: {},
  label: {},
}));

const MainLayout = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.bg}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    </ThemeProvider>
  );
};
export default MainLayout;
