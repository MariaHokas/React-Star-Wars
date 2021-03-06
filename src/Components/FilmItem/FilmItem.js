import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

export const FilmItem = ({ film }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.posterImageBackCard}>
          <CardMedia
            className={classes.posterImage}
            src={film.Poster}
            component="img"
            onError={(e) => {
              e.currentTarget.src =
                "https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_960_720.jpg";
              e.currentTarget.className = classes.posterMissingImage;
            }}
            alt={film.Title}
          />
        </CardContent>
        <CardContent className={classes.posterTextposterTextBack}>
          <Typography variant="h6" color="textSecondary" component="p">
            {film.Year}
          </Typography>
          <Typography variant="h5" component="h2">
            {film.Title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
