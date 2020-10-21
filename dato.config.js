const ellipsize = require("ellipsize");

module.exports = (dato, root) => {
  root.directory("data/", (dir) => {
    dir.createDataFile("home.toml", "toml", {
      sitename: dato.homepage.siteName,
      tagline: dato.homepage.tagLine,
      description: dato.homepage.description,
    });
  });

  root.directory("content/season", (dir) => {
    dato.seasons.forEach((season) => {
      dir.createPost(`${season.slug}.md`, "yaml", {
        frontmatter: {
          title: season.name,
          imageurl: season.image.url({ w: 400 }),
          thumbnailurl: season.image.url({ h: 300 }),
          bgurl: season.image.url({ w: 5 }),
          weight: season.position,
          excerpt: ellipsize(season.overview, 150),
        },
        content: season.overview,
      });
    });
  });

  root.directory("content/episode", (dir) => {
    dato.episodes
      .sort((a, b) => {
        return b.id - a.id;
      })
      .forEach((episode, i) => {
        dir.createPost(`${episode.slug}.md`, "toml", {
          frontmatter: {
            title: episode.title,
            episodenumber: episode.episodeNumber,
            paletteurl:
              episode.image &&
              episode.image.url({ auto: "enhance", palette: "json" }),
            imageurl: episode.image && episode.image.url(),
            thumbnailurl:
              episode.image &&
              episode.image.url({
                w: 500,
                h: 280,
                fit: "crop",
                auto: "enhance",
                fm: "jpg",
              }),
            date: episode.firstAired.toMap(),
            weight: i,
            rating: episode.rating,
            director: episode.director,
            category: episode.season.name,
          },
          content: episode.description,
        });
      });
  });

  root.directory("content/character", (dir) => {
    dato.characters.forEach((character) => {
      dir.createPost(`${character.slug}.md`, "toml", {
        frontmatter: {
          title: character.name,
          actorname: character.actorName,
          episodes: character.episode,
          weight: character.position,
          thumbnailurl: character.image.url({
            fit: "crop",
            crop: "faces",
            w: 200,
            h: 200,
          }),
          imageurl: character.image.url({ w: 500, fm: "jpg" }),
        },
        content: character.description,
      });
    });
  });

  root.addToDataFile("config.toml", "toml", { title: dato.homepage.siteName });
};
