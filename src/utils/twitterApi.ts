import { TwitterUser, Tweet } from '@/types';

async function getBearerToken(): Promise<string> {
  if (!process.env.TWITTER_API_KEY || !process.env.TWITTER_API_SECRET) {
    throw new Error('Twitter API credentials not found');
  }

  const credentials = Buffer.from(
    `${process.env.TWITTER_API_KEY}:${process.env.TWITTER_API_SECRET}`
  ).toString('base64');

  const response = await fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`Failed to get bearer token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function fetchTwitterUser(username: string): Promise<TwitterUser | null> {
  try {
    const bearerToken = await getBearerToken();
    
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url,description,public_metrics`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      throw new Error(`Twitter API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data) {
      throw new Error('User not found');
    }

    return {
      id: data.data.id,
      username: data.data.username,
      name: data.data.name,
      profile_image_url: data.data.profile_image_url || 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
      description: data.data.description,
      public_metrics: data.data.public_metrics || {
        followers_count: 0,
        following_count: 0,
        tweet_count: 0,
        listed_count: 0
      }
    };
  } catch (error) {
    console.error('Error fetching Twitter user:', error);
    throw error;
  }
}

export async function fetchUserTweets(userId: string): Promise<Tweet[]> {
  try {
    const bearerToken = await getBearerToken();
    
    const response = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=20&tweet.fields=created_at,public_metrics&exclude=retweets,replies`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.status}`);
    }

    const data = await response.json();
    
    const tweets: Tweet[] = [];
    for (const tweet of data.data || []) {
      tweets.push({
        id: tweet.id,
        text: tweet.text,
        created_at: tweet.created_at || new Date().toISOString(),
        public_metrics: tweet.public_metrics || {
          retweet_count: 0,
          like_count: 0,
          reply_count: 0,
          quote_count: 0
        }
      });
    }

    return tweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
}

export async function getTwitterData(username: string): Promise<{ user: TwitterUser; tweets: Tweet[] }> {
  if (!process.env.TWITTER_API_KEY || !process.env.TWITTER_API_SECRET) {
    console.log('No Twitter API credentials found, using mock data');
    return getMockTwitterData(username);
  }

  try {
    const user = await fetchTwitterUser(username);
    if (!user) {
      throw new Error('User not found');
    }

    const tweets = await fetchUserTweets(user.id);
    return { user, tweets };
  } catch (error) {
    console.error('Twitter API failed, falling back to mock data:', error);
    return getMockTwitterData(username);
  }
}

export async function getMockTwitterData(username: string): Promise<{ user: TwitterUser; tweets: Tweet[] }> {
  // Try multiple approaches to get profile image
  let profileImageUrl = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
  
  try {
    // Try unavatar.io first
    const unavatarResponse = await fetch(`https://unavatar.io/twitter/${username}`, {
      method: 'HEAD',
    });
    
    if (unavatarResponse.ok) {
      profileImageUrl = `https://unavatar.io/twitter/${username}`;
      console.log('Using unavatar.io for profile image');
    } else {
      // Try alternative approach - use a different service
      profileImageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
      console.log('Using DiceBear fallback for profile image');
    }
  } catch (error) {
    console.log('Could not fetch profile image, using default:', error);
    // Use a generated avatar as fallback
    profileImageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
  }

  const mockUser: TwitterUser = {
    id: "12345",
    username: username,
    name: `${username.charAt(0).toUpperCase() + username.slice(1)}`,
    profile_image_url: profileImageUrl,
    description: "Just a regular Twitter user who loves to tweet!",
    public_metrics: {
      followers_count: Math.floor(Math.random() * 10000),
      following_count: Math.floor(Math.random() * 5000),
      tweet_count: Math.floor(Math.random() * 50000),
      listed_count: Math.floor(Math.random() * 100)
    }
  };

  const mockTweets: Tweet[] = [
    {
      id: "1",
      text: "Just had the most amazing coffee this morning! ☕ Ready to tackle the day with so much energy!",
      created_at: "2024-01-15T09:30:00.000Z",
      public_metrics: { retweet_count: 5, like_count: 23, reply_count: 3, quote_count: 1 }
    },
    {
      id: "2", 
      text: "Working on some creative projects today. Sometimes you just need to follow your artistic instincts 🎨",
      created_at: "2024-01-14T14:20:00.000Z",
      public_metrics: { retweet_count: 2, like_count: 15, reply_count: 7, quote_count: 0 }
    },
    {
      id: "3",
      text: "Why does everything have to be so complicated? Just want to chill and watch Netflix tonight 😴",
      created_at: "2024-01-13T20:45:00.000Z", 
      public_metrics: { retweet_count: 8, like_count: 42, reply_count: 12, quote_count: 2 }
    },
    {
      id: "4",
      text: "Hot take: pineapple DOES belong on pizza and I will die on this hill 🍍🍕",
      created_at: "2024-01-12T16:15:00.000Z",
      public_metrics: { retweet_count: 15, like_count: 67, reply_count: 28, quote_count: 5 }
    },
    {
      id: "5",
      text: "Spent 3 hours debugging code only to realize I had a typo in a variable name. Programming is fun, they said...",
      created_at: "2024-01-11T11:30:00.000Z",
      public_metrics: { retweet_count: 45, like_count: 234, reply_count: 67, quote_count: 12 }
    }
  ];

  return { user: mockUser, tweets: mockTweets };
}