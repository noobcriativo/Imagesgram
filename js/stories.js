document.addEventListener('DOMContentLoaded', () => {
  const storiesContainer = document.querySelector('.story-container');
  const numberOfStories = 20;
  const usernames = [
    "viajante_feliz", "arte_em_cores", "gato_aventureiro", "livros_magicos", "chef_em_casa",
    "tech_inovador", "moda_estilosa", "cafe_com_leitura", "esportes_radicais", "natureza_viva",
    "musica_boa", "fotografia_amadora", "filmes_cult", "games_on", "astronomia_fascinante",
    "jardinagem_urbana", "receitas_deliciosas", "humor_diario", "ciencia_divertida", "historias_antigas"
  ];

  for (let i = 0; i < numberOfStories; i++) {
    const storyDiv = document.createElement('div');
    storyDiv.classList.add('story');

    const avatarImg = document.createElement('img');
    // Gere URLs de avatar de teste (você pode usar serviços como Placekitten ou Unsplash)
    avatarImg.src = 'img/cover.png';
    avatarImg.alt = `Story de ${usernames[i % usernames.length]}`;

    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('username');
    usernameSpan.textContent = usernames[i % usernames.length];

    storyDiv.appendChild(avatarImg);
    storyDiv.appendChild(usernameSpan);
    storiesContainer.appendChild(storyDiv);
  }
});
