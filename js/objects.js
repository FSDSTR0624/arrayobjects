// Display all movies
console.log(movies);

// Show the number of movies we have in the array
console.log(movies.length);

// Search information for specific movie (find)
movie = movies.find(function (movie) {
  return movie.title == "Whiplash";
});
console.log(movie);

// How many movies were shooted after 1980
movies.filter(function (movie) {
  return movie.year_of_shoot > 1980;
});

// Display only the title of each movie (map version)
movies.map(function (movie) {
  console.log(movie.title);
});

// Display only the title of each movie (forEach version)
movies.forEach(function (movie) {
  console.log(movie.title);
});

// Display only the title of each movie sorted by year (without modifying the original array)
[...movies]
  .sort(function (a, b) {
    return a.year_of_shoot - b.year_of_shoot;
  })
  .map(function (movie) {
    console.log(movie.title, movie.year_of_shoot);
  });
