import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
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
});

export const FilmItem = ({ film }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} alignItems="center">
        <CardMedia
          className="poster-image"
          src={film.Poster}
          component="img"
          onError={(e) => {
            e.currentTarget.src =
              "https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_960_720.jpg";
            e.currentTarget.className = "poster-missing";
          }}
          alt={film.Title}
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {film.Year}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {film.Title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
