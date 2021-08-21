export const fetchFilms = async () => {
  const response = await fetch(
    "https://frantic.s3-eu-west-1.amazonaws.com/films.json"
  );
  return response.json();
};

export const options = [
  {
    label: 10,
    value: 10,
  },
  {
    label: 50,
    value: 50,
  },
  {
    label: 100,
    value: 100,
  },
];
