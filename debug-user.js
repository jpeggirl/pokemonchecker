const { getTwitterData } = require('./src/utils/twitterApi.ts');
require('dotenv').config({ path: '.env.local' });

async function debugUser() {
  try {
    console.log('🔍 Debugging @imjoyhog Twitter data...\n');
    
    const { user, tweets } = await getTwitterData('imjoyhog');
    
    console.log('👤 USER DATA:');
    console.log('   Name:', user.name);
    console.log('   Username:', user.username);
    console.log('   Profile Image:', user.profile_image_url);
    console.log('   Description:', user.description);
    console.log('   Followers:', user.public_metrics.followers_count);
    console.log();
    
    console.log('🐦 TWEET DATA:');
    console.log('   Total tweets fetched:', tweets.length);
    console.log();
    
    if (tweets.length > 0) {
      console.log('   Recent tweets:');
      tweets.forEach((tweet, i) => {
        console.log(`   ${i+1}. "${tweet.text.substring(0, 60)}..."`);
      });
    }
    
    console.log();
    console.log('🔍 DIAGNOSIS:');
    if (user.profile_image_url.includes('default_profile')) {
      console.log('   • User has no custom profile picture (using default avatar)');
    }
    if (tweets.length < 20) {
      console.log(`   • Only ${tweets.length} tweets available (user may have limited tweet history)`);
    }
    if (user.description === 'Just a regular Twitter user who loves to tweet!') {
      console.log('   • This appears to be mock data - real user might not exist or API failed');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

debugUser();