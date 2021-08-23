import React from "react";
import { Button, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { options } from "../../Service";
import { useStyles } from "./styles";

export const Sorting = ({
  filmsPerPage,
  handleChangeItemsPerPage,
  requestSort,
  changeClass,
  changeIcon,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Typography className={classes.typeArea} variant="body1">
          Showing:
        </Typography>
        {/* Added ability to select how many items are shown in one page 
        So that the user can use UI with a fewer clicks if desired */}
        <Select
          value={filmsPerPage}
          onChange={handleChangeItemsPerPage}
          IconComponent={ExpandMoreIcon}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {" "}
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Typography className={classes.typeArea} variant="body1">
          sort:
        </Typography>
        {/* Icon are bit different than in layout. 
        Could find right ones from UI materials*/}
        <Button
          type="button"
          onClick={() => requestSort("Year")}
          className={changeClass("Year")}
          startIcon={changeIcon("Year")}
        >
          Year
        </Button>
        <Button
          type="button"
          onClick={() => requestSort("Title")}
          className={changeClass("Title")}
          startIcon={changeIcon("Title")}
        >
          Title
        </Button>
      </Grid>
    </>
  );
};
