import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontFamily: ["BenchNine", "sans-serif"].join(","),
    marginTop: 30,
    position: "sticky",
  },
  typeArea: {
    padding: "6px 16px",
    marginRight: 1,
  },
  button: {
    textTransform: "initial",
    fontSize: 16,
    color: "white",
    background: "Black",
  },
});
