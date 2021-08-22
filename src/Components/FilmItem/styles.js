import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    "& .MuiCardMedia-img": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    textAlign: "center",
    height: 500,
    boxShadow: "none",
  },
  typeArea: {
    height: 50,
  },
  media: {
    minHeight: 300,
  },
  posterImageBackCard: {
    display: "block",
    maxHeight: 380,
    minHeight: 380,
    "@media (max-width: 420px)": {
      display: "inline",
      maxHeight: "auto",
      minHeight: "auto",
    },
  },
  posterImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "auto !important",
    maxHeight: 380,
  },
  posterMissingImage: {
    opacity: "0.3",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "auto !important",
    maxHeight: 380,
  },
  posterTextBack: {
    display: "block",
    "@media (max-width: 420px)": {
      display: "100%",
    },
  },
});
