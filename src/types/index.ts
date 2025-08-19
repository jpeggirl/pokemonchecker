export interface TwitterUser {
  id: string;
  username: string;
  name: string;
  profile_image_url: string;
  description?: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
}

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    retweet_count: number;
    like_count: number;
    reply_count: number;
    quote_count: number;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  description: string;
  personality_traits: string[];
}

export interface AnalysisResult {
  user: TwitterUser;
  pokemon: Pokemon;
  reasoning: string;
  fun_facts: string[];
  suggested_move: string;
  move_explanation: string;
}

export interface PersonalityAnalysis {
  humor_style: string;
  communication_style: string;
  interests: string[];
  energy_level: string;
  social_tendency: string;
  creativity_level: string;
}