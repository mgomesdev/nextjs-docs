import PlaylistService from "../services/PlaylistService";

interface PlaylistsProps {
   id: number;
}

export const Playlists: React.FC<PlaylistsProps> = async ({ id }) => {
   const playlists = await PlaylistService.getArtistPlaylists(id);

   return (
      <ul>
         {playlists.map((playlist) => (
            <li key={playlist.id}>{playlist.name}</li>
         ))}
      </ul>
   );
};
