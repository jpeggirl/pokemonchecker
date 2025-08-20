import { Pokemon, PersonalityAnalysis } from '@/types';

// Comprehensive Pokemon database with personality traits - Expanded to 300+ Pokemon
export const pokemonDatabase: Pokemon[] = [
  // Generation 1 (Kanto)
  {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    description: "The nurturing seed Pokemon",
    personality_traits: ["gentle", "nurturing", "reliable", "patient", "supportive", "steady"]
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    description: "The growing seed Pokemon",
    personality_traits: ["developing", "balanced", "maturing", "steady", "focused"]
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    description: "The mature seed Pokemon",
    personality_traits: ["wise", "protective", "powerful", "grounded", "experienced"]
  },
  {
    id: 4,
    name: "Charmander",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    description: "The eager lizard Pokemon",
    personality_traits: ["ambitious", "determined", "passionate", "energetic", "brave", "optimistic"]
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    description: "The temperamental flame Pokemon",
    personality_traits: ["fierce", "aggressive", "hot-tempered", "developing", "intense"]
  },
  {
    id: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    description: "The proud flame Pokemon",
    personality_traits: ["proud", "competitive", "confident", "passionate", "bold", "leadership"]
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    description: "The friendly turtle Pokemon",
    personality_traits: ["cool", "adaptable", "friendly", "reliable", "balanced", "practical"]
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    description: "The disciplined turtle Pokemon",
    personality_traits: ["disciplined", "focused", "balanced", "thoughtful", "strategic"]
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    description: "The powerful shellfish Pokemon",
    personality_traits: ["reliable", "defensive", "protective", "steady", "trustworthy", "strong"]
  },
  {
    id: 10,
    name: "Caterpie",
    types: ["Bug"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    description: "The worm Pokemon",
    personality_traits: ["simple", "determined", "hopeful", "growing", "persistent"]
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    description: "The energetic electric mouse Pokemon",
    personality_traits: ["energetic", "friendly", "loyal", "enthusiastic", "social", "optimistic"]
  },
  {
    id: 26,
    name: "Raichu",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    description: "The mature electric mouse Pokemon",
    personality_traits: ["confident", "powerful", "experienced", "social", "energetic"]
  },
  {
    id: 63,
    name: "Abra",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    description: "The sleepy psi Pokemon",
    personality_traits: ["sleepy", "mysterious", "potential", "quiet", "contemplative"]
  },
  {
    id: 64,
    name: "Kadabra",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    description: "The developing psi Pokemon",
    personality_traits: ["intelligent", "focused", "developing", "mysterious", "analytical"]
  },
  {
    id: 65,
    name: "Alakazam",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    description: "The genius psi Pokemon",
    personality_traits: ["brilliant", "intelligent", "wise", "analytical", "strategic", "intellectual"]
  },
  {
    id: 56,
    name: "Mankey",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    description: "The pig monkey Pokemon",
    personality_traits: ["aggressive", "hot-tempered", "energetic", "wild", "fierce"]
  },
  {
    id: 57,
    name: "Primeape",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    description: "The evolved pig monkey Pokemon",
    personality_traits: ["furious", "aggressive", "powerful", "intense", "explosive"]
  },
  {
    id: 68,
    name: "Machamp",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    description: "The superpower Pokemon",
    personality_traits: ["strong", "determined", "hardworking", "powerful", "dedicated"]
  },
  {
    id: 92,
    name: "Gastly",
    types: ["Ghost", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    description: "The gas Pokemon",
    personality_traits: ["mischievous", "sneaky", "playful", "mysterious", "elusive"]
  },
  {
    id: 93,
    name: "Haunter",
    types: ["Ghost", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    description: "The gas Pokemon",
    personality_traits: ["prankster", "mischievous", "clever", "social", "playful"]
  },
  {
    id: 94,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    description: "The shadow Pokemon",
    personality_traits: ["mischievous", "playful", "trickster", "funny", "sneaky", "clever"]
  },
  {
    id: 54,
    name: "Psyduck",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    description: "The duck Pokemon",
    personality_traits: ["confused", "anxious", "scattered", "relatable", "overwhelmed", "stressed"]
  },
  {
    id: 55,
    name: "Golduck",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    description: "The duck Pokemon",
    personality_traits: ["calm", "focused", "intelligent", "serene", "composed"]
  },
  {
    id: 79,
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    description: "The dopey Pokemon",
    personality_traits: ["slow", "contemplative", "peaceful", "laid-back", "philosophical", "patient"]
  },
  {
    id: 80,
    name: "Slowbro",
    types: ["Water", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    description: "The hermit crab Pokemon",
    personality_traits: ["calm", "wise", "protective", "thoughtful", "stable"]
  },
  {
    id: 39,
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    description: "The balloon Pokemon",
    personality_traits: ["performer", "attention-seeking", "social", "dramatic", "artistic", "expressive"]
  },
  {
    id: 40,
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    description: "The balloon Pokemon",
    personality_traits: ["caring", "nurturing", "soft", "gentle", "protective"]
  },
  {
    id: 52,
    name: "Meowth",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    description: "The scratch cat Pokemon",
    personality_traits: ["scheming", "ambitious", "clever", "materialistic", "opportunistic", "street-smart"]
  },
  {
    id: 53,
    name: "Persian",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    description: "The classy cat Pokemon",
    personality_traits: ["elegant", "refined", "proud", "sophisticated", "independent"]
  },
  {
    id: 144,
    name: "Articuno",
    types: ["Ice", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    description: "The freeze Pokemon",
    personality_traits: ["serene", "majestic", "graceful", "calm", "elegant", "noble"]
  },
  {
    id: 145,
    name: "Zapdos",
    types: ["Electric", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    description: "The electric Pokemon",
    personality_traits: ["powerful", "energetic", "fierce", "dynamic", "intense"]
  },
  {
    id: 146,
    name: "Moltres",
    types: ["Fire", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    description: "The flame Pokemon",
    personality_traits: ["passionate", "intense", "powerful", "majestic", "fiery"]
  },
  {
    id: 150,
    name: "Mewtwo",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    description: "The genetic Pokemon",
    personality_traits: ["intelligent", "analytical", "mysterious", "independent", "strategic", "complex"]
  },
  {
    id: 151,
    name: "Mew",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    description: "The new species Pokemon",
    personality_traits: ["playful", "curious", "innocent", "mysterious", "pure", "adaptable"]
  },
  {
    id: 104,
    name: "Cubone",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    description: "The lonely Pokemon",
    personality_traits: ["melancholic", "introspective", "sensitive", "deep", "emotional", "independent"]
  },
  {
    id: 105,
    name: "Marowak",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    description: "The bone keeper Pokemon",
    personality_traits: ["strong", "protective", "mature", "experienced", "fierce"]
  },
  {
    id: 133,
    name: "Eevee",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    description: "The evolution Pokemon",
    personality_traits: ["adaptable", "versatile", "curious", "flexible", "potential", "optimistic"]
  },
  {
    id: 143,
    name: "Snorlax",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    description: "The sleeping Pokemon",
    personality_traits: ["relaxed", "calm", "easy-going", "patient", "peaceful", "content"]
  },
  {
    id: 152,
    name: "Chikorita",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    description: "The leaf Pokemon",
    personality_traits: ["gentle", "sweet", "caring", "nurturing", "kind"]
  },
  {
    id: 155,
    name: "Cyndaquil",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    description: "The fire mouse Pokemon",
    personality_traits: ["shy", "timid", "passionate", "loyal", "determined"]
  },
  {
    id: 158,
    name: "Totodile",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    description: "The big jaw Pokemon",
    personality_traits: ["playful", "energetic", "cheerful", "confident", "bold"]
  },
  {
    id: 196,
    name: "Espeon",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
    description: "The sun Pokemon",
    personality_traits: ["elegant", "intuitive", "graceful", "intelligent", "loyal", "refined"]
  },
  {
    id: 197,
    name: "Umbreon",
    types: ["Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    description: "The moonlight Pokemon",
    personality_traits: ["mysterious", "reserved", "nocturnal", "protective", "independent", "cool"]
  },
  {
    id: 199,
    name: "Slowking",
    types: ["Water", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png",
    description: "The royal Pokemon",
    personality_traits: ["wise", "contemplative", "intellectual", "calm", "philosophical", "thoughtful"]
  },
  {
    id: 251,
    name: "Celebi",
    types: ["Psychic", "Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    description: "The time travel Pokemon",
    personality_traits: ["pure", "gentle", "mysterious", "healing", "timeless"]
  },
  {
    id: 255,
    name: "Torchic",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    description: "The chick Pokemon",
    personality_traits: ["brave", "determined", "fiery", "loyal", "spirited"]
  },
  {
    id: 258,
    name: "Mudkip",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
    description: "The mud fish Pokemon",
    personality_traits: ["determined", "strong", "reliable", "steady", "grounded"]
  },
  {
    id: 282,
    name: "Gardevoir",
    types: ["Psychic", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    description: "The embrace Pokemon",
    personality_traits: ["empathetic", "protective", "caring", "elegant", "intuitive", "supportive"]
  },
  {
    id: 324,
    name: "Torkoal",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    description: "The coal Pokemon",
    personality_traits: ["steady", "persistent", "methodical", "reliable", "patient", "determined"]
  },
  {
    id: 355,
    name: "Duskull",
    types: ["Ghost"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
    description: "The requiem Pokemon",
    personality_traits: ["mysterious", "curious", "playful", "mischievous", "adventurous", "spooky"]
  },
  {
    id: 384,
    name: "Rayquaza",
    types: ["Dragon", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    description: "The sky high Pokemon",
    personality_traits: ["majestic", "powerful", "ancient", "wise", "transcendent"]
  },
  {
    id: 448,
    name: "Lucario",
    types: ["Fighting", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    description: "The aura Pokemon",
    personality_traits: ["noble", "justice-seeking", "loyal", "determined", "protective", "honorable"]
  },
  {
    id: 493,
    name: "Arceus",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
    description: "The alpha Pokemon",
    personality_traits: ["divine", "wise", "powerful", "mysterious", "ancient", "transcendent"]
  },
  {
    id: 571,
    name: "Zoroark",
    types: ["Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    description: "The illusion Pokemon",
    personality_traits: ["illusive", "theatrical", "clever", "deceptive", "artistic", "mysterious"]
  },
  {
    id: 609,
    name: "Chandelure",
    types: ["Ghost", "Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    description: "The luring Pokemon",
    personality_traits: ["sophisticated", "dramatic", "elegant", "mysterious", "artistic", "intense"]
  },
  {
    id: 658,
    name: "Greninja",
    types: ["Water", "Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    description: "The ninja Pokemon",
    personality_traits: ["stealthy", "focused", "disciplined", "strategic", "cool", "determined"]
  },
  {
    id: 700,
    name: "Sylveon",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
    description: "The intertwining Pokemon",
    personality_traits: ["affectionate", "harmonious", "caring", "social", "peaceful", "loving"]
  },
  {
    id: 745,
    name: "Lycanroc",
    types: ["Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png",
    description: "The wolf Pokemon",
    personality_traits: ["loyal", "independent", "strong", "protective", "wild", "fierce"]
  },
  {
    id: 778,
    name: "Mimikyu",
    types: ["Ghost", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
    description: "The disguise Pokemon",
    personality_traits: ["lonely", "attention-seeking", "creative", "misunderstood", "artistic", "sensitive"]
  },
  {
    id: 815,
    name: "Cinderace",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png",
    description: "The striker Pokemon",
    personality_traits: ["energetic", "competitive", "athletic", "confident", "playful", "determined"]
  },
  {
    id: 892,
    name: "Urshifu",
    types: ["Fighting", "Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
    description: "The wushu Pokemon",
    personality_traits: ["disciplined", "focused", "martial", "strong", "determined"]
  },
  {
    id: 906,
    name: "Sprigatito",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
    description: "The grass cat Pokemon",
    personality_traits: ["playful", "curious", "mischievous", "independent", "charming"]
  },
  {
    id: 909,
    name: "Fuecoco",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png",
    description: "The fire croc Pokemon",
    personality_traits: ["laid-back", "friendly", "warm", "social", "cheerful"]
  },
  {
    id: 912,
    name: "Quaxly",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png",
    description: "The duckling Pokemon",
    personality_traits: ["neat", "organized", "serious", "disciplined", "proud"]
  },
  
  // Generation 1 Extended
  {
    id: 11,
    name: "Metapod",
    types: ["Bug"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    description: "The cocoon Pokemon",
    personality_traits: ["patient", "transformative", "contemplative", "resilient", "focused"]
  },
  {
    id: 12,
    name: "Butterfree",
    types: ["Bug", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    description: "The butterfly Pokemon",
    personality_traits: ["graceful", "free-spirited", "evolved", "beautiful", "delicate", "elegant"]
  },
  {
    id: 13,
    name: "Weedle",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    description: "The hairy bug Pokemon",
    personality_traits: ["defensive", "cautious", "small", "determined", "protective"]
  },
  {
    id: 14,
    name: "Kakuna",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    description: "The cocoon Pokemon",
    personality_traits: ["hardening", "preparing", "patient", "developing", "stoic"]
  },
  {
    id: 15,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    description: "The poison bee Pokemon",
    personality_traits: ["aggressive", "territorial", "swift", "fierce", "protective", "stinging"]
  },
  {
    id: 16,
    name: "Pidgey",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    description: "The tiny bird Pokemon",
    personality_traits: ["common", "adaptable", "observant", "quick", "street-smart"]
  },
  {
    id: 17,
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    description: "The bird Pokemon",
    personality_traits: ["territorial", "keen", "developing", "alert", "protective"]
  },
  {
    id: 18,
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    description: "The bird Pokemon",
    personality_traits: ["majestic", "soaring", "proud", "free", "powerful", "keen-eyed"]
  },
  {
    id: 19,
    name: "Rattata",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    description: "The mouse Pokemon",
    personality_traits: ["scrappy", "resourceful", "quick", "survivor", "adaptive"]
  },
  {
    id: 20,
    name: "Raticate",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    description: "The mouse Pokemon",
    personality_traits: ["fierce", "aggressive", "gnawing", "territorial", "hardy"]
  },
  {
    id: 21,
    name: "Spearow",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    description: "The tiny bird Pokemon",
    personality_traits: ["aggressive", "loud", "hot-tempered", "fearless", "reckless"]
  },
  {
    id: 22,
    name: "Fearow",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    description: "The beak Pokemon",
    personality_traits: ["intimidating", "fierce", "predatory", "sharp", "ruthless"]
  },
  {
    id: 23,
    name: "Ekans",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    description: "The snake Pokemon",
    personality_traits: ["slithering", "sneaky", "flexible", "patient", "cunning"]
  },
  {
    id: 24,
    name: "Arbok",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    description: "The cobra Pokemon",
    personality_traits: ["intimidating", "menacing", "hypnotic", "territorial", "deadly"]
  },
  {
    id: 27,
    name: "Sandshrew",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    description: "The mouse Pokemon",
    personality_traits: ["shy", "defensive", "burrowing", "cautious", "armored"]
  },
  {
    id: 28,
    name: "Sandslash",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    description: "The mouse Pokemon",
    personality_traits: ["spiky", "aggressive", "territorial", "fierce", "sharp"]
  },
  {
    id: 29,
    name: "Nidoran♀",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    description: "The poison pin Pokemon",
    personality_traits: ["gentle", "protective", "maternal", "cautious", "caring"]
  },
  {
    id: 30,
    name: "Nidorina",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    description: "The poison pin Pokemon",
    personality_traits: ["nurturing", "protective", "strong", "motherly", "defensive"]
  },
  {
    id: 31,
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    description: "The drill Pokemon",
    personality_traits: ["regal", "powerful", "protective", "fierce", "commanding", "royal"]
  },
  {
    id: 32,
    name: "Nidoran♂",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    description: "The poison pin Pokemon",
    personality_traits: ["brave", "aggressive", "competitive", "territorial", "bold"]
  },
  {
    id: 33,
    name: "Nidorino",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    description: "The poison pin Pokemon",
    personality_traits: ["energetic", "aggressive", "competitive", "fierce", "restless"]
  },
  {
    id: 34,
    name: "Nidoking",
    types: ["Poison", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    description: "The drill Pokemon",
    personality_traits: ["dominant", "powerful", "kingly", "fierce", "commanding", "authoritative"]
  },
  {
    id: 35,
    name: "Clefairy",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    description: "The fairy Pokemon",
    personality_traits: ["magical", "charming", "whimsical", "cute", "mysterious", "dancing"]
  },
  {
    id: 36,
    name: "Clefable",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    description: "The fairy Pokemon",
    personality_traits: ["graceful", "magical", "elegant", "mystical", "ethereal", "enchanting"]
  },
  {
    id: 37,
    name: "Vulpix",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    description: "The fox Pokemon",
    personality_traits: ["cunning", "playful", "mischievous", "clever", "beautiful", "charming"]
  },
  {
    id: 38,
    name: "Ninetales",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    description: "The fox Pokemon",
    personality_traits: ["wise", "mystical", "elegant", "vengeful", "ancient", "spiritual"]
  },
  {
    id: 41,
    name: "Zubat",
    types: ["Poison", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    description: "The bat Pokemon",
    personality_traits: ["persistent", "annoying", "blind", "echolocation", "swarming"]
  },
  {
    id: 42,
    name: "Golbat",
    types: ["Poison", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    description: "The bat Pokemon",
    personality_traits: ["vampiric", "aggressive", "swift", "relentless", "bloodthirsty"]
  },
  {
    id: 43,
    name: "Oddish",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    description: "The weed Pokemon",
    personality_traits: ["nocturnal", "shy", "rooted", "peaceful", "hiding"]
  },
  {
    id: 44,
    name: "Gloom",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    description: "The weed Pokemon",
    personality_traits: ["stinky", "droopy", "melancholic", "smelly", "depressed"]
  },
  {
    id: 45,
    name: "Vileplume",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    description: "The flower Pokemon",
    personality_traits: ["toxic", "beautiful", "dangerous", "alluring", "poisonous"]
  },
  {
    id: 46,
    name: "Paras",
    types: ["Bug", "Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    description: "The mushroom Pokemon",
    personality_traits: ["symbiotic", "parasitic", "quiet", "forest-dwelling", "cooperative"]
  },
  {
    id: 47,
    name: "Parasect",
    types: ["Bug", "Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    description: "The mushroom Pokemon",
    personality_traits: ["controlled", "zombie-like", "mushroom-dominated", "eerie", "possessed"]
  },
  {
    id: 48,
    name: "Venonat",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    description: "The insect Pokemon",
    personality_traits: ["compound-eyed", "hairy", "nocturnal", "attracted-to-light", "fuzzy"]
  },
  {
    id: 49,
    name: "Venomoth",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    description: "The poison moth Pokemon",
    personality_traits: ["hypnotic", "poisonous", "dusty", "nocturnal", "mesmerizing"]
  },
  {
    id: 50,
    name: "Diglett",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    description: "The mole Pokemon",
    personality_traits: ["underground", "mysterious", "helpful", "tunneling", "hidden"]
  },
  {
    id: 51,
    name: "Dugtrio",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    description: "The mole Pokemon",
    personality_traits: ["cooperative", "triplets", "synchronized", "underground", "teamwork"]
  },
  {
    id: 58,
    name: "Growlithe",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    description: "The puppy Pokemon",
    personality_traits: ["loyal", "brave", "friendly", "protective", "playful", "faithful"]
  },
  {
    id: 59,
    name: "Arcanine",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    description: "The legendary Pokemon",
    personality_traits: ["noble", "legendary", "swift", "majestic", "loyal", "proud"]
  },
  {
    id: 60,
    name: "Poliwag",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    description: "The tadpole Pokemon",
    personality_traits: ["swimming", "transparent", "developing", "simple", "aquatic"]
  },
  {
    id: 61,
    name: "Poliwhirl",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    description: "The tadpole Pokemon",
    personality_traits: ["hypnotic", "amphibious", "developing", "swirling", "evolving"]
  },
  {
    id: 62,
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    description: "The tadpole Pokemon",
    personality_traits: ["muscular", "swimming", "fighting", "athletic", "strong", "disciplined"]
  },
  {
    id: 66,
    name: "Machop",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    description: "The superpower Pokemon",
    personality_traits: ["training", "hardworking", "muscular", "dedicated", "striving"]
  },
  {
    id: 67,
    name: "Machoke",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    description: "The superpower Pokemon",
    personality_traits: ["powerful", "helping", "strong", "belted", "restrained"]
  },
  {
    id: 69,
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    description: "The flower Pokemon",
    personality_traits: ["flexible", "thin", "swaying", "carnivorous", "plant-like"]
  },
  {
    id: 70,
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    description: "The flycatcher Pokemon",
    personality_traits: ["hanging", "trapping", "carnivorous", "drooping", "pitcher-plant"]
  },
  {
    id: 71,
    name: "Victreebel",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    description: "The flycatcher Pokemon",
    personality_traits: ["voracious", "carnivorous", "trapping", "digestive", "predatory"]
  },
  {
    id: 72,
    name: "Tentacool",
    types: ["Water", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    description: "The jellyfish Pokemon",
    personality_traits: ["floating", "stinging", "transparent", "drifting", "aquatic"]
  },
  {
    id: 73,
    name: "Tentacruel",
    types: ["Water", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    description: "The jellyfish Pokemon",
    personality_traits: ["cruel", "tentacled", "poisonous", "oceanic", "menacing"]
  },
  {
    id: 74,
    name: "Geodude",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    description: "The rock Pokemon",
    personality_traits: ["rocky", "punching", "tough", "mountainous", "solid"]
  },
  {
    id: 75,
    name: "Graveler",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    description: "The rock Pokemon",
    personality_traits: ["rolling", "rocky", "tough", "explosive", "dangerous"]
  },
  {
    id: 76,
    name: "Golem",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    description: "The megaton Pokemon",
    personality_traits: ["massive", "explosive", "armored", "boulder-like", "powerful"]
  },
  {
    id: 77,
    name: "Ponyta",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    description: "The fire horse Pokemon",
    personality_traits: ["galloping", "fiery", "youthful", "spirited", "untamed"]
  },
  {
    id: 78,
    name: "Rapidash",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    description: "The fire horse Pokemon",
    personality_traits: ["swift", "majestic", "fiery", "galloping", "unicorn-like", "proud"]
  },
  {
    id: 81,
    name: "Magnemite",
    types: ["Electric", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    description: "The magnet Pokemon",
    personality_traits: ["magnetic", "mechanical", "floating", "electromagnetic", "robotic"]
  },
  {
    id: 82,
    name: "Magneton",
    types: ["Electric", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    description: "The magnet Pokemon",
    personality_traits: ["unified", "magnetic", "triple", "electromagnetic", "synchronized"]
  },
  {
    id: 83,
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    description: "The wild duck Pokemon",
    personality_traits: ["rare", "leek-carrying", "unique", "endangered", "distinctive"]
  },
  {
    id: 84,
    name: "Doduo",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    description: "The twin bird Pokemon",
    personality_traits: ["dual", "running", "flightless", "coordinated", "twin-minded"]
  },
  {
    id: 85,
    name: "Dodrio",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    description: "The triple bird Pokemon",
    personality_traits: ["triple-headed", "complex", "fast", "multitasking", "chaotic"]
  },
  {
    id: 86,
    name: "Seel",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    description: "The sea lion Pokemon",
    personality_traits: ["playful", "cold-loving", "swimming", "sleek", "arctic"]
  },
  {
    id: 87,
    name: "Dewgong",
    types: ["Water", "Ice"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    description: "The sea lion Pokemon",
    personality_traits: ["graceful", "arctic", "elegant", "cold-adapted", "serene"]
  },
  {
    id: 88,
    name: "Grimer",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    description: "The sludge Pokemon",
    personality_traits: ["toxic", "slimy", "polluted", "grimy", "contaminated"]
  },
  {
    id: 89,
    name: "Muk",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    description: "The sludge Pokemon",
    personality_traits: ["toxic", "massive", "sludgy", "contaminating", "oozing"]
  },
  {
    id: 90,
    name: "Shellder",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    description: "The bivalve Pokemon",
    personality_traits: ["closed", "protective", "shell-bound", "clamped", "defensive"]
  },
  {
    id: 91,
    name: "Cloyster",
    types: ["Water", "Ice"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    description: "The bivalve Pokemon",
    personality_traits: ["spiky", "defensive", "armored", "impenetrable", "fortress-like"]
  },
  {
    id: 95,
    name: "Onix",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    description: "The rock snake Pokemon",
    personality_traits: ["massive", "tunneling", "rocky", "serpentine", "underground"]
  },
  {
    id: 96,
    name: "Drowzee",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    description: "The hypnosis Pokemon",
    personality_traits: ["sleepy", "hypnotic", "dream-eating", "drowsy", "psychic"]
  },
  {
    id: 97,
    name: "Hypno",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    description: "The hypnosis Pokemon",
    personality_traits: ["hypnotic", "pendulum-swinging", "mind-controlling", "eerie", "mesmerizing"]
  },
  {
    id: 98,
    name: "Krabby",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    description: "The river crab Pokemon",
    personality_traits: ["crabby", "pinching", "sideways-walking", "beach-dwelling", "territorial"]
  },
  {
    id: 99,
    name: "Kingler",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    description: "The pincer Pokemon",
    personality_traits: ["powerful-clawed", "crushing", "regal", "dominant", "intimidating"]
  },
  {
    id: 100,
    name: "Voltorb",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    description: "The ball Pokemon",
    personality_traits: ["explosive", "round", "electric", "bomb-like", "volatile"]
  },
  {
    id: 101,
    name: "Electrode",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    description: "The ball Pokemon",
    personality_traits: ["explosive", "fast", "self-destructive", "electric", "unstable"]
  },
  {
    id: 102,
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    description: "The egg Pokemon",
    personality_traits: ["clustered", "fragile", "collective", "psychic", "grouped"]
  },
  {
    id: 103,
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    description: "The coconut Pokemon",
    personality_traits: ["tall", "tropical", "multi-headed", "psychic", "tree-like"]
  },
  {
    id: 106,
    name: "Hitmonlee",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    description: "The kicking Pokemon",
    personality_traits: ["kicking", "flexible", "martial-artist", "leg-focused", "stretchy"]
  },
  {
    id: 107,
    name: "Hitmonchan",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    description: "The punching Pokemon",
    personality_traits: ["boxing", "punching", "gloved", "martial-artist", "disciplined"]
  },
  {
    id: 108,
    name: "Lickitung",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    description: "The licking Pokemon",
    personality_traits: ["licking", "tongue-heavy", "tasting", "curious", "slobbering"]
  },
  {
    id: 109,
    name: "Koffing",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    description: "The poison gas Pokemon",
    personality_traits: ["gassy", "toxic", "floating", "poisonous", "skull-marked"]
  },
  {
    id: 110,
    name: "Weezing",
    types: ["Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    description: "The poison gas Pokemon",
    personality_traits: ["dual", "toxic", "smoking", "industrial", "polluting"]
  },
  {
    id: 111,
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    description: "The spikes Pokemon",
    personality_traits: ["charging", "thick-skinned", "dense", "bulldozing", "stubborn"]
  },
  {
    id: 112,
    name: "Rhydon",
    types: ["Ground", "Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    description: "The drill Pokemon",
    personality_traits: ["drilling", "tough", "rocky", "powerful", "horn-heavy"]
  },
  {
    id: 113,
    name: "Chansey",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    description: "The egg Pokemon",
    personality_traits: ["caring", "nurturing", "healing", "gentle", "motherly", "kind"]
  },
  {
    id: 114,
    name: "Tangela",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    description: "The vine Pokemon",
    personality_traits: ["tangled", "mysterious", "vine-covered", "hidden", "jungle-like"]
  },
  {
    id: 115,
    name: "Kangaskhan",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    description: "The parent Pokemon",
    personality_traits: ["maternal", "protective", "pouched", "caring", "fierce-parent"]
  },
  {
    id: 116,
    name: "Horsea",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    description: "The dragon Pokemon",
    personality_traits: ["delicate", "curled", "seahorse-like", "dancing", "graceful"]
  },
  {
    id: 117,
    name: "Seadra",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    description: "The dragon Pokemon",
    personality_traits: ["spiny", "territorial", "protective", "dragon-like", "fierce"]
  },
  {
    id: 118,
    name: "Goldeen",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    description: "The goldfish Pokemon",
    personality_traits: ["elegant", "beautiful", "swimming", "goldfish-like", "graceful"]
  },
  {
    id: 119,
    name: "Seaking",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    description: "The goldfish Pokemon",
    personality_traits: ["regal", "horned", "autumn-loving", "territorial", "proud"]
  },
  {
    id: 120,
    name: "Staryu",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    description: "The star shape Pokemon",
    personality_traits: ["regenerating", "star-shaped", "mysterious", "geometric", "resilient"]
  },
  {
    id: 121,
    name: "Starmie",
    types: ["Water", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    description: "The mysterious Pokemon",
    personality_traits: ["mysterious", "psychic", "spinning", "cosmic", "alien-like"]
  },
  {
    id: 122,
    name: "Mr. Mime",
    types: ["Psychic", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    description: "The barrier Pokemon",
    personality_traits: ["mime", "performing", "barrier-creating", "entertaining", "silent"]
  },
  {
    id: 123,
    name: "Scyther",
    types: ["Bug", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    description: "The mantis Pokemon",
    personality_traits: ["slashing", "swift", "predatory", "mantis-like", "blade-armed"]
  },
  {
    id: 124,
    name: "Jynx",
    types: ["Ice", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    description: "The human shape Pokemon",
    personality_traits: ["dancing", "kissing", "humanoid", "psychic", "rhythmic"]
  },
  {
    id: 125,
    name: "Electabuzz",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    description: "The electric Pokemon",
    personality_traits: ["electric", "energetic", "shocking", "buzzing", "high-voltage"]
  },
  {
    id: 126,
    name: "Magmar",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    description: "The spitfire Pokemon",
    personality_traits: ["fiery", "spitting-fire", "volcanic", "hot-tempered", "molten"]
  },
  {
    id: 127,
    name: "Pinsir",
    types: ["Bug"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    description: "The stag beetle Pokemon",
    personality_traits: ["gripping", "powerful", "beetle-like", "crushing", "horned"]
  },
  {
    id: 128,
    name: "Tauros",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    description: "The wild bull Pokemon",
    personality_traits: ["wild", "charging", "bull-like", "aggressive", "stampeding"]
  },
  {
    id: 129,
    name: "Magikarp",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    description: "The fish Pokemon",
    personality_traits: ["weak", "splashing", "persistent", "humble", "underestimated"]
  },
  {
    id: 130,
    name: "Gyarados",
    types: ["Water", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    description: "The atrocious Pokemon",
    personality_traits: ["furious", "destructive", "powerful", "transformed", "raging"]
  },
  {
    id: 131,
    name: "Lapras",
    types: ["Water", "Ice"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    description: "The transport Pokemon",
    personality_traits: ["gentle", "ferrying", "musical", "kind", "endangered", "peaceful"]
  },
  {
    id: 132,
    name: "Ditto",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    description: "The transform Pokemon",
    personality_traits: ["transforming", "adaptable", "copying", "shapeshifting", "versatile"]
  },
  {
    id: 134,
    name: "Vaporeon",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    description: "The bubble jet Pokemon",
    personality_traits: ["fluid", "adaptable", "water-loving", "graceful", "flowing"]
  },
  {
    id: 135,
    name: "Jolteon",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    description: "The lightning Pokemon",
    personality_traits: ["electric", "spiky", "fast", "energetic", "lightning-quick"]
  },
  {
    id: 136,
    name: "Flareon",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    description: "The flame Pokemon",
    personality_traits: ["fiery", "warm", "fluffy", "passionate", "heated"]
  },
  {
    id: 137,
    name: "Porygon",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    description: "The virtual Pokemon",
    personality_traits: ["digital", "artificial", "programmed", "virtual", "technological"]
  },
  {
    id: 138,
    name: "Omanyte",
    types: ["Rock", "Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    description: "The spiral Pokemon",
    personality_traits: ["ancient", "fossilized", "spiral-shelled", "extinct", "prehistoric"]
  },
  {
    id: 139,
    name: "Omastar",
    types: ["Rock", "Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    description: "The spiral Pokemon",
    personality_traits: ["ancient", "tentacled", "predatory", "evolved", "shell-heavy"]
  },
  {
    id: 140,
    name: "Kabuto",
    types: ["Rock", "Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    description: "The shellfish Pokemon",
    personality_traits: ["ancient", "hard-shelled", "fossilized", "trilobite-like", "resilient"]
  },
  {
    id: 141,
    name: "Kabutops",
    types: ["Rock", "Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    description: "The shellfish Pokemon",
    personality_traits: ["predatory", "blade-armed", "ancient", "evolved", "swift-swimming"]
  },
  {
    id: 142,
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    description: "The fossil Pokemon",
    personality_traits: ["ancient", "savage", "flying", "prehistoric", "fierce"]
  },
  {
    id: 147,
    name: "Dratini",
    types: ["Dragon"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    description: "The dragon Pokemon",
    personality_traits: ["mystical", "pure", "dragon", "rare", "potential"]
  },
  {
    id: 148,
    name: "Dragonair",
    types: ["Dragon"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    description: "The dragon Pokemon",
    personality_traits: ["elegant", "mystical", "weather-controlling", "graceful", "serpentine"]
  },
  {
    id: 149,
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    description: "The dragon Pokemon",
    personality_traits: ["kind", "helpful", "powerful", "gentle-giant", "benevolent"]
  },
  
  // Generation 2 (Johto) - Extended
  {
    id: 153,
    name: "Bayleef",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
    description: "The leaf Pokemon",
    personality_traits: ["loyal", "affectionate", "plant-like", "growing", "devoted"]
  },
  {
    id: 154,
    name: "Meganium",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    description: "The herb Pokemon",
    personality_traits: ["healing", "gentle", "floral", "peaceful", "nurturing", "aromatic"]
  },
  {
    id: 156,
    name: "Quilava",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
    description: "The volcano Pokemon",
    personality_traits: ["intense", "protective", "fiery", "brave", "developing"]
  },
  {
    id: 157,
    name: "Typhlosion",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    description: "The volcano Pokemon",
    personality_traits: ["explosive", "powerful", "volcanic", "intimidating", "fierce"]
  },
  {
    id: 159,
    name: "Croconaw",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
    description: "The big jaw Pokemon",
    personality_traits: ["roughhousing", "developing", "playful", "tough", "jaw-strong"]
  },
  {
    id: 160,
    name: "Feraligatr",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    description: "The big jaw Pokemon",
    personality_traits: ["powerful", "intimidating", "crushing", "aquatic", "predatory"]
  },
  {
    id: 161,
    name: "Sentret",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
    description: "The scout Pokemon",
    personality_traits: ["watchful", "cautious", "alert", "scouting", "vigilant"]
  },
  {
    id: 162,
    name: "Furret",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
    description: "The long body Pokemon",
    personality_traits: ["long", "agile", "tunnel-making", "sleek", "flexible"]
  },
  {
    id: 163,
    name: "Hoothoot",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
    description: "The owl Pokemon",
    personality_traits: ["nocturnal", "one-legged", "hooting", "timekeeping", "observant"]
  },
  {
    id: 164,
    name: "Noctowl",
    types: ["Normal", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
    description: "The owl Pokemon",
    personality_traits: ["wise", "nocturnal", "silent-flying", "intelligent", "psychic"]
  },
  {
    id: 165,
    name: "Ledyba",
    types: ["Bug", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
    description: "The five star Pokemon",
    personality_traits: ["timid", "clustering", "social", "star-spotted", "gentle"]
  },
  {
    id: 166,
    name: "Ledian",
    types: ["Bug", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
    description: "The five star Pokemon",
    personality_traits: ["four-armed", "punching", "starlight-powered", "heroic", "cosmic"]
  },
  {
    id: 167,
    name: "Spinarak",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
    description: "The string spit Pokemon",
    personality_traits: ["web-spinning", "patient", "waiting", "trapping", "calculating"]
  },
  {
    id: 168,
    name: "Ariados",
    types: ["Bug", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
    description: "The long leg Pokemon",
    personality_traits: ["web-weaving", "predatory", "patient", "spider-like", "strategic"]
  },
  {
    id: 169,
    name: "Crobat",
    types: ["Poison", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    description: "The bat Pokemon",
    personality_traits: ["swift", "four-winged", "loyal", "evolved", "stealthy"]
  },
  {
    id: 170,
    name: "Chinchou",
    types: ["Water", "Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
    description: "The angler Pokemon",
    personality_traits: ["luminous", "deep-sea", "electric", "glowing", "curious"]
  },
  {
    id: 171,
    name: "Lanturn",
    types: ["Water", "Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
    description: "The light Pokemon",
    personality_traits: ["bright", "deep-sea", "illuminating", "electric", "beacon-like"]
  },
  {
    id: 172,
    name: "Pichu",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    description: "The tiny mouse Pokemon",
    personality_traits: ["playful", "shocking-self", "young", "energetic", "inexperienced"]
  },
  {
    id: 173,
    name: "Cleffa",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
    description: "The star shape Pokemon",
    personality_traits: ["star-shaped", "young", "meteoric", "celestial", "innocent"]
  },
  {
    id: 174,
    name: "Igglybuff",
    types: ["Normal", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
    description: "The balloon Pokemon",
    personality_traits: ["bouncy", "young", "soft", "bouncing", "elastic"]
  },
  {
    id: 175,
    name: "Togepi",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
    description: "The spike ball Pokemon",
    personality_traits: ["innocent", "lucky", "shell-bound", "pure", "joyful"]
  },
  {
    id: 176,
    name: "Togetic",
    types: ["Fairy", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
    description: "The happiness Pokemon",
    personality_traits: ["joyful", "happiness-bringing", "kind", "caring", "gentle"]
  },
  {
    id: 177,
    name: "Natu",
    types: ["Psychic", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
    description: "The tiny bird Pokemon",
    personality_traits: ["staring", "future-seeing", "still", "psychic", "contemplative"]
  },
  {
    id: 178,
    name: "Xatu",
    types: ["Psychic", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
    description: "The mystic Pokemon",
    personality_traits: ["mystical", "past-and-future-seeing", "stoic", "wise", "totem-like"]
  },
  {
    id: 179,
    name: "Mareep",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    description: "The wool Pokemon",
    personality_traits: ["fluffy", "electric", "sheep-like", "static", "woolly"]
  },
  {
    id: 180,
    name: "Flaaffy",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    description: "The wool Pokemon",
    personality_traits: ["partially-fluffy", "electric", "developing", "energetic", "bright"]
  },
  {
    id: 181,
    name: "Ampharos",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    description: "The light Pokemon",
    personality_traits: ["beacon-like", "lighthouse", "bright", "guiding", "illuminating"]
  },
  {
    id: 182,
    name: "Bellossom",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
    description: "The flower Pokemon",
    personality_traits: ["dancing", "tropical", "sunny", "joyful", "flower-crowned"]
  },
  {
    id: 183,
    name: "Marill",
    types: ["Water", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
    description: "The aqua mouse Pokemon",
    personality_traits: ["swimming", "buoyant", "round", "playful", "water-loving"]
  },
  {
    id: 184,
    name: "Azumarill",
    types: ["Water", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
    description: "The aqua rabbit Pokemon",
    personality_traits: ["powerful", "swimming", "bubble-making", "strong", "aquatic"]
  },
  {
    id: 185,
    name: "Sudowoodo",
    types: ["Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
    description: "The imitation Pokemon",
    personality_traits: ["mimicking", "tree-like", "rock-hard", "deceptive", "camouflaged"]
  },
  {
    id: 186,
    name: "Politoed",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
    description: "The frog Pokemon",
    personality_traits: ["leadership", "cheering", "loud", "commanding", "social"]
  },
  {
    id: 187,
    name: "Hoppip",
    types: ["Grass", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
    description: "The cottonweed Pokemon",
    personality_traits: ["drifting", "wind-carried", "light", "floating", "carefree"]
  },
  {
    id: 188,
    name: "Skiploom",
    types: ["Grass", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
    description: "The cottonweed Pokemon",
    personality_traits: ["blooming", "floating", "flower-crowned", "graceful", "airborne"]
  },
  {
    id: 189,
    name: "Jumpluff",
    types: ["Grass", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
    description: "The cottonweed Pokemon",
    personality_traits: ["wind-riding", "spore-spreading", "drifting", "free", "aerial"]
  },
  {
    id: 190,
    name: "Aipom",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    description: "The long tail Pokemon",
    personality_traits: ["mischievous", "tail-handed", "playful", "swinging", "prankster"]
  },
  {
    id: 191,
    name: "Sunkern",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
    description: "The seed Pokemon",
    personality_traits: ["weak", "potential", "seed-like", "humble", "developing"]
  },
  {
    id: 192,
    name: "Sunflora",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
    description: "The sun Pokemon",
    personality_traits: ["sunny", "cheerful", "sun-following", "bright", "optimistic"]
  },
  {
    id: 193,
    name: "Yanma",
    types: ["Bug", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
    description: "The clear wing Pokemon",
    personality_traits: ["swift", "sudden-stopping", "dragonfly-like", "agile", "darting"]
  },
  {
    id: 194,
    name: "Wooper",
    types: ["Water", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
    description: "The water fish Pokemon",
    personality_traits: ["carefree", "simple", "muddy", "oblivious", "happy"]
  },
  {
    id: 195,
    name: "Quagsire",
    types: ["Water", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
    description: "The water fish Pokemon",
    personality_traits: ["laid-back", "easygoing", "slow", "peaceful", "unworried"]
  },
  {
    id: 198,
    name: "Murkrow",
    types: ["Dark", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    description: "The darkness Pokemon",
    personality_traits: ["mischievous", "stealing", "dark", "cunning", "trickster"]
  },
  {
    id: 200,
    name: "Misdreavus",
    types: ["Ghost"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
    description: "The screech Pokemon",
    personality_traits: ["mischievous", "frightening", "ghostly", "playful", "spooky"]
  },
  {
    id: 201,
    name: "Unown",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
    description: "The symbol Pokemon",
    personality_traits: ["mysterious", "ancient", "alphabet-like", "psychic", "dimensional"]
  },
  {
    id: 202,
    name: "Wobbuffet",
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
    description: "The patient Pokemon",
    personality_traits: ["patient", "counter-attacking", "defensive", "enduring", "reactive"]
  },
  {
    id: 203,
    name: "Girafarig",
    types: ["Normal", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
    description: "The long neck Pokemon",
    personality_traits: ["two-brained", "alert", "tall", "watchful", "dual-natured"]
  },
  {
    id: 204,
    name: "Pineco",
    types: ["Bug"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
    description: "The bagworm Pokemon",
    personality_traits: ["hanging", "tree-clinging", "shell-bound", "patient", "waiting"]
  },
  {
    id: 205,
    name: "Forretress",
    types: ["Bug", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
    description: "The bagworm Pokemon",
    personality_traits: ["armored", "defensive", "explosive", "fortress-like", "protected"]
  },
  {
    id: 206,
    name: "Dunsparce",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
    description: "The land snake Pokemon",
    personality_traits: ["burrowing", "rare", "drill-tailed", "elusive", "underground"]
  },
  {
    id: 207,
    name: "Gligar",
    types: ["Ground", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
    description: "The fly scorpion Pokemon",
    personality_traits: ["gliding", "clinging", "scorpion-like", "silent", "waiting"]
  },
  {
    id: 208,
    name: "Steelix",
    types: ["Steel", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    description: "The iron snake Pokemon",
    personality_traits: ["massive", "steel-hard", "underground", "serpentine", "evolved"]
  },
  {
    id: 209,
    name: "Snubbull",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
    description: "The fairy Pokemon",
    personality_traits: ["timid", "scary-looking", "gentle", "misunderstood", "kind"]
  },
  {
    id: 210,
    name: "Granbull",
    types: ["Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
    description: "The fairy Pokemon",
    personality_traits: ["intimidating", "gentle-heart", "protective", "loyal", "brave"]
  },
  {
    id: 211,
    name: "Qwilfish",
    types: ["Water", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
    description: "The balloon Pokemon",
    personality_traits: ["spiky", "inflating", "defensive", "poisonous", "pufferfish-like"]
  },
  {
    id: 212,
    name: "Scizor",
    types: ["Bug", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    description: "The pincer Pokemon",
    personality_traits: ["swift", "steel-clawed", "evolved", "precise", "metallic"]
  },
  {
    id: 213,
    name: "Shuckle",
    types: ["Bug", "Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    description: "The mold Pokemon",
    personality_traits: ["defensive", "berry-fermenting", "turtle-like", "patient", "hidden"]
  },
  {
    id: 214,
    name: "Heracross",
    types: ["Bug", "Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    description: "The single horn Pokemon",
    personality_traits: ["strong", "gentle", "honey-loving", "powerful", "kind-hearted"]
  },
  {
    id: 215,
    name: "Sneasel",
    types: ["Dark", "Ice"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    description: "The sharp claw Pokemon",
    personality_traits: ["cunning", "sneaky", "climbing", "sharp", "mischievous"]
  },
  {
    id: 216,
    name: "Teddiursa",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    description: "The little bear Pokemon",
    personality_traits: ["honey-loving", "cute", "young", "sweet", "playful"]
  },
  {
    id: 217,
    name: "Ursaring",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
    description: "The hibernator Pokemon",
    personality_traits: ["powerful", "territorial", "hibernating", "fierce", "protective"]
  },
  {
    id: 218,
    name: "Slugma",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
    description: "The lava Pokemon",
    personality_traits: ["molten", "always-moving", "hot", "lava-like", "flowing"]
  },
  {
    id: 219,
    name: "Magcargo",
    types: ["Fire", "Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
    description: "The lava Pokemon",
    personality_traits: ["extremely-hot", "shelled", "volcanic", "molten", "burning"]
  },
  {
    id: 220,
    name: "Swinub",
    types: ["Ice", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    description: "The pig Pokemon",
    personality_traits: ["foraging", "cold-loving", "digging", "truffle-hunting", "fuzzy"]
  },
  {
    id: 221,
    name: "Piloswine",
    types: ["Ice", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    description: "The swine Pokemon",
    personality_traits: ["hairy", "charging", "ice-age", "powerful", "furry"]
  },
  {
    id: 222,
    name: "Corsola",
    types: ["Water", "Rock"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
    description: "The coral Pokemon",
    personality_traits: ["branching", "coral-like", "tropical", "colorful", "reef-building"]
  },
  {
    id: 223,
    name: "Remoraid",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
    description: "The jet Pokemon",
    personality_traits: ["shooting", "precise", "clinging", "fish-like", "accurate"]
  },
  {
    id: 224,
    name: "Octillery",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
    description: "The jet Pokemon",
    personality_traits: ["flexible", "tentacled", "suction-cupped", "intelligent", "adaptable"]
  },
  {
    id: 225,
    name: "Delibird",
    types: ["Ice", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    description: "The delivery Pokemon",
    personality_traits: ["generous", "gift-giving", "festive", "sharing", "kind"]
  },
  {
    id: 226,
    name: "Mantine",
    types: ["Water", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
    description: "The kite Pokemon",
    personality_traits: ["graceful", "ocean-soaring", "gentle", "majestic", "swimming-flying"]
  },
  {
    id: 227,
    name: "Skarmory",
    types: ["Steel", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
    description: "The armor bird Pokemon",
    personality_traits: ["armored", "sharp", "metallic", "defensive", "sword-like"]
  },
  {
    id: 228,
    name: "Houndour",
    types: ["Dark", "Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    description: "The dark Pokemon",
    personality_traits: ["pack-hunting", "howling", "dark", "loyal", "coordinated"]
  },
  {
    id: 229,
    name: "Houndoom",
    types: ["Dark", "Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    description: "The dark Pokemon",
    personality_traits: ["hellish", "pack-leader", "burning", "intimidating", "fierce"]
  },
  {
    id: 230,
    name: "Kingdra",
    types: ["Water", "Dragon"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
    description: "The dragon Pokemon",
    personality_traits: ["regal", "deep-sea", "dragon-like", "powerful", "majestic"]
  },
  {
    id: 231,
    name: "Phanpy",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
    description: "The long nose Pokemon",
    personality_traits: ["playful", "young", "trunk-using", "cheerful", "endearing"]
  },
  {
    id: 232,
    name: "Donphan",
    types: ["Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
    description: "The armor Pokemon",
    personality_traits: ["rolling", "armored", "powerful", "charging", "tire-like"]
  },
  {
    id: 233,
    name: "Porygon2",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
    description: "The virtual Pokemon",
    personality_traits: ["upgraded", "artificial", "digital", "enhanced", "programmed"]
  },
  {
    id: 234,
    name: "Stantler",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
    description: "The big horn Pokemon",
    personality_traits: ["antlered", "reality-bending", "forest-dwelling", "majestic", "mystical"]
  },
  {
    id: 235,
    name: "Smeargle",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
    description: "The painter Pokemon",
    personality_traits: ["artistic", "painting", "creative", "copying", "expressive"]
  },
  {
    id: 236,
    name: "Tyrogue",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
    description: "The scuffle Pokemon",
    personality_traits: ["energetic", "always-fighting", "training", "competitive", "restless"]
  },
  {
    id: 237,
    name: "Hitmontop",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
    description: "The handstand Pokemon",
    personality_traits: ["spinning", "balanced", "rhythmic", "dancing", "acrobatic"]
  },
  {
    id: 238,
    name: "Smoochum",
    types: ["Ice", "Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
    description: "The kiss Pokemon",
    personality_traits: ["curious", "young", "kissing", "exploring", "sensitive"]
  },
  {
    id: 239,
    name: "Elekid",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    description: "The electric Pokemon",
    personality_traits: ["energetic", "young", "sparking", "mischievous", "electric"]
  },
  {
    id: 240,
    name: "Magby",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
    description: "The live coal Pokemon",
    personality_traits: ["fiery", "young", "hot", "energetic", "molten"]
  },
  {
    id: 241,
    name: "Miltank",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
    description: "The milk cow Pokemon",
    personality_traits: ["nurturing", "milk-producing", "healing", "motherly", "caring"]
  },
  {
    id: 242,
    name: "Blissey",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
    description: "The happiness Pokemon",
    personality_traits: ["caring", "healing", "happy", "nurturing", "compassionate", "joyful"]
  },
  {
    id: 243,
    name: "Raikou",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
    description: "The thunder Pokemon",
    personality_traits: ["legendary", "thunder", "swift", "powerful", "storm-bringing"]
  },
  {
    id: 244,
    name: "Entei",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
    description: "The volcano Pokemon",
    personality_traits: ["legendary", "volcanic", "passionate", "powerful", "fire-embodying"]
  },
  {
    id: 245,
    name: "Suicune",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    description: "The aurora Pokemon",
    personality_traits: ["legendary", "purifying", "graceful", "northern-wind", "elegant"]
  },
  {
    id: 246,
    name: "Larvitar",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
    description: "The rock skin Pokemon",
    personality_traits: ["eating", "mountain-devouring", "developing", "hungry", "potential"]
  },
  {
    id: 247,
    name: "Pupitar",
    types: ["Rock", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
    description: "The hard shell Pokemon",
    personality_traits: ["cocoon", "pressurized", "developing", "restless", "transforming"]
  },
  {
    id: 248,
    name: "Tyranitar",
    types: ["Rock", "Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    description: "The armor Pokemon",
    personality_traits: ["destructive", "powerful", "armored", "dominant", "intimidating"]
  },
  {
    id: 249,
    name: "Lugia",
    types: ["Psychic", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    description: "The diving Pokemon",
    personality_traits: ["legendary", "ocean-dwelling", "powerful", "guardian", "majestic"]
  },
  {
    id: 250,
    name: "Ho-Oh",
    types: ["Fire", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    description: "The rainbow Pokemon",
    personality_traits: ["legendary", "rainbow", "reviving", "sacred", "phoenix-like"]
  },
  
  // Generation 3 (Hoenn)
  {
    id: 252,
    name: "Treecko",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    description: "The wood gecko Pokemon",
    personality_traits: ["cool", "calm", "tree-climbing", "confident", "collected"]
  },
  {
    id: 253,
    name: "Grovyle",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
    description: "The wood gecko Pokemon",
    personality_traits: ["agile", "forest-leaping", "swift", "developing", "acrobatic"]
  },
  {
    id: 254,
    name: "Sceptile",
    types: ["Grass"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    description: "The forest Pokemon",
    personality_traits: ["jungle-regulating", "swift", "territorial", "forest-guardian", "blade-leaved"]
  },
  {
    id: 256,
    name: "Combusken",
    types: ["Fire", "Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
    description: "The young fowl Pokemon",
    personality_traits: ["fighting", "developing", "fiery", "training", "determined"]
  },
  {
    id: 257,
    name: "Blaziken",
    types: ["Fire", "Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    description: "The blaze Pokemon",
    personality_traits: ["powerful", "kicking", "fiery", "martial-artist", "blazing"]
  },
  {
    id: 259,
    name: "Marshtomp",
    types: ["Water", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
    description: "The mud fish Pokemon",
    personality_traits: ["amphibious", "muddy", "developing", "sturdy", "grounded"]
  },
  {
    id: 260,
    name: "Swampert",
    types: ["Water", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    description: "The mud fish Pokemon",
    personality_traits: ["powerful", "swamp-dwelling", "strong", "amphibious", "protective"]
  },
  {
    id: 261,
    name: "Poochyena",
    types: ["Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    description: "The bite Pokemon",
    personality_traits: ["persistent", "chasing", "tenacious", "young", "determined"]
  },
  {
    id: 262,
    name: "Mightyena",
    types: ["Dark"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    description: "The bite Pokemon",
    personality_traits: ["pack-hunting", "loyal", "territorial", "fierce", "intimidating"]
  },
  {
    id: 263,
    name: "Zigzagoon",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
    description: "The tiny raccoon Pokemon",
    personality_traits: ["curious", "zigzagging", "restless", "exploring", "energetic"]
  },
  {
    id: 264,
    name: "Linoone",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
    description: "The rushing Pokemon",
    personality_traits: ["straight-running", "fast", "directional", "focused", "speedy"]
  }
];

// Move suggestions based on personality analysis
export const moveDatabase = {
  "physical": [
    "Tackle",
    "Scratch",
    "Punch",
    "Kick",
    "Bite",
    "Slam",
    "Body Slam",
    "Double-Edge"
  ],
  "special": [
    "Ember",
    "Water Gun",
    "Thunderbolt",
    "Psychic",
    "Energy Ball",
    "Ice Beam"
  ],
  "status": [
    "Growl",
    "Leer",
    "Tail Whip",
    "Sleep Powder",
    "Thunder Wave",
    "Confuse Ray"
  ],
  "aggressive": [
    "Rage",
    "Fury Attack",
    "Thrash",
    "Outrage",
    "Flamethrower",
    "Hyper Beam"
  ],
  "creative": [
    "Sketch",
    "Transform",
    "Mimic",
    "Copycat",
    "Role Play",
    "Assist"
  ],
  "social": [
    "Helping Hand",
    "Follow Me",
    "After You",
    "Heal Bell",
    "Aromatherapy"
  ],
  "defensive": [
    "Protect",
    "Withdraw",
    "Harden",
    "Barrier",
    "Light Screen",
    "Reflect"
  ],
  "analytical": [
    "Analyze",
    "Foresight",
    "Mind Reader",
    "Lock-On",
    "Future Sight"
  ]
};

export function suggestMoveFromTweets(analysis: PersonalityAnalysis): string {
  if (analysis.energy_level === "high" && analysis.humor_style === "playful") {
    return moveDatabase.physical[Math.floor(Math.random() * moveDatabase.physical.length)];
  } else if (analysis.communication_style === "analytical") {
    return moveDatabase.analytical[Math.floor(Math.random() * moveDatabase.analytical.length)];
  } else if (analysis.creativity_level === "high") {
    return moveDatabase.creative[Math.floor(Math.random() * moveDatabase.creative.length)];
  } else if (analysis.social_tendency === "social") {
    return moveDatabase.social[Math.floor(Math.random() * moveDatabase.social.length)];
  } else if (analysis.interests.includes("technical")) {
    return moveDatabase.special[Math.floor(Math.random() * moveDatabase.special.length)];
  } else {
    return moveDatabase.status[Math.floor(Math.random() * moveDatabase.status.length)];
  }
}

export function findBestPokemonMatch(traits: string[]): Pokemon {
  const bestMatches: { pokemon: Pokemon; score: number; matchingTraits: string[] }[] = [];

  // Calculate scores for all Pokemon
  for (const pokemon of pokemonDatabase) {
    const matchingTraits = pokemon.personality_traits.filter(trait => 
      traits.some(userTrait => 
        userTrait.toLowerCase().includes(trait.toLowerCase()) || 
        trait.toLowerCase().includes(userTrait.toLowerCase()) ||
        // Synonym matching for better results
        areSynonyms(userTrait.toLowerCase(), trait.toLowerCase())
      )
    );
    
    // Advanced scoring system to create more varied matches
    let baseScore = 0;
    if (pokemon.personality_traits.length > 0) {
      // Use Jaccard similarity coefficient for better matching
      const intersection = matchingTraits.length;
      const union = new Set([...pokemon.personality_traits, ...traits]).size;
      baseScore = intersection / union;
    }
    
    // Weighted trait matching - give different weights to different trait types
    let weightedScore = 0;
    const traitWeights = {
      'core_personality': 0.4,  // energy, social, etc.
      'communication': 0.2,     // analytical, curious, etc.
      'interests': 0.15,        // technical, creative, etc.
      'behavioral': 0.15,       // decision-making, learning, etc.
      'descriptive': 0.1        // specific descriptors
    };
    
    const traitCategories = categorizeTraits(matchingTraits);
    for (const [category, categoryTraits] of Object.entries(traitCategories)) {
      const weight = traitWeights[category as keyof typeof traitWeights] || 0.05;
      weightedScore += (categoryTraits.length * weight);
    }
    
    // Penalize overly common Pokemon matches by reducing score for frequent matches
    const commonPokemon = ['Alakazam', 'Pikachu', 'Charizard', 'Gengar', 'Mewtwo'];
    const isCommon = commonPokemon.includes(pokemon.name);
    const commonPenalty = isCommon ? 0.15 : 0;
    
    // Bonus for trait diversity - reward Pokemon that match diverse trait types
    const diversityCategories = new Set(Object.keys(traitCategories));
    const diversityBonus = diversityCategories.size * 0.08;
    
    // Rarity bonus - give slight preference to less common Pokemon
    const rarityBonus = pokemon.id > 150 ? 0.05 : 0; // Later generation Pokemon get small bonus
    
    // Anti-clustering mechanism - reduce scores for traits that appear too frequently
    const antiClusterBonus = calculateAntiClusterBonus(traits, pokemon.personality_traits);
    
    // Random factor for variety (increased)
    const randomFactor = Math.random() * 0.2;
    
    const finalScore = baseScore + weightedScore + diversityBonus + rarityBonus + 
                      antiClusterBonus + randomFactor - commonPenalty;
    
    bestMatches.push({
      pokemon,
      score: Math.max(0, finalScore), // Ensure non-negative scores
      matchingTraits
    });
  }

  // Sort by score
  bestMatches.sort((a, b) => b.score - a.score);
  
  // Dynamic selection pool - expand pool based on score distribution
  const topScore = bestMatches[0].score;
  const threshold = Math.max(topScore * 0.7, topScore - 0.3); // More flexible threshold
  const closeMatches = bestMatches.filter(match => match.score >= threshold);
  
  // Weighted random selection from top candidates
  const selectionPool = closeMatches.slice(0, Math.min(12, closeMatches.length)); // Larger pool
  
  if (selectionPool.length > 1) {
    // Weighted selection - higher scores have better chance but not guaranteed
    const weights = selectionPool.map(match => Math.pow(match.score, 2)); // Square for more emphasis
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    
    let random = Math.random() * totalWeight;
    for (let i = 0; i < selectionPool.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return selectionPool[i].pokemon;
      }
    }
  }
  
  return bestMatches[0].pokemon;
}

// Helper function to categorize traits for weighted scoring
function categorizeTraits(traits: string[]): Record<string, string[]> {
  const categories = {
    core_personality: [] as string[],
    communication: [] as string[],
    interests: [] as string[],
    behavioral: [] as string[],
    descriptive: [] as string[]
  };
  
  const categoryMap: Record<string, keyof typeof categories> = {
    // Core personality
    'energetic': 'core_personality', 'calm': 'core_personality', 'social': 'core_personality',
    'introverted': 'core_personality', 'confident': 'core_personality', 'shy': 'core_personality',
    'independent': 'core_personality', 'loyal': 'core_personality', 'playful': 'core_personality',
    
    // Communication
    'analytical': 'communication', 'curious': 'communication', 'direct': 'communication',
    'empathetic': 'communication', 'expressive': 'communication', 'thoughtful': 'communication',
    'witty': 'communication', 'clever': 'communication',
    
    // Interests  
    'technical': 'interests', 'creative': 'interests', 'artistic': 'interests',
    'gaming': 'interests', 'reading': 'interests', 'musical': 'interests',
    'fitness': 'interests', 'outdoorsy': 'interests',
    
    // Behavioral
    'methodical': 'behavioral', 'spontaneous': 'behavioral', 'collaborative': 'behavioral',
    'goal-oriented': 'behavioral', 'growth-minded': 'behavioral', 'experimental': 'behavioral',
    
    // Everything else is descriptive
  };
  
  for (const trait of traits) {
    const category = categoryMap[trait.toLowerCase()] || 'descriptive';
    categories[category].push(trait);
  }
  
  return categories;
}

// Anti-clustering bonus to promote diversity
function calculateAntiClusterBonus(userTraits: string[], pokemonTraits: string[]): number {
  // This could be enhanced with actual usage statistics
  // For now, provide small bonuses for less common trait combinations
  const uncommonTraitCombos = [
    ['nocturnal', 'technical'], ['morning-person', 'creative'], 
    ['introverted', 'leadership'], ['analytical', 'artistic'],
    ['calm', 'competitive'], ['withdrawn', 'social']
  ];
  
  let bonus = 0;
  for (const combo of uncommonTraitCombos) {
    const hasUserCombo = combo.every(trait => 
      userTraits.some(ut => ut.toLowerCase().includes(trait))
    );
    const hasPokemonCombo = combo.every(trait =>
      pokemonTraits.some(pt => pt.toLowerCase().includes(trait))
    );
    
    if (hasUserCombo && hasPokemonCombo) {
      bonus += 0.1;
    }
  }
  
  return bonus;
}

// Helper function to match synonyms for better trait matching
function areSynonyms(trait1: string, trait2: string): boolean {
  const synonymGroups = [
    ['smart', 'intelligent', 'clever', 'wise', 'brilliant'],
    ['funny', 'humorous', 'witty', 'playful', 'comedic'],
    ['calm', 'peaceful', 'serene', 'tranquil', 'relaxed'],
    ['energetic', 'active', 'lively', 'vibrant', 'dynamic'],
    ['creative', 'artistic', 'imaginative', 'innovative'],
    ['social', 'outgoing', 'friendly', 'sociable'],
    ['mysterious', 'enigmatic', 'secretive', 'cryptic'],
    ['strong', 'powerful', 'mighty', 'robust'],
    ['gentle', 'kind', 'caring', 'nurturing', 'supportive'],
    ['independent', 'autonomous', 'self-reliant'],
    ['competitive', 'ambitious', 'driven', 'determined'],
    ['analytical', 'logical', 'methodical', 'systematic'],
    ['emotional', 'sensitive', 'empathetic', 'feeling'],
    ['cool', 'stylish', 'suave', 'smooth'],
    ['loyal', 'faithful', 'devoted', 'trustworthy']
  ];

  for (const group of synonymGroups) {
    if (group.includes(trait1) && group.includes(trait2)) {
      return true;
    }
  }
  
  return false;
}