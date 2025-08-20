import { NextRequest, NextResponse } from 'next/server';
import { getTwitterData } from '@/utils/twitterApi';
import { findBestPokemonMatch, suggestMoveFromTweets } from '@/utils/pokemonData';
import { PersonalityAnalysis, Pokemon } from '@/types';

async function analyzePersonality(tweets: string[]): Promise<PersonalityAnalysis> {
  if (tweets.length === 0) {
    // Generate random defaults to avoid everyone getting the same result
    return {
      humor_style: ["mysterious", "quirky", "observational"][Math.floor(Math.random() * 3)],
      communication_style: ["quiet", "thoughtful", "reserved"][Math.floor(Math.random() * 3)],
      interests: ["mystery", "philosophy", "observation"],
      energy_level: "medium",
      social_tendency: "balanced",
      creativity_level: "moderate",
      emotional_expression: "subtle",
      time_preference: "flexible",
      decision_making: "contemplative",
      learning_style: "reflective",
      stress_response: "withdrawing",
      motivation_type: "internal"
    };
  }

  const combinedText = tweets.join(' ').toLowerCase();
  const tweetCount = tweets.length;
  
  // Advanced text analysis metrics
  const emojiCount = (combinedText.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu) || []).length;
  const exclamationCount = (combinedText.match(/!/g) || []).length;
  const questionCount = (combinedText.match(/\?/g) || []).length;
  const capsCount = (combinedText.match(/[A-Z]{2,}/g) || []).length;
  const mentionCount = (combinedText.match(/@\w+/g) || []).length;
  const hashtagCount = (combinedText.match(/#\w+/g) || []).length;
  const linkCount = (combinedText.match(/https?:\/\/\S+/g) || []).length;
  const wordCount = combinedText.split(' ').length;
  const avgWordsPerTweet = wordCount / tweetCount;
  
  // Time analysis (check for time-related keywords)
  const morningKeywords = ['morning', 'early', 'sunrise', 'coffee', '☕', 'breakfast'];
  const nightKeywords = ['night', 'late', 'midnight', '🌙', 'evening'];
  const morningScore = morningKeywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
  const nightScore = nightKeywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
  
  // Initialize analysis object
  const analysis: PersonalityAnalysis = {
    humor_style: "dry",
    communication_style: "casual", 
    interests: [],
    energy_level: "medium",
    social_tendency: "balanced",
    creativity_level: "moderate",
    emotional_expression: "balanced",
    time_preference: "flexible",
    decision_making: "balanced",
    learning_style: "mixed",
    stress_response: "adaptive",
    motivation_type: "mixed"
  };

  // Humor style analysis (more sophisticated)
  const humorKeywords = {
    playful: ['lol', 'haha', 'lmao', '😂', '😄', '🤣', 'funny', 'hilarious'],
    sarcastic: ['savage', 'roast', 'burn', 'shade', 'really?', 'sure', 'okay'],
    witty: ['clever', 'smart', 'pun', 'irony', 'ironic'],
    wholesome: ['wholesome', 'pure', 'sweet', 'adorable', '🥺', '❤️'],
    dark: ['dark humor', 'cursed', 'chaos', 'suffer', 'pain'],
    self_deprecating: ['why am i', 'i suck', 'i fail', 'i cant', 'my life']
  };

  let maxHumorScore = 0;
  for (const [style, keywords] of Object.entries(humorKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxHumorScore) {
      maxHumorScore = score;
      analysis.humor_style = style.replace('_', '-');
    }
  }

  // Energy level analysis (more nuanced)
  const energyIndicators = {
    high: exclamationCount / tweetCount + (capsCount > 5 ? 2 : 0) + (emojiCount / tweetCount * 2),
    low: (['tired', 'sleepy', 'exhausted', 'drained', '😴', 'nap', 'rest'].reduce((count, keyword) => 
      count + (combinedText.split(keyword).length - 1), 0) * 2)
  };
  
  if (energyIndicators.high > 2) analysis.energy_level = "high";
  else if (energyIndicators.low > 1) analysis.energy_level = "low";
  else analysis.energy_level = ["medium", "steady", "balanced"][Math.floor(Math.random() * 3)];

  // Communication style analysis (expanded)
  const communicationPatterns = {
    analytical: ['analyze', 'think', 'logic', 'because', 'therefore', 'data', 'evidence', 'research'],
    enthusiastic: ['amazing', 'incredible', 'awesome', 'love', 'excited', '!'],
    curious: ['?', 'wonder', 'why', 'how', 'what if', 'interesting'],
    direct: ['no', 'yes', 'stop', 'do this', 'don\'t', 'should', 'must'],
    empathetic: ['feel', 'understand', 'sorry', 'support', 'care', 'help'],
    creative: ['imagine', 'create', 'art', 'design', 'inspire', 'dream']
  };

  let maxCommScore = 0;
  for (const [style, keywords] of Object.entries(communicationPatterns)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxCommScore && score > 0) {
      maxCommScore = score;
      analysis.communication_style = style;
    }
  }

  // Social tendency analysis (more detailed)
  const socialIndicators = {
    social: mentionCount / tweetCount + ['thanks', 'appreciate', 'love you', 'friends', 'team', 'together', '❤️', 'community'].reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0),
    introverted: ['alone', 'quiet', 'introvert', 'solitude', 'private', 'myself'].reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0),
    independent: ['myself', 'solo', 'own', 'independent', 'self'].reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0)
  };

  if (socialIndicators.social > 2) analysis.social_tendency = "social";
  else if (socialIndicators.introverted > 1) analysis.social_tendency = "introverted";
  else if (socialIndicators.independent > 1) analysis.social_tendency = "independent";
  else analysis.social_tendency = ["balanced", "adaptable", "situational"][Math.floor(Math.random() * 3)];

  // Interests analysis (more comprehensive)
  const interestKeywords = {
    technical: ['code', 'programming', 'debug', 'software', 'tech', 'api', 'dev', 'javascript', 'python', 'react'],
    creative: ['art', 'create', 'design', 'draw', 'music', '🎨', 'paint', 'write', 'photo', 'creative'],
    fitness: ['workout', 'gym', 'fitness', '💪', 'exercise', 'run', 'training', 'health'],
    gaming: ['game', 'gaming', 'play', '🎮', 'steam', 'xbox', 'ps5', 'nintendo'],
    reading: ['book', 'read', 'novel', '📚', 'author', 'story', 'chapter'],
    travel: ['travel', 'trip', 'vacation', '✈️', 'explore', 'adventure', 'journey'],
    food: ['food', 'eat', 'restaurant', '🍕', '🍔', 'cooking', 'recipe', 'delicious'],
    coffee: ['coffee', '☕', 'espresso', 'latte', 'brew', 'caffeine'],
    music: ['music', '🎵', 'song', 'artist', 'album', 'concert', 'spotify'],
    movies: ['movie', 'film', '🎬', 'cinema', 'watch', 'netflix', 'show'],
    nature: ['nature', '🌲', 'hiking', 'outdoors', 'park', 'garden', 'green'],
    learning: ['learn', 'study', 'course', 'education', 'knowledge', 'skill']
  };

  for (const [interest, keywords] of Object.entries(interestKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > 0) {
      analysis.interests.push(interest);
    }
  }

  // New personality dimensions
  
  // Emotional expression
  const emotionalKeywords = {
    expressive: ['!!!', 'omg', 'wow', 'amazing', emojiCount > tweetCount],
    subtle: avgWordsPerTweet > 15 && exclamationCount < tweetCount * 0.2,
    intense: ['passionate', 'intense', 'deeply', 'strongly'].some(word => combinedText.includes(word)),
    calm: ['calm', 'peaceful', 'serene', 'relaxed'].some(word => combinedText.includes(word))
  };

  if (emotionalKeywords.expressive) analysis.emotional_expression = "expressive";
  else if (emotionalKeywords.intense) analysis.emotional_expression = "intense";
  else if (emotionalKeywords.calm) analysis.emotional_expression = "calm";
  else if (emotionalKeywords.subtle) analysis.emotional_expression = "subtle";
  else analysis.emotional_expression = ["balanced", "moderate", "varied"][Math.floor(Math.random() * 3)];

  // Time preference
  if (morningScore > nightScore + 1) analysis.time_preference = "morning";
  else if (nightScore > morningScore + 1) analysis.time_preference = "night";
  else analysis.time_preference = ["flexible", "adaptable", "no-preference"][Math.floor(Math.random() * 3)];

  // Decision making style
  const decisionKeywords = {
    impulsive: ['just did', 'spontaneous', 'suddenly', 'impulse', 'random'],
    analytical: ['think', 'analyze', 'consider', 'weigh', 'pros', 'cons'],
    intuitive: ['feel', 'gut', 'instinct', 'vibe', 'sense'],
    collaborative: ['ask', 'opinion', 'thoughts?', 'what do you think', 'advice']
  };

  let maxDecisionScore = 0;
  for (const [style, keywords] of Object.entries(decisionKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxDecisionScore && score > 0) {
      maxDecisionScore = score;
      analysis.decision_making = style;
    }
  }
  if (maxDecisionScore === 0) analysis.decision_making = ["balanced", "situational", "mixed"][Math.floor(Math.random() * 3)];

  // Learning style
  const learningKeywords = {
    visual: ['see', 'look', 'watch', 'visual', 'diagram', 'image'],
    analytical: ['break down', 'analyze', 'step by step', 'logic', 'systematic'],
    experimental: ['try', 'experiment', 'test', 'hands-on', 'practice'],
    social: ['discuss', 'talk', 'group', 'team', 'collaboration', 'share']
  };

  let maxLearningScore = 0;
  for (const [style, keywords] of Object.entries(learningKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxLearningScore && score > 0) {
      maxLearningScore = score;
      analysis.learning_style = style;
    }
  }
  if (maxLearningScore === 0) analysis.learning_style = ["mixed", "adaptive", "flexible"][Math.floor(Math.random() * 3)];

  // Stress response
  const stressKeywords = {
    problem_solving: ['solve', 'fix', 'tackle', 'handle', 'deal with'],
    seeking_support: ['help', 'support', 'advice', 'talk', 'vent'],
    withdrawing: ['alone', 'space', 'quiet', 'withdraw', 'isolation'],
    humor: ['laugh', 'joke', 'funny', 'humor', 'meme']
  };

  let maxStressScore = 0;
  for (const [style, keywords] of Object.entries(stressKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxStressScore && score > 0) {
      maxStressScore = score;
      analysis.stress_response = style.replace('_', '-');
    }
  }
  if (maxStressScore === 0) analysis.stress_response = ["adaptive", "varied", "flexible"][Math.floor(Math.random() * 3)];

  // Motivation type
  const motivationKeywords = {
    achievement: ['goal', 'success', 'win', 'achieve', 'accomplish', 'complete'],
    social: ['help', 'others', 'team', 'community', 'together', 'support'],
    growth: ['learn', 'grow', 'improve', 'better', 'develop', 'progress'],
    autonomy: ['freedom', 'choice', 'control', 'independent', 'own way'],
    curiosity: ['wonder', 'explore', 'discover', 'why', 'how', 'what if']
  };

  let maxMotivationScore = 0;
  for (const [style, keywords] of Object.entries(motivationKeywords)) {
    const score = keywords.reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0);
    if (score > maxMotivationScore && score > 0) {
      maxMotivationScore = score;
      analysis.motivation_type = style;
    }
  }
  if (maxMotivationScore === 0) analysis.motivation_type = ["mixed", "balanced", "situational"][Math.floor(Math.random() * 3)];

  // Creativity level based on multiple factors
  const creativityIndicators = {
    creative_words: ['create', 'art', 'design', 'imagine', 'innovative', 'original'].reduce((count, keyword) => count + (combinedText.split(keyword).length - 1), 0),
    diverse_interests: analysis.interests.length,
    unique_expressions: (combinedText.match(/[^\w\s]|[\u{1F600}-\u{1F6FF}]/gu) || []).length
  };

  const creativityScore = creativityIndicators.creative_words * 2 + 
    (creativityIndicators.diverse_interests > 3 ? 2 : 0) + 
    (creativityIndicators.unique_expressions / wordCount > 0.05 ? 2 : 0);

  if (creativityScore > 4) analysis.creativity_level = "high";
  else if (creativityScore > 2) analysis.creativity_level = "moderate";
  else analysis.creativity_level = "practical";

  // Ensure we have at least one interest
  if (analysis.interests.length === 0) {
    analysis.interests = ["general", "varied", "exploring"];
  }

  return analysis;
}

function generateTraitsFromAnalysis(analysis: PersonalityAnalysis): string[] {
  const traits: string[] = [];

  // Energy level traits
  switch (analysis.energy_level) {
    case "high":
      traits.push("energetic", "enthusiastic", "active", "vibrant");
      break;
    case "low":
      traits.push("relaxed", "calm", "peaceful", "contemplative");
      break;
    case "steady":
      traits.push("steady", "consistent", "reliable");
      break;
    default:
      traits.push("balanced", "adaptable");
  }

  // Humor style traits (expanded)
  switch (analysis.humor_style) {
    case "playful":
      traits.push("playful", "funny", "cheerful", "lighthearted");
      break;
    case "sarcastic":
      traits.push("witty", "sharp", "clever", "cynical");
      break;
    case "witty":
      traits.push("intelligent", "quick", "clever", "sharp");
      break;
    case "wholesome":
      traits.push("wholesome", "pure", "kind", "gentle");
      break;
    case "dark":
      traits.push("edgy", "complex", "deep", "unconventional");
      break;
    case "self-deprecating":
      traits.push("humble", "self-aware", "relatable", "modest");
      break;
    case "mysterious":
      traits.push("mysterious", "enigmatic", "secretive");
      break;
    default:
      traits.push("witty", "clever");
  }

  // Communication style traits (expanded)
  switch (analysis.communication_style) {
    case "enthusiastic":
      traits.push("social", "outgoing", "expressive", "energetic");
      break;
    case "analytical":
      traits.push("intelligent", "logical", "thoughtful", "systematic");
      break;
    case "curious":
      traits.push("curious", "inquisitive", "wondering", "questioning");
      break;
    case "direct":
      traits.push("direct", "straightforward", "honest", "clear");
      break;
    case "empathetic":
      traits.push("empathetic", "caring", "understanding", "supportive");
      break;
    case "creative":
      traits.push("imaginative", "artistic", "innovative", "expressive");
      break;
    case "quiet":
      traits.push("quiet", "reserved", "contemplative");
      break;
    default:
      traits.push("friendly", "approachable");
  }

  // Social tendency traits (expanded)
  switch (analysis.social_tendency) {
    case "social":
      traits.push("social", "caring", "supportive", "community-minded");
      break;
    case "introverted":
      traits.push("introspective", "independent", "reflective", "private");
      break;
    case "independent":
      traits.push("autonomous", "self-reliant", "individualistic", "free-spirited");
      break;
    case "adventurous":
      traits.push("adventurous", "bold", "exploring", "risk-taking");
      break;
    case "adaptable":
      traits.push("flexible", "adaptable", "versatile", "situational");
      break;
    default:
      traits.push("balanced", "versatile");
  }

  // Creativity traits (expanded)
  switch (analysis.creativity_level) {
    case "high":
      traits.push("creative", "artistic", "imaginative", "innovative");
      break;
    case "moderate":
      traits.push("creative", "resourceful", "adaptable");
      break;
    case "practical":
      traits.push("practical", "grounded", "realistic", "efficient");
      break;
  }

  // New personality dimensions
  
  // Emotional expression
  switch (analysis.emotional_expression) {
    case "expressive":
      traits.push("expressive", "animated", "passionate", "vivid");
      break;
    case "subtle":
      traits.push("subtle", "nuanced", "refined", "understated");
      break;
    case "intense":
      traits.push("intense", "passionate", "deep", "powerful");
      break;
    case "calm":
      traits.push("serene", "peaceful", "composed", "tranquil");
      break;
    default:
      traits.push("emotionally-balanced");
  }

  // Time preference
  switch (analysis.time_preference) {
    case "morning":
      traits.push("early-riser", "morning-person", "dawn-loving");
      break;
    case "night":
      traits.push("night-owl", "nocturnal", "evening-person");
      break;
    default:
      traits.push("time-flexible");
  }

  // Decision making
  switch (analysis.decision_making) {
    case "impulsive":
      traits.push("spontaneous", "quick-deciding", "instinctual", "bold");
      break;
    case "analytical":
      traits.push("methodical", "careful", "systematic", "thorough");
      break;
    case "intuitive":
      traits.push("intuitive", "instinctual", "feeling-based", "perceptive");
      break;
    case "collaborative":
      traits.push("collaborative", "consensus-building", "team-oriented");
      break;
    default:
      traits.push("decision-balanced");
  }

  // Learning style
  switch (analysis.learning_style) {
    case "visual":
      traits.push("visual", "observant", "pattern-recognizing");
      break;
    case "analytical":
      traits.push("systematic", "logical", "step-by-step");
      break;
    case "experimental":
      traits.push("hands-on", "experimental", "trial-and-error");
      break;
    case "social":
      traits.push("collaborative", "discussion-loving", "group-oriented");
      break;
    default:
      traits.push("learning-adaptable");
  }

  // Stress response
  switch (analysis.stress_response) {
    case "problem-solving":
      traits.push("solution-focused", "proactive", "resilient");
      break;
    case "seeking-support":
      traits.push("support-seeking", "community-oriented", "open");
      break;
    case "withdrawing":
      traits.push("introspective", "space-needing", "reflective");
      break;
    case "humor":
      traits.push("humor-coping", "lighthearted", "resilient");
      break;
    default:
      traits.push("adaptable-under-pressure");
  }

  // Motivation type
  switch (analysis.motivation_type) {
    case "achievement":
      traits.push("goal-oriented", "ambitious", "driven", "success-focused");
      break;
    case "social":
      traits.push("altruistic", "helping", "community-minded", "supportive");
      break;
    case "growth":
      traits.push("growth-minded", "learning-oriented", "developing", "improving");
      break;
    case "autonomy":
      traits.push("freedom-loving", "independent", "self-directed");
      break;
    case "curiosity":
      traits.push("curious", "exploring", "discovery-oriented", "questioning");
      break;
    default:
      traits.push("multi-motivated");
  }

  // Interest-based traits (expanded)
  analysis.interests.forEach(interest => {
    switch (interest) {
      case "technical":
        traits.push("technical", "logical", "systematic", "code-oriented");
        break;
      case "creative":
        traits.push("artistic", "expressive", "imaginative", "design-oriented");
        break;
      case "fitness":
        traits.push("health-conscious", "disciplined", "physical", "strong");
        break;
      case "gaming":
        traits.push("strategic", "competitive", "digital", "persistent");
        break;
      case "reading":
        traits.push("intellectual", "knowledge-seeking", "literary", "contemplative");
        break;
      case "travel":
        traits.push("worldly", "adventure-seeking", "culturally-curious", "exploring");
        break;
      case "food":
        traits.push("culinary", "experiential", "sensory", "social");
        break;
      case "coffee":
        traits.push("caffeinated", "ritual-oriented", "energetic");
        break;
      case "music":
        traits.push("rhythmic", "artistic", "emotional", "culturally-aware");
        break;
      case "movies":
        traits.push("story-loving", "visual", "entertainment-oriented");
        break;
      case "nature":
        traits.push("nature-loving", "outdoorsy", "grounded", "peaceful");
        break;
      case "learning":
        traits.push("knowledge-seeking", "growth-oriented", "curious", "educational");
        break;
      case "general":
        traits.push("well-rounded", "versatile");
        break;
    }
  });

  // Remove duplicates and return
  return [...new Set(traits)];
}

function generateFunExplanation(pokemon: Pokemon, analysis: PersonalityAnalysis): string {
  // Generate highly personalized explanations based on the 12 personality dimensions
  const explanations: string[] = [];
  
  // Humor style explanations (more diverse)
  const humorExplanations: { [key: string]: string[] } = {
    playful: [
      "Your infectious laughter brightens everyone's day",
      "You find joy in the simplest moments, spreading happiness wherever you go",
      "Your lighthearted approach to life is genuinely refreshing",
      "You have a gift for turning ordinary situations into memorable moments"
    ],
    sarcastic: [
      "Your razor-sharp wit keeps everyone on their toes",
      "You've mastered the art of clever comebacks and perfect timing",
      "Your dry observations reveal truth in the most entertaining way",
      "You see through pretense with surgical precision"
    ],
    witty: [
      "Your quick thinking and wordplay impress at every turn",
      "You connect ideas in ways that catch people off guard",
      "Your intelligence shines through your clever observations",
      "You make conversations infinitely more interesting"
    ],
    wholesome: [
      "Your genuine kindness creates a warm atmosphere everywhere",
      "You see the good in people and situations naturally",
      "Your pure-hearted humor brings out the best in others",
      "You're the friend everyone wishes they had"
    ],
    dark: [
      "Your unconventional perspective challenges the status quo",
      "You find humor in life's absurdities with fearless honesty",
      "Your edgy observations reveal deeper truths about reality",
      "You're not afraid to explore the complex side of human nature"
    ],
    "self-deprecating": [
      "Your humility and self-awareness are incredibly endearing",
      "You disarm tension with your honest vulnerability",
      "Your ability to laugh at yourself shows true confidence",
      "You make others feel comfortable being imperfect too"
    ]
  };

  // Communication style explanations
  const communicationExplanations: { [key: string]: string[] } = {
    analytical: [
      "You dissect complex problems with methodical precision",
      "Your systematic approach brings clarity to chaotic situations",
      "You build compelling arguments through careful reasoning",
      "Your data-driven thinking cuts through emotional noise"
    ],
    enthusiastic: [
      "Your passion is contagious and motivates everyone around you",
      "You bring energy that transforms mundane tasks into adventures",
      "Your excitement helps others see possibilities they missed",
      "You're the spark that ignites team momentum"
    ],
    curious: [
      "Your endless questions unlock new perspectives for everyone",
      "You dig deeper when others settle for surface answers",
      "Your wonder about the world keeps learning alive in every conversation",
      "You see mysteries where others see mundane facts"
    ],
    direct: [
      "Your straightforward honesty cuts through confusion instantly",
      "You say what others are thinking but afraid to voice",
      "Your clarity saves time and prevents misunderstandings",
      "You're trusted because people know where you stand"
    ],
    empathetic: [
      "You understand emotional undercurrents others completely miss",
      "Your compassion creates safe spaces for vulnerability",
      "You help people feel heard and validated in their struggles",
      "Your emotional intelligence guides better decisions"
    ],
    creative: [
      "You see solutions others never imagine because you think differently",
      "Your innovative ideas breathe life into stale concepts",
      "You connect disparate ideas in brilliant, unexpected ways",
      "Your imaginative approach opens doors others didn't know existed"
    ]
  };

  // Energy level explanations
  const energyExplanations: { [key: string]: string[] } = {
    high: [
      "Your boundless enthusiasm carries teams through challenging projects",
      "You maintain momentum when others start to flag",
      "Your vibrant presence lights up rooms and lifts spirits",
      "You turn ambitious dreams into achievable realities through sheer drive"
    ],
    low: [
      "Your thoughtful pace allows for deeper reflection and better decisions",
      "You bring calming stability to high-stress environments",
      "Your measured approach prevents costly mistakes others miss",
      "You create peaceful moments that everyone secretly craves"
    ],
    steady: [
      "Your consistent presence provides the foundation others rely on",
      "You maintain quality standards when others rush toward deadlines",
      "Your reliable energy keeps long-term projects on track",
      "You're the steady heartbeat that keeps everything functioning"
    ]
  };

  // Generate 2-3 diverse explanations
  if (analysis.humor_style && humorExplanations[analysis.humor_style]) {
    const options = humorExplanations[analysis.humor_style];
    explanations.push(options[Math.floor(Math.random() * options.length)]);
  }

  if (analysis.communication_style && communicationExplanations[analysis.communication_style]) {
    const options = communicationExplanations[analysis.communication_style];
    explanations.push(options[Math.floor(Math.random() * options.length)]);
  }

  if (analysis.energy_level && energyExplanations[analysis.energy_level]) {
    const options = energyExplanations[analysis.energy_level];
    explanations.push(options[Math.floor(Math.random() * options.length)]);
  }

  // Add personality dimension insights
  const dimensionInsights: string[] = [];
  
  if (analysis.emotional_expression === "expressive") {
    dimensionInsights.push("You wear your heart on your sleeve, making authentic connections effortless");
  } else if (analysis.emotional_expression === "subtle") {
    dimensionInsights.push("Your quiet depth reveals itself to those who take time to truly listen");
  } else if (analysis.emotional_expression === "intense") {
    dimensionInsights.push("Your passionate convictions inspire others to care more deeply");
  }

  if (analysis.decision_making === "analytical") {
    dimensionInsights.push("You weigh options carefully, leading to decisions others trust completely");
  } else if (analysis.decision_making === "intuitive") {
    dimensionInsights.push("Your instincts guide you to choices that logic alone would miss");
  } else if (analysis.decision_making === "impulsive") {
    dimensionInsights.push("Your bold spontaneity opens doors that careful planning never could");
  }

  if (analysis.learning_style === "visual") {
    dimensionInsights.push("You spot patterns and connections that escape others entirely");
  } else if (analysis.learning_style === "experimental") {
    dimensionInsights.push("You learn by doing, turning failures into valuable insights");
  } else if (analysis.learning_style === "social") {
    dimensionInsights.push("You extract wisdom from conversations others treat as small talk");
  }

  if (analysis.motivation_type === "growth") {
    dimensionInsights.push("Your hunger for improvement elevates everyone around you");
  } else if (analysis.motivation_type === "social") {
    dimensionInsights.push("Your drive to help others creates ripple effects of positive change");
  } else if (analysis.motivation_type === "curiosity") {
    dimensionInsights.push("Your questions lead teams to discoveries they never would have made alone");
  }

  // Add 1-2 dimensional insights
  if (dimensionInsights.length > 0) {
    const shuffled = dimensionInsights.sort(() => 0.5 - Math.random());
    explanations.push(...shuffled.slice(0, Math.min(2, shuffled.length)));
  }

  // Interest-based insights (more specific than generic "creative spirit")
  if (analysis.interests.includes("technical")) {
    const techInsights = [
      "You see elegant solutions hidden in complex code architectures",
      "Your debugging patience turns impossible problems into learning opportunities",
      "You build systems others can rely on for years to come",
      "Your technical intuition prevents disasters before they happen"
    ];
    explanations.push(techInsights[Math.floor(Math.random() * techInsights.length)]);
  }

  if (analysis.interests.includes("creative")) {
    const creativeInsights = [
      "You transform blank canvases into windows to new worlds",
      "Your artistic vision helps others see beauty they overlooked",
      "You blend colors, words, or sounds in ways that move souls",
      "Your creative process turns inspiration into tangible magic"
    ];
    explanations.push(creativeInsights[Math.floor(Math.random() * creativeInsights.length)]);
  }

  if (analysis.interests.includes("fitness")) {
    const fitnessInsights = [
      "Your discipline in training reflects your commitment to every goal",
      "You push through barriers others accept as permanent limits",
      "Your physical dedication inspires mental toughness in all areas",
      "You understand that strength comes from consistency, not perfection"
    ];
    explanations.push(fitnessInsights[Math.floor(Math.random() * fitnessInsights.length)]);
  }

  // Pokemon-specific connection (more nuanced)
  const pokemonConnection = generatePokemonConnection(pokemon, analysis);
  if (pokemonConnection) {
    explanations.unshift(pokemonConnection); // Put Pokemon connection first
  }

  // Select 2-3 final explanations for variety
  const finalExplanations = explanations.slice(0, 3);
  
  return finalExplanations.join(' ') || `You share ${pokemon.name}'s unique blend of characteristics that make you perfectly matched!`;
}

// Generate specific Pokemon connections based on their actual traits
function generatePokemonConnection(pokemon: Pokemon, analysis: PersonalityAnalysis): string {
  const traitMatch = pokemon.personality_traits.find(trait => 
    trait.toLowerCase() === analysis.humor_style ||
    trait.toLowerCase() === analysis.communication_style ||
    trait.toLowerCase() === analysis.energy_level ||
    trait.toLowerCase() === analysis.social_tendency ||
    trait.toLowerCase() === analysis.emotional_expression ||
    trait.toLowerCase() === analysis.decision_making
  );

  if (traitMatch) {
    const connections = [
      `Like ${pokemon.name}, your ${traitMatch} nature sets you apart from the crowd`,
      `You and ${pokemon.name} both embody that rare ${traitMatch} quality that others admire`,
      `${pokemon.name}'s ${traitMatch} personality perfectly mirrors your own authentic self`,
      `Your ${traitMatch} approach to life channels ${pokemon.name}'s legendary presence`
    ];
    return connections[Math.floor(Math.random() * connections.length)];
  }

  // Fallback based on Pokemon types
  const typeConnections: { [key: string]: string[] } = {
    "Psychic": [
      `${pokemon.name}'s psychic intuition matches your ability to read between the lines`,
      `Like ${pokemon.name}, you sense things others miss entirely`,
      `Your mental clarity mirrors ${pokemon.name}'s psychic focus`
    ],
    "Fire": [
      `${pokemon.name}'s burning passion reflects your inner drive`,
      `You and ${pokemon.name} both bring warmth and energy to everything you touch`,
      `Like ${pokemon.name}, your enthusiasm ignites others' potential`
    ],
    "Water": [
      `${pokemon.name}'s fluid adaptability matches your flexible approach to challenges`,
      `You flow around obstacles with ${pokemon.name}'s graceful determination`,
      `Like ${pokemon.name}, you bring calm depth to turbulent situations`
    ]
  };

  for (const type of pokemon.types) {
    if (typeConnections[type]) {
      const options = typeConnections[type];
      return options[Math.floor(Math.random() * options.length)];
    }
  }

  return "";
}

function generateMoveExplanation(move: string): string {
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

    const { user, tweets, is_mock_data } = await getTwitterData(username);
    
    console.log('Profile image URL:', user.profile_image_url);
    
    const tweetTexts = tweets.map(tweet => tweet.text);
    const analysis = await analyzePersonality(tweetTexts);
    
    const traits = generateTraitsFromAnalysis(analysis);
    const pokemon = findBestPokemonMatch(traits);
    
    const reasoning = generateFunExplanation(pokemon, analysis);
    
    // Generate move suggestion based on tweet analysis
    const suggestedMove = suggestMoveFromTweets(analysis);
    const moveExplanation = generateMoveExplanation(suggestedMove);
    
    // Generate diverse fun facts from our expanded analysis
    const possibleFacts = [
      `Based on ${tweets.length} recent tweets`,
      `Energy level: ${analysis.energy_level}`,
      `Communication style: ${analysis.communication_style}`,
      `Humor style: ${analysis.humor_style}`,
      `Emotional expression: ${analysis.emotional_expression}`,
      `Time preference: ${analysis.time_preference}`,
      `Decision making: ${analysis.decision_making}`,
      `Learning style: ${analysis.learning_style}`,
      `Stress response: ${analysis.stress_response}`,
      `Motivation type: ${analysis.motivation_type}`,
      `Primary interests: ${analysis.interests.slice(0, 3).join(', ') || 'varied'}`,
      `Creativity level: ${analysis.creativity_level}`,
      `Social tendency: ${analysis.social_tendency}`,
      `Signature move: ${suggestedMove}`
    ];

    // Randomly select 5 facts for variety
    const shuffled = possibleFacts.sort(() => 0.5 - Math.random());
    const funFacts = shuffled.slice(0, 5);

    const result = {
      user,
      pokemon,
      reasoning,
      fun_facts: funFacts,
      suggested_move: suggestedMove,
      move_explanation: moveExplanation,
      analysis,
      is_mock_data: is_mock_data || false
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis error:', error);
    
    // Check if it's a rate limit error
    if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
      return NextResponse.json({ 
        error: 'Server overload. Please try again after 5 minutes.' 
      }, { status: 429 });
    }
    
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}