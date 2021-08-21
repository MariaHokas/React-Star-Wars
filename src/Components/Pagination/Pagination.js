import React from "react";
import { Button } from "@material-ui/core";

export const Pagination = ({
  goToPreviousPage,
  page,
  pageCount,
  goToNextPage,
}) => {
  return (
    <>
      <Button type="button" onClick={goToPreviousPage} disabled={page === 0}>
        previous
      </Button>
      {/* Added "page count" and "page" word  
      so the user can clearly see what the number means. */}
      <p>
        Page: {page + 1} of {pageCount}
      </p>
      <Button
        type="button"
        onClick={goToNextPage}
        disabled={page === pageCount - 1}
      >
        next
      </Button>
    </>
  );
};