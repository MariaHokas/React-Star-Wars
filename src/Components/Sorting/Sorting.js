import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { options } from "../../Service";
import { useStyles } from "./styles";

export const Sorting = ({
  filmsPerPage,
  handleChangeItemsPerPage,
  requestSort,
  sortConfig,
}) => {
  const classes = useStyles();
  const sorting = { ...sortConfig };

  const changeIconYear = () => {
    if (sorting.key === "Year" && sorting.direction === "ascending")
      return <ExpandMoreIcon />;
    else if (sorting.key === "Year" && sorting.direction === "descending")
      return <ExpandLessIcon />;
    else {
      return <UnfoldMoreIcon />;
    }
  };

  const changeIconTitle = () => {
    if (sorting.key === "Title" && sorting.direction === "ascending")
      return <ExpandMoreIcon />;
    else if (sorting.key === "Title" && sorting.direction === "descending")
      return <ExpandLessIcon />;
    else return <UnfoldMoreIcon />;
  };

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Typography className={classes.typeArea} variant="p">
          Showing:
        </Typography>
        {/* Added ability to select how many items are shown in one page 
        So that the user can use UI with a fewer clicks if desired */}
        <Select
          value={filmsPerPage}
          onChange={handleChangeItemsPerPage}
          IconComponent={ExpandMoreIcon}
        >
          {options.map((option) => (
            <MenuItem value={option.value}> {option.label}</MenuItem>
          ))}
        </Select>
        <Typography className={classes.typeArea} variant="p">
          sort:
        </Typography>
        {/* Icon are bit different than in layout. 
        Could find right ones from UI materials*/}
        <Button
          type="button"
          onClick={() => requestSort("Year")}
          className={classes.iconButton}
          startIcon={changeIconYear()}
        >
          Year
        </Button>
        <Button
          type="button"
          onClick={() => requestSort("Title")}
          className={classes.iconButton}
          startIcon={changeIconTitle()}
          focusVisible
        >
          Title
        </Button>
      </Grid>
    </>
  );
};
