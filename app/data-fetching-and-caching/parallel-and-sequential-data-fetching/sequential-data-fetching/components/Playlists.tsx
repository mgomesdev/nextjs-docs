import PlaylistService from "../services/PlaylistService";

interface PlaylistsProps {
   artistID: number;
}

async function Playlists({ artistID }: PlaylistsProps) {
   const playlists = await PlaylistService.getArtistPlaylists(artistID);

   return (
      <ul>
         {playlists.map((playlist) => (
            <li key={playlist.id}>{playlist.name}</li>
         ))}
      </ul>
   );
}

export default Playlists;
