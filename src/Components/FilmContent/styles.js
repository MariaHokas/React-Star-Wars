import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "80%",
    maxWidth: 1200,
    "@media (max-width: 668px)": {
      width: "100%",
    },
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
  goToTopOfThePage: {
    fontSize: 20,
    position: "static",
    bottom: 0,
    right: 0,
    color: "#f00c93",
    float: "right",
  },
});
