class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

class Playlist {
  constructor(playlistName) {
    this.name = playlistName;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track)
  }

  overallRating() {
    let sum = 0;
    let avg = 0;

    this.tracks.forEach((track) => {
      sum += track.rating;
    })

    avg = sum / this.tracks.length;
    return avg;
  }

  totalDuration() {
    let total = 0;
    this.tracks.forEach((track) => {
      total += track.length;
    })
    return total;
  }
}

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist) {
    this.playlists.push(playlist)
    }
  }

  const l1 = new Library('l1', 'mil');

  const p1 = new Playlist('p1')

  const t1 = new Track('t1', 3, 234);
  const t2 = new Track('t2', 4, 242);

  p1.addTrack(t1);
  p1.addTrack(t2);
  console.log(p1.overallRating());
  console.log(p1.totalDuration());

  l1.addPlaylist(p1);
