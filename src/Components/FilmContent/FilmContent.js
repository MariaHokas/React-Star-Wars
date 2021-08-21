import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import { FilmItem } from "../FilmItem";
import { useSortableData } from "../../Helpers";

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
  const classes = useStyles();
  const { items, requestSort, sortConfig } = useSortableData(data.films);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <Container className={classes.root}>
      <Button
        type="button"
        onClick={() => requestSort("Year")}
        className={getClassNamesFor("Year")}
      >
        Year
      </Button>

      <Button
        color="primary"
        type="button"
        onClick={() => requestSort("Title")}
        className={getClassNamesFor("Title")}
      >
        Title
      </Button>
      <div>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} md={6} lg={3} zeroMinWidth key={item.imdbID}>
              <FilmItem film={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};
