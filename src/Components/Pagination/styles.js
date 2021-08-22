import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontFamily: ["BenchNine", "sans-serif"].join(","),
    marginTop: 30,
    position: "sticky",
  },
  button: {
    textTransform: "initial",
    fontSize: 16,
    color: "white",
    width: 130,
    background: "Black",
    "&:hover": {
      color: "white",
      background: "#23395d",
    },
  },
});
