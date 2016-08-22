DatoCli.configure do
  directory "content/season" do
    dato.seasons.each do |season|
      file "#{season.slug}.md" do
        frontmatter :toml,
          title: season.name,
          image_url: season.image.file.to_url

        content season.overview
      end
    end
  end

  directory "content/episode" do
    dato.episodes.each do |episode|
      file "#{episode.slug}.md" do
        frontmatter :toml,
          title: episode.title,
          episode_number: episode.episode_number,
          image_url: episode.image && episode.image.file.to_url

        content episode.description
      end
    end
  end

  directory "content/character" do
    dato.characters.each do |character|
      file "#{character.slug}.md" do
        frontmatter :toml,
          title: character.name,
          actor_name: character.actor_name,
          image_url: character.image && character.image.file.to_url

        content character.description
      end
    end
  end

  merge "config.toml", :toml,
    title: dato.homepage.site_name
end


