import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    textTransform: "uppercase",
    fontSize: 16,
    fontFamily: ["BenchNine", "sans-serif"].join(","),
    marginBottom: 25,
  },
  typeArea: {
    padding: "6px 16px",
    marginRight: 1,
  },
});
