import React, { useState } from "react";
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
  const [page, setPage] = useState(0);
  const [filmsPerPage, setFilmsPerPage] = useState(10);
  const pageCount = Math.ceil(items.length / filmsPerPage);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  function goToNextPage() {
    setPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setPage((page) => page - 1);
  }

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
      <Grid container spacing={3}>
        {items
          .slice(page * filmsPerPage, page * filmsPerPage + filmsPerPage)
          .map((item) => (
            <Grid item xs={12} md={6} lg={3} zeroMinWidth key={item.imdbID}>
              <FilmItem film={item} />
            </Grid>
          ))}
      </Grid>
      <Grid>
        <Button type="button" onClick={goToPreviousPage} disabled={page === 0}>
          previous
        </Button>
        {/* Added "page count" and "page" word  
      so the user can clearly see what the number means. */}
        <p>
          Page: {page + 1} of {pageCount}
        </p>
        <Button type="button" onClick={goToNextPage} disabled={page === 9}>
          next
        </Button>
      </Grid>
    </Container>
  );
};
