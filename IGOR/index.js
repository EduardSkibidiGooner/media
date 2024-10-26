const Webamp = window.Webamp;
const webamp = new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "IGOR'S THEME",
      },
      url: "https://igor.prigoana.lol/01.%20IGOR'S%20THEME.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "EARFQUAKE",
      },
      url: "https://igor.prigoana.lol/02.%20EARFQUAKE.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "I THINK",
      },
      url: "https://igor.prigoana.lol/03.%20I%20THINK.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "BOYFRIEND",
      },
      url: "https://igor.prigoana.lol/04.%20BOYFRIEND.mp3",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
      },
      url: "https://igor.prigoana.lol/05.%20EXACTLY%20WHAT%20YOU%20RUN%20FROM%20YOU%20END%20UP%20CHASING.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "RUNNING OUT OF TIME",
      },
      url: "https://igor.prigoana.lol/06.%20RUNNING%20OUT%20OF%20TIME.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "NEW MAGIC WAND",
      },
      url: "https://igor.prigoana.lol/07.%20NEW%20MAGIC%20WAND.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "A BOY IS A GUN",
      },
      url: "https://igor.prigoana.lol/08.%20A%20BOY%20IS%20A%20GUN.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "PUPPET",
      },
      url: "https://igor.prigoana.lol/09.%20PUPPET.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "WHAT'S GOOD",
      },
      url: "https://igor.prigoana.lol/10.%20WHAT'S%20GOOD.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "GONE, GONE / THANK YOU",
      },
      url: "https://igor.prigoana.lol/11.%20GONE,%20GONE%20THANK%20YOU.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "I DONT LOVE YOU ANYMORE",
      },
      url: "https://igor.prigoana.lol/12.%20I%20DON'T%20LOVE%20YOU%20ANY%20MORE.flac"
    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "ARE WE STILL FRIENDS?",
      },
      url: "https://igor.prigoana.lol/13.%20ARE%20WE%20STILL%20FRIENDS.flac",

    }
  ],
  initialSkin: {
    url: "https://prigoana.lol/skins/PurpleGlow.wsz",
  },
  availableSkins: [
    {
      url: "https://prigoana.lol/skins/Axon.wsz",
      name: "Axon",
    },
    {
      url: "https://prigoana.lol/skins/m-lo_black.wsz",
      name: "Black",
    },
    {
      url: "https://prigoana.lol/skins/PurpleGlow.wsz",
      name: "Purple Glow",
    },
    {
      url: "https://prigoana.lol/skins/purpleplayer.wsz",
      name: "Purple",
    },
    {
      url: "https://prigoana.lol/skins/TSWNN.wsz",
      name: "TSWNN",
    },
    {
      url: "https://prigoana.lol/skins/Vaporwave.wsz",
      name: "Vaporwave",
    },
  ],
  __butterchurnOptions: {
    importButterchurn: () => Promise.resolve(window.butterchurn),
    getPresets: () => {
      const presets = window.butterchurnPresets.getPresets();
      return Object.keys(presets).map((name) => {
        return {
          name,
          butterchurnPresetObject: presets[name],
        };
      });
    },
    butterchurnOpen: true,
  },
});
webamp.renderWhenReady(document.getElementById("app"));
