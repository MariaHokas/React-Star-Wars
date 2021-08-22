import React from "react";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import { useStyles } from "./styles";

export const Pagination = ({
  goToPreviousPage,
  page,
  pageCount,
  goToNextPage,
}) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Used the same icons when sorted so the icons stays the same in whole application */}
      <Button
        className={classes.button}
        type="button"
        variant="contained"
        onClick={goToPreviousPage}
        disabled={page === 0}
        startIcon={<ChevronLeftOutlinedIcon />}
      >
        Previous page
      </Button>
      {/* Added "page count" and "page" word  
      so the user can clearly see what the number means. */}

      <Typography variant="h6" color="textSecondary" component="p">
        Page: {page + 1} of {pageCount}
      </Typography>

      <Button
        className={classes.button}
        type="button"
        variant="contained"
        onClick={goToNextPage}
        disabled={page === pageCount - 1}
        endIcon={<ChevronRightOutlinedIcon />}
      >
        Next page
      </Button>
    </Grid>
  );
};
