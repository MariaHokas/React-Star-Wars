import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    "@media (max-width: 1026px)": {
      fontSize: 60,
    },
    "@media (max-width: 668px)": {
      fontSize: 30,
    },
  },
  headerImage: {
    maxWidth: "100%",
  },
});
