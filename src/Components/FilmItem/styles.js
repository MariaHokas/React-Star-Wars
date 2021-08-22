import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    "& .MuiCardMedia-img": {
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
