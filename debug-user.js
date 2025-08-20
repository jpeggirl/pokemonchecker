require('dotenv').config({ path: '.env.local' });

async function testTwitterAPI() {
  const { getTwitterData } = require('./src/utils/twitterApi.ts');
  
  try {
    console.log('Testing Twitter API with username: 0xCygaar');
    const result = await getTwitterData('0xCygaar');
    console.log('Success! User data:', {
      username: result.user.username,
      name: result.user.name,
      profile_image_url: result.user.profile_image_url,
      tweet_count: result.tweets.length
    });
    console.log('First tweet:', result.tweets[0]?.text);
  } catch (error) {
    console.error('Twitter API test failed:', error.message);
  }
}

testTwitterAPI();