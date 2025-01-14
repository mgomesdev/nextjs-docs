const ArtistService = {
   getArtist: async (name: string) => {
      const artist = new Promise<{ id: number; name: string } | undefined>((resolve) => {
         const artist = [
            {
               id: 1,
               name: "artist.name1",
            },
            {
               id: 2,
               name: "artist.name2",
            },
         ];

         const result = artist.filter((artist) => artist.name === name);

         return setTimeout(() => {
            resolve(result.length > 0 ? result[0] : undefined);
         }, 3000);
      });

      return artist;
   },
};

export default ArtistService;
