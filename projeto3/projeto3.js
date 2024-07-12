var Stat = /** @class */ (function () {
    function Stat(base_stat, stat) {
        this.base_stat = base_stat;
        this.stat = stat;
    }
    return Stat;
}());
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, base_experience, height, weight, legendary, firstAppearance, abilities, stats) {
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
    return Pokemon;
}());
var ditto = new Pokemon(132, 'Ditto', 101, 3, 40, false, '1996-06-01', ['limber', 'imposter'], [
    new Stat(48, 'hp'),
    new Stat(48, 'attack'),
    new Stat(48, 'defense')
]);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var Filme = /** @class */ (function () {
    function Filme(adult, backdrop_path, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
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
    return Filme;
}());
var guardiansOfTheGalaxyVol3 = new Filme(false, "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg", 447365, "en", "Guardians of the Galaxy Vol. 3", "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", 4145.055, "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", "2023-05-03", "Guardians of the Galaxy Vol. 3", false, 8.1, 3154);
console.log(guardiansOfTheGalaxyVol3);
var Pais = /** @class */ (function () {
    function Pais(name, independent, unMember, capital, region, subregion, languages, latlng, borders, area, population, timezones, flags) {
        this.name = name;
        this.independent = independent;
        this.unMember = unMember;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.latlng = latlng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
    return Pais;
}());
var brazil = new Pais({
    common: "Brazil",
    official: "Federative Republic of Brazil",
}, true, true, "Brasília", "Americas", "South America", ["Portuguese"], [-10, -55], ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"], 8515767, 212559409, ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"], {
    png: "https://flagcdn.com/w320/br.png",
    svg: "https://flagcdn.com/br.svg",
});
console.log(brazil);
