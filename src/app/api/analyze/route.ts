import { NextRequest, NextResponse } from 'next/server';
import { getTwitterData } from '@/utils/twitterApi';
import { findBestPokemonMatch, suggestMoveFromTweets } from '@/utils/pokemonData';
import { PersonalityAnalysis } from '@/types';

async function analyzePersonality(tweets: string[]): Promise<PersonalityAnalysis> {
  if (tweets.length === 0) {
    return {
      humor_style: "mysterious",
      communication_style: "quiet",
      interests: ["mystery"],
      energy_level: "medium",
      social_tendency: "balanced",
      creativity_level: "moderate"
    };
  }

  const combinedText = tweets.join(' ').toLowerCase();
  const emojiCount = (combinedText.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu) || []).length;
  const exclamationCount = (combinedText.match(/!/g) || []).length;
  const questionCount = (combinedText.match(/\?/g) || []).length;
  const capsCount = (combinedText.match(/[A-Z]{2,}/g) || []).length;
  
  let humor_style = "dry";
  let communication_style = "casual";
  const interests: string[] = [];
  let energy_level = "medium";
  let social_tendency = "balanced";
  let creativity_level = "moderate";

  // Humor analysis
  if (combinedText.includes('😂') || combinedText.includes('lol') || combinedText.includes('haha') || combinedText.includes('lmao')) {
    humor_style = "playful";
  }
  if (combinedText.includes('savage') || combinedText.includes('roast') || combinedText.includes('burn')) {
    humor_style = "sarcastic";
  }

  // Energy level analysis
  if (exclamationCount > tweets.length * 0.5 || capsCount > 3 || emojiCount > tweets.length) {
    energy_level = "high";
    communication_style = "enthusiastic";
  }
  if (combinedText.includes('tired') || combinedText.includes('sleepy') || combinedText.includes('nap') || 
      combinedText.includes('exhausted') || combinedText.includes('😴')) {
    energy_level = "low";
  }

  // Social tendency analysis
  if (combinedText.includes('thanks') || combinedText.includes('love you') || combinedText.includes('appreciate') ||
      combinedText.includes('grateful') || combinedText.includes('❤️')) {
    social_tendency = "social";
  }
  if (combinedText.includes('alone') || combinedText.includes('introvert') || combinedText.includes('quiet')) {
    social_tendency = "introverted";
  }

  // Interest analysis
  if (combinedText.includes('art') || combinedText.includes('create') || combinedText.includes('design') ||
      combinedText.includes('draw') || combinedText.includes('music') || combinedText.includes('🎨')) {
    creativity_level = "high";
    interests.push("creative");
  }
  if (combinedText.includes('code') || combinedText.includes('programming') || combinedText.includes('debug') ||
      combinedText.includes('software') || combinedText.includes('tech') || combinedText.includes('api')) {
    interests.push("technical");
    communication_style = "analytical";
  }
  if (combinedText.includes('coffee') || combinedText.includes('☕') || combinedText.includes('espresso')) {
    interests.push("coffee");
    if (energy_level === "medium") energy_level = "high";
  }
  if (combinedText.includes('game') || combinedText.includes('gaming') || combinedText.includes('play') ||
      combinedText.includes('🎮')) {
    interests.push("gaming");
  }
  if (combinedText.includes('book') || combinedText.includes('read') || combinedText.includes('novel') ||
      combinedText.includes('📚')) {
    interests.push("reading");
  }
  if (combinedText.includes('travel') || combinedText.includes('trip') || combinedText.includes('vacation') ||
      combinedText.includes('✈️')) {
    interests.push("travel");
    social_tendency = "adventurous";
  }
  if (combinedText.includes('workout') || combinedText.includes('gym') || combinedText.includes('fitness') ||
      combinedText.includes('💪')) {
    interests.push("fitness");
    energy_level = "high";
  }

  // Communication style refinement
  if (questionCount > tweets.length * 0.3) {
    communication_style = "curious";
  }
  if (combinedText.includes('analyze') || combinedText.includes('think') || combinedText.includes('logic') ||
      combinedText.includes('because') || combinedText.includes('therefore')) {
    communication_style = "analytical";
  }

  return {
    humor_style,
    communication_style,
    interests,
    energy_level,
    social_tendency,
    creativity_level
  };
}

function generateTraitsFromAnalysis(analysis: PersonalityAnalysis): string[] {
  const traits: string[] = [];

  // Energy level traits
  switch (analysis.energy_level) {
    case "high":
      traits.push("energetic", "enthusiastic", "active");
      break;
    case "low":
      traits.push("relaxed", "calm", "peaceful", "sleepy");
      break;
    default:
      traits.push("balanced", "steady");
  }

  // Humor style traits
  switch (analysis.humor_style) {
    case "playful":
      traits.push("playful", "funny", "cheerful");
      break;
    case "sarcastic":
      traits.push("witty", "sharp", "clever");
      break;
    case "mysterious":
      traits.push("mysterious", "enigmatic");
      break;
    default:
      traits.push("witty", "clever");
  }

  // Communication style traits
  switch (analysis.communication_style) {
    case "enthusiastic":
      traits.push("social", "outgoing", "expressive");
      break;
    case "analytical":
      traits.push("intelligent", "logical", "thoughtful");
      break;
    case "curious":
      traits.push("curious", "inquisitive");
      break;
    case "quiet":
      traits.push("quiet", "reserved");
      break;
    default:
      traits.push("friendly", "approachable");
  }

  // Social tendency traits
  switch (analysis.social_tendency) {
    case "social":
      traits.push("social", "caring", "supportive");
      break;
    case "introverted":
      traits.push("introspective", "independent");
      break;
    case "adventurous":
      traits.push("adventurous", "bold");
      break;
  }

  // Creativity traits
  if (analysis.creativity_level === "high") {
    traits.push("creative", "artistic", "imaginative");
  }

  // Interest-based traits
  analysis.interests.forEach(interest => {
    switch (interest) {
      case "technical":
        traits.push("analytical", "methodical", "logical");
        break;
      case "coffee":
        traits.push("energetic", "passionate");
        break;
      case "gaming":
        traits.push("competitive", "strategic");
        break;
      case "reading":
        traits.push("intellectual", "wise");
        break;
      case "travel":
        traits.push("adventurous", "curious");
        break;
      case "fitness":
        traits.push("determined", "strong");
        break;
      case "creative":
        traits.push("artistic", "expressive");
        break;
    }
  });

  // Remove duplicates and return
  return [...new Set(traits)];
}

function generateFunExplanation(pokemon: Pokemon, analysis: PersonalityAnalysis): string {
  const reasons = [];
  
  // Specific Pokemon explanations
  const pokemonExplanations: { [key: string]: (analysis: PersonalityAnalysis) => string[] } = {
    "Mewtwo": (analysis) => analysis.communication_style === "analytical" ? 
      ["Your analytical mind rivals Mewtwo's psychic powers!"] : 
      ["Like Mewtwo, you're intellectually curious and independent!"],
    
    "Pikachu": (analysis) => analysis.energy_level === "high" ? 
      ["You're as energetic as Pikachu's electric bolts!"] : 
      ["Your friendly and loyal nature matches Pikachu perfectly!"],
    
    "Snorlax": (analysis) => analysis.energy_level === "low" ? 
      ["Like Snorlax, you appreciate the finer things in life... like naps!"] : 
      ["Your calm and peaceful demeanor is pure Snorlax energy!"],
    
    "Psyduck": (analysis) => analysis.interests.includes("technical") ? 
      ["Your debugging struggles are as legendary as Psyduck's headaches!"] : 
      ["Like Psyduck, you're charmingly relatable in your confusion!"],
    
    "Gengar": (analysis) => analysis.humor_style === "playful" ? 
      ["Your mischievous humor matches Gengar's playful spirit!"] : 
      ["Like Gengar, you have a sneaky clever side that's irresistible!"],
    
    "Charizard": (analysis) => analysis.energy_level === "high" ? 
      ["Your passionate energy burns as bright as Charizard's flames!"] : 
      ["Your confident leadership style is classic Charizard!"],
    
    "Eevee": (analysis) => analysis.interests.length > 2 ? 
      ["Like Eevee, you have endless potential and adaptability!"] : 
      ["Your versatile nature embodies Eevee's evolutionary possibilities!"],
    
    "Gardevoir": (analysis) => analysis.social_tendency === "social" ? 
      ["Your empathetic and caring nature mirrors Gardevoir's protective instincts!"] : 
      ["Like Gardevoir, you have an elegant and intuitive approach to life!"],
    
    "Lucario": (analysis) => analysis.interests.includes("fitness") ? 
      ["Your disciplined spirit matches Lucario's noble warrior heart!"] : 
      ["Like Lucario, you have a strong sense of justice and loyalty!"],
    
    "Umbreon": (analysis) => analysis.social_tendency === "introverted" ? 
      ["Your mysterious and independent nature is pure Umbreon energy!"] : 
      ["Like Umbreon, you're cool and reserved with hidden depths!"],
    
    "Sylveon": (analysis) => analysis.social_tendency === "social" ? 
      ["Your harmonious and caring personality shines like Sylveon's ribbons!"] : 
      ["Like Sylveon, you bring peace and affection to those around you!"],
    
    "Zoroark": (analysis) => analysis.creativity_level === "high" ? 
      ["Your creative illusions and artistic flair match Zoroark's theatrical nature!"] : 
      ["Like Zoroark, you're cleverly deceptive in the most charming way!"],
    
    "Mimikyu": (analysis) => analysis.interests.includes("creative") ? 
      ["Your artistic creativity mirrors Mimikyu's costume-making skills!"] : 
      ["Like Mimikyu, you're misunderstood but incredibly endearing!"],
    
    "Slowking": (analysis) => analysis.communication_style === "analytical" ? 
      ["Your contemplative wisdom rivals Slowking's royal intellect!"] : 
      ["Like Slowking, you approach life with thoughtful deliberation!"],
    
    "Greninja": (analysis) => analysis.social_tendency === "introverted" ? 
      ["Your focused and stealthy approach to goals is pure Greninja style!"] : 
      ["Like Greninja, you're strategic and disciplined in everything you do!"]
  };

  // Try to find specific explanation
  if (pokemonExplanations[pokemon.name]) {
    reasons.push(...pokemonExplanations[pokemon.name](analysis));
  }

  // Add general personality connections
  if (analysis.humor_style === "playful" && !reasons.some(r => r.includes("humor") || r.includes("playful"))) {
    reasons.push("Your playful sense of humor adds sparkle to any conversation!");
  }
  
  if (analysis.creativity_level === "high" && !reasons.some(r => r.includes("creative") || r.includes("artistic"))) {
    reasons.push("Your creative spirit shines through in everything you do!");
  }
  
  if (analysis.interests.includes("gaming") && !reasons.some(r => r.includes("game"))) {
    reasons.push("Your strategic gaming mindset shows in your approach to challenges!");
  }

  // Fallback if no specific reasons found
  if (reasons.length === 0) {
    const traits = pokemon.personality_traits;
    if (traits.includes("mysterious")) {
      reasons.push(`Like ${pokemon.name}, you have an intriguing mysterious aura!`);
    } else if (traits.includes("energetic")) {
      reasons.push(`Your energy levels match ${pokemon.name}'s vibrant spirit!`);
    } else if (traits.includes("intelligent")) {
      reasons.push(`Your sharp intellect aligns perfectly with ${pokemon.name}!`);
    } else {
      reasons.push(`Your personality perfectly embodies ${pokemon.name}'s essence!`);
    }
  }

  return reasons.join(" ");
}

function generateMoveExplanation(move: string, analysis: PersonalityAnalysis): string {
  const moveExplanations: { [key: string]: string } = {
    // Physical moves
    "Tackle": "Your direct, straightforward approach to problems!",
    "Scratch": "You're not afraid to get your hands dirty!",
    "Punch": "You face challenges head-on with determination!",
    "Kick": "Your energetic personality packs a punch!",
    "Bite": "You have a fierce competitive streak!",
    "Slam": "Your powerful presence makes an impact!",
    "Body Slam": "You throw yourself fully into everything you do!",
    "Double-Edge": "You're willing to take risks for big rewards!",
    
    // Special moves
    "Ember": "Your creative sparks ignite new ideas!",
    "Water Gun": "You have a refreshing perspective on things!",
    "Thunderbolt": "Your brilliant insights strike like lightning!",
    "Psychic": "Your analytical mind moves mountains!",
    "Energy Ball": "You channel your passion into creative energy!",
    "Ice Beam": "Your cool logic cuts through confusion!",
    
    // Status moves
    "Growl": "You're not afraid to speak your mind!",
    "Leer": "Your sharp observations see through facades!",
    "Tail Whip": "You charm your way through social situations!",
    "Sleep Powder": "You help others find peace and rest!",
    "Thunder Wave": "You electrify conversations with wit!",
    "Confuse Ray": "Your mysterious aura keeps people guessing!",
    
    // Aggressive moves
    "Rage": "When passionate, your intensity is unstoppable!",
    "Fury Attack": "You tackle problems with relentless energy!",
    "Thrash": "Your enthusiasm sometimes gets overwhelming!",
    "Outrage": "When you care deeply, you fight fiercely!",
    "Flamethrower": "Your passion burns bright and inspires others!",
    "Hyper Beam": "When you focus, your impact is devastating!",
    
    // Creative moves
    "Sketch": "You capture and recreate the world around you!",
    "Transform": "You adapt brilliantly to any situation!",
    "Mimic": "You learn by observing and improving!",
    "Copycat": "You're inspired by others' best qualities!",
    "Role Play": "You understand people by walking in their shoes!",
    "Assist": "You creatively combine different approaches!",
    
    // Social moves
    "Helping Hand": "You boost others to achieve their best!",
    "Follow Me": "You draw attention to help your team succeed!",
    "After You": "You're always putting others first!",
    "Heal Bell": "Your presence soothes and heals conflicts!",
    "Aromatherapy": "You create a calming atmosphere wherever you go!",
    
    // Defensive moves
    "Protect": "You shield others from harm with wisdom!",
    "Withdraw": "You know when to step back and regroup!",
    "Harden": "You strengthen your resolve under pressure!",
    "Barrier": "You create safe spaces for meaningful dialogue!",
    "Light Screen": "You deflect negativity with positivity!",
    "Reflect": "You turn criticism into constructive growth!",
    
    // Analytical moves
    "Analyze": "You break down complex problems systematically!",
    "Foresight": "You anticipate challenges before they arise!",
    "Mind Reader": "You understand what others need before they ask!",
    "Lock-On": "Once you set a goal, you never miss!",
    "Future Sight": "You plan strategically for long-term success!"
  };

  return moveExplanations[move] || `${move} perfectly captures your unique approach to life!`;
}

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    const { user, tweets } = await getTwitterData(username);
    
    const tweetTexts = tweets.map(tweet => tweet.text);
    const analysis = await analyzePersonality(tweetTexts);
    
    const traits = generateTraitsFromAnalysis(analysis);
    const pokemon = findBestPokemonMatch(traits);
    
    const reasoning = generateFunExplanation(pokemon, analysis);
    
    // Generate move suggestion based on tweet analysis
    const suggestedMove = suggestMoveFromTweets(analysis);
    const moveExplanation = generateMoveExplanation(suggestedMove, analysis);
    
    const funFacts = [
      `Based on ${tweets.length} recent tweets`,
      `Energy level: ${analysis.energy_level}`,
      `Communication style: ${analysis.communication_style}`,
      `Humor style: ${analysis.humor_style}`,
      `Signature move: ${suggestedMove}`
    ];

    const result = {
      user,
      pokemon,
      reasoning,
      fun_facts: funFacts,
      suggested_move: suggestedMove,
      move_explanation: moveExplanation,
      analysis
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}