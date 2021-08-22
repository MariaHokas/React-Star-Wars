import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import { IconButton } from "@material-ui/core";

import { FilmItem } from "../FilmItem";
import { useSortableData } from "../../Helpers";
import { Sorting } from "../Sorting";
import { Pagination } from "../Pagination";

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

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  const handleChangeItemsPerPage = (event) => {
    setFilmsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const goToTopOfThePage = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className={classes.root}>
      <Sorting
        filmsPerPage={filmsPerPage}
        handleChangeItemsPerPage={handleChangeItemsPerPage}
        requestSort={requestSort}
        getClassNamesFor={getClassNamesFor}
        sortConfig={sortConfig}
      />
      <Grid container spacing={3}>
        {items
          .slice(page * filmsPerPage, page * filmsPerPage + filmsPerPage)
          .map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              zeroMinWidth
              key={item.imdbID}
            >
              <FilmItem film={item} />
            </Grid>
          ))}
      </Grid>
      <Grid>
        <Pagination
          goToPreviousPage={goToPreviousPage}
          page={page}
          pageCount={pageCount}
          goToNextPage={goToNextPage}
        />
        {/* Added "go to top" button so the user doesn't have to scroll up by themself */}
        <IconButton>
          <ArrowUpwardOutlinedIcon
            color="primary"
            onClick={goToTopOfThePage}
            className={classes.root}
          />
        </IconButton>
      </Grid>
    </Container>
  );
};
