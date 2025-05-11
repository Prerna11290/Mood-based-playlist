const playlists = {
  happy: [
    { title: "Happy - Pharrell Williams", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs", artist: "Pharrell Williams" },
    { title: "Can't Stop the Feeling - Justin Timberlake", url: "https://www.youtube.com/watch?v=ru0K8uYEZWw", artist: "Justin Timberlake" },
    { title: "Good Vibrations - The Beach Boys", url: "https://www.youtube.com/watch?v=Eab_beh07HU", artist: "The Beach Boys" }
  ],
  sad: [
    { title: "Someone Like You - Adele", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0", artist: "Adele" },
    { title: "Fix You - Coldplay", url: "https://www.youtube.com/watch?v=k4V3Mo61fJM", artist: "Coldplay" },
    { title: "Hallelujah - Jeff Buckley", url: "https://www.youtube.com/watch?v=y8AWFf7EAc4", artist: "Jeff Buckley" }
  ],
  energetic: [
    { title: "Eye of the Tiger - Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4", artist: "Survivor" },
    { title: "Don't Stop Me Now - Queen", url: "https://www.youtube.com/watch?v=HgzGwKwLmgM", artist: "Queen" },
    { title: "Uptown Funk - Mark Ronson ft. Bruno Mars", url: "https://www.youtube.com/watch?v=OPf0YbXqDm0", artist: "Mark Ronson ft. Bruno Mars" }
  ],
  relaxed: [
    { title: "Weightless - Marconi Union", url: "https://www.youtube.com/watch?v=UfcAVejslrU", artist: "Marconi Union" },
    { title: "Skinny Love - Bon Iver", url: "https://www.youtube.com/watch?v=ssdgFoHLwnk", artist: "Bon Iver" },
    { title: "Come Away With Me - Norah Jones", url: "https://www.youtube.com/watch?v=lbjZPFBD6JU", artist: "Norah Jones" }
  ],
  romantic: [
    { title: "All of Me - John Legend", url: "https://www.youtube.com/watch?v=450p7goxZqg", artist: "John Legend" },
    { title: "Make You Feel My Love - Adele", url: "https://www.youtube.com/watch?v=0put0_a--Ng", artist: "Adele" },
    { title: "Perfect - Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g", artist: "Ed Sheeran" }
  ]
};

const moodSelect = document.getElementById('moodSelect');
const playlistContainer = document.getElementById('playlistContainer');

moodSelect.addEventListener('change', function() {
  const mood = this.value;
  if (!mood) {
    playlistContainer.innerHTML = '<p>Please select a mood to see a playlist.</p>';
    return;
  }
  const songs = playlists[mood];
  playlistContainer.innerHTML = songs.map(song => {
    return `
      <div class="song">
        <a href="${song.url}" target="_blank" rel="noopener noreferrer">${song.title}</a>
        <span class="artist">${song.artist}</span>
      </div>
    `;
  }).join('');
});
