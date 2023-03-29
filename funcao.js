const dollyPartonSongs = [
    { title: "Jolene", popularity: 5 },
    { title: "9 to 5", popularity: 4 },
    { title: "I Will Always Love You", popularity: 5 },
    { title: "Coat of Many Colors", popularity: 3 },
    { title: "Islands in the Stream", popularity: 4 },
  ];
  
  const getPopularSongs = (songs, minPopularity) => {
    const popularSongs = songs.filter(song => song.popularity >= minPopularity);
    return popularSongs.map(song => song.title);
  };
  
  console.log(getPopularSongs(dollyPartonSongs, 4));
  
 