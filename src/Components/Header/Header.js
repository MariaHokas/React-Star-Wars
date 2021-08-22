import React from "react";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.container}>
        <img
          className={classes.headerImage}
          src="https://frantic.s3-eu-west-1.amazonaws.com/star-wars-header.jpg"
          alt="Star-wars-header"
        />
        <Typography variant="h1" className={classes.headerText} component="h1">
          star wars films
        </Typography>
      </header>
    </>
  );
};
