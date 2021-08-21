import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { FilmItem } from "../FilmItem";

const useStyles = makeStyles({
  root: {
    "& .MuiCardMedia-img": {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  typeArea: {
    height: 50,
  },
  media: {
    minHeight: 300,
  },
});

export const FilmContent = ({ data }) => {
  console.log("täm,ä on data", data);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div>
        <Grid container spacing={3}>
          {data.films.map((item) => (
            <Grid item xs={12} md={6} lg={3} zeroMinWidth key={item.imdbID}>
              <FilmItem film={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};
