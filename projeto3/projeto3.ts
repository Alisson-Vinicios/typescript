class Stat {
    base_stat: number;
    stat: string;

    constructor(base_stat:number, stat: string){
        this.base_stat = base_stat;
        this.stat = stat;
    }
}

class Pokemon{
    
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats: Stat[];
    
    constructor(
        id: number,
        name: string,
        base_experience: number,
        height: number,
        weight: number,
        legendary: boolean,
        firstAppearance: string,
        abilities: string[],
        stats: Stat[]
    ){
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
}

const ditto = new Pokemon(
    132,
    'Ditto',
    101,
    3,
    40,
    false,
    '1996-06-01',
    ['limber', 'imposter'],
    [
        new Stat(48, 'hp'),
        new Stat(48, 'attack'),
        new Stat(48, 'defense')
    ]
);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

class Filme {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    
    constructor(
        adult: boolean,
        backdrop_path: string,
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number,

    ){
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

const guardiansOfTheGalaxyVol3 = new Filme(
    false,
    "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    447365,
    "en",
    "Guardians of the Galaxy Vol. 3",
    "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    4145.055,
    "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "2023-05-03",
    "Guardians of the Galaxy Vol. 3",
    false,
    8.1,
    3154
  );
  
  console.log(guardiansOfTheGalaxyVol3);

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  
  interface Name{
    common: string;
    official: string;
  }

  interface Flags{
    png: string;
    svg: string;
  }

  interface Pais{
    name: Name;
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: Flags;
  }

  class Pais implements Pais{
    constructor(
        public name: Name,
        public independent: boolean,
        public unMember: boolean,
        public capital: string,
        public region: string,
        public subregion: string,
        public languages: string[],
        public latlng: number[],
        public borders: string[],
        public area: number,
        public population: number,
        public timezones: string[],
        public flags: Flags
    ){}
  }

  const brazil = new Pais(
    {
      common: "Brazil",
      official: "Federative Republic of Brazil",
    },
    true,
    true,
    "Brasília",
    "Americas",
    "South America",
    ["Portuguese"],
    [-10, -55],
    ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
    8515767,
    212559409,
    ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
    {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg",
    }
  );
  
  console.log(brazil);