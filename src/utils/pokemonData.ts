import { Pokemon, PersonalityAnalysis } from '@/types';

// Comprehensive Pokemon database with personality traits
export const pokemonDatabase: Pokemon[] = [
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
    
    // Improved scoring system to reduce bias toward specific Pokemon
    let baseScore = 0;
    if (pokemon.personality_traits.length > 0) {
      baseScore = matchingTraits.length / pokemon.personality_traits.length;
    }
    
    // Add trait diversity bonus to encourage varied matches
    const uniqueTraitTypes = new Set(matchingTraits.map(trait => {
      // Categorize traits to encourage diversity
      if (['intelligent', 'analytical', 'logical', 'wise', 'brilliant'].includes(trait.toLowerCase())) return 'intellectual';
      if (['energetic', 'active', 'enthusiastic', 'dynamic'].includes(trait.toLowerCase())) return 'energetic';
      if (['social', 'friendly', 'caring', 'supportive'].includes(trait.toLowerCase())) return 'social';
      if (['creative', 'artistic', 'imaginative'].includes(trait.toLowerCase())) return 'creative';
      if (['mysterious', 'enigmatic', 'secretive'].includes(trait.toLowerCase())) return 'mysterious';
      return trait.toLowerCase();
    }));
    
    const diversityBonus = uniqueTraitTypes.size * 0.05; // Bonus for trait diversity
    
    // Exact match bonus (reduced to prevent over-weighting)
    const exactMatches = matchingTraits.filter(trait =>
      traits.some(userTrait => userTrait.toLowerCase() === trait.toLowerCase())
    ).length;
    const exactMatchBonus = exactMatches * 0.08;
    
    // Add small random factor to prevent deterministic results
    const randomFactor = Math.random() * 0.1;
    
    const finalScore = baseScore + diversityBonus + exactMatchBonus + randomFactor;
    
    bestMatches.push({
      pokemon,
      score: finalScore,
      matchingTraits
    });
  }

  // Sort by score
  bestMatches.sort((a, b) => b.score - a.score);
  
  // Expand the pool of potential matches to increase variety
  const topScore = bestMatches[0].score;
  const closeMatches = bestMatches.filter(match => match.score >= topScore - 0.15);
  
  // If we have multiple good matches, randomly select from top candidates
  if (closeMatches.length > 1) {
    const randomIndex = Math.floor(Math.random() * Math.min(closeMatches.length, 5));
    return closeMatches[randomIndex].pokemon;
  }
  
  return bestMatches[0].pokemon;
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