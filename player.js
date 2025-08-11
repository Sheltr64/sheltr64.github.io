const playlist = [
  { src: "/audio/Sugar_Star_Planetarium.mp3", title: "Sugar Star Planetarium – Pedro Silva" },
  { src: "/audio/Poems_in_the_Fog.mp3", title: "Poems in the Fog – Pedro Silva" },
  { src: "/audio/Remember_to_Be_Patient.mp3", title: "Remember to be Patient – Pedro Silva" }
];

let currentTrack = 0;
const audio = document.getElementById("bg-music");
const nowPlaying = document.getElementById("now-playing");

function loadTrack(index) {
  audio.src = playlist[index].src;
  nowPlaying.textContent = "Now Playing: " + playlist[index].title;
  audio.play();
}

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
});

loadTrack(currentTrack);