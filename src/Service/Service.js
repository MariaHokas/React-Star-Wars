export const fetchFilms = async () => {
  const response = await fetch(
    "https://frantic.s3-eu-west-1.amazonaws.com/films.json"
  );
  return response.json();
};
