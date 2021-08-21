import React from "react";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { options } from "../../Service";

export const Sorting = ({
  filmsPerPage,
  handleChangeItemsPerPage,
  requestSort,
  getClassNamesFor,
}) => {
  return (
    <>
      {/* Added ability to select how many items are shown in one page 
        So that the user can use UI with a fewer clicks if desired */}
      <Select value={filmsPerPage} onChange={handleChangeItemsPerPage}>
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
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
    </>
  );
};
