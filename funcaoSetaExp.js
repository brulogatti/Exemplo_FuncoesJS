const musicas = [
    "Jolene",
    "I Will Always Love You",
    "Coat of Many Colors",
    "9 to 5",
    "Islands in the Stream",
  ];
  
  const tituloEmMaiusculas = (musica) => musica.toUpperCase();
  
  const musicasEmMaiusculas = musicas.map(tituloEmMaiusculas);
  
  console.log(musicasEmMaiusculas);