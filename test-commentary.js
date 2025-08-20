// Test script to verify improved commentary diversity
async function testCommentary() {
  const testUsernames = ['0xCygaar', 'j0hnwang', 'chasexyz_', 'pranksy'];
  
  console.log('Testing improved commentary system...\n');
  
  for (const username of testUsernames) {
    try {
      const response = await fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      
      const data = await response.json();
      
      console.log(`=== ${username} ===`);
      console.log(`Pokemon: ${data.pokemon.name}`);
      console.log(`Reasoning: "${data.reasoning}"`);
      console.log('');
      
    } catch (error) {
      console.error(`Error testing ${username}:`, error.message);
    }
  }
}

testCommentary().catch(console.error);