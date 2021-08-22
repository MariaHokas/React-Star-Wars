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
      <Card
        className={classes.root}
        justifyContent="center"
        alignItems="center"
      >
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
