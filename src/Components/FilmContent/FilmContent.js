import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Button } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FilmItem } from "../FilmItem";
import { useSortableData } from "../../Helpers";
import { Sorting } from "../Sorting";
import { Pagination } from "../Pagination";
import { useStyles } from "./styles";

export const FilmContent = ({ data }) => {
  const classes = useStyles();
  const { items, requestSort, sortConfig } = useSortableData(data.films);
  const [page, setPage] = useState(0);
  const [filmsPerPage, setFilmsPerPage] = useState(10);
  const config = { ...sortConfig };
  const pageCount = Math.ceil(items.length / filmsPerPage);

  useEffect(() => {
    setPage(0);
  }, [sortConfig]);

  const changeIcon = (name) => {
    if (config.key === name)
      return config.direction === "ascending" ? (
        <ExpandMoreIcon />
      ) : (
        <ExpandLessIcon />
      );
    else return <UnfoldMoreIcon />;
  };

  const changeClass = (name) =>
    config.key === name ? classes.iconButtonInUse : classes.iconButton;

  const handleChangeItemsPerPage = (event) => {
    setFilmsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  const goToTopOfThePage = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container className={classes.root}>
        <Sorting
          filmsPerPage={filmsPerPage}
          handleChangeItemsPerPage={handleChangeItemsPerPage}
          requestSort={requestSort}
          sortConfig={sortConfig}
          changeIcon={changeIcon}
          changeClass={changeClass}
        />
        <Grid container spacing={3}>
          {items
            .slice(page * filmsPerPage, page * filmsPerPage + filmsPerPage)
            .map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.imdbID}>
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
        </Grid>
      </Container>
      {/* Added "go to top" button so the user doesn't have to scroll up by themself */}
      <Button
        className={classes.goToTopOfThePage}
        onClick={goToTopOfThePage}
        startIcon={<NavigationIcon />}
      >
        Back up
      </Button>
    </>
  );
};
