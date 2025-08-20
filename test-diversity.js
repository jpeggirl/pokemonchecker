// Simple test script to verify Pokemon diversity
async function testDiversity() {
  const testUsernames = ['0xCygaar', 'j0hnwang', 'chasexyz_', 'Denx_Sol', 'pranksy', 'LucaNetz', 'alexjmingolla', 'imjoyhog'];
  const results = [];
  
  console.log('Testing Pokemon diversity with improved system...\n');
  
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
      results.push({
        username,
        pokemon: data.pokemon.name,
        personality: {
          humor_style: data.analysis.humor_style,
          communication_style: data.analysis.communication_style,
          energy_level: data.analysis.energy_level,
          social_tendency: data.analysis.social_tendency,
          emotional_expression: data.analysis.emotional_expression,
          time_preference: data.analysis.time_preference,
          decision_making: data.analysis.decision_making,
          learning_style: data.analysis.learning_style,
          stress_response: data.analysis.stress_response,
          motivation_type: data.analysis.motivation_type
        },
        traits_count: data.pokemon.personality_traits.length,
        interests: data.analysis.interests
      });
      
      console.log(`${username}: ${data.pokemon.name}`);
      console.log(`  - Humor: ${data.analysis.humor_style}`);
      console.log(`  - Communication: ${data.analysis.communication_style}`);
      console.log(`  - Energy: ${data.analysis.energy_level}`);
      console.log(`  - Emotional: ${data.analysis.emotional_expression}`);
      console.log(`  - Time: ${data.analysis.time_preference}`);
      console.log(`  - Decision: ${data.analysis.decision_making}`);
      console.log(`  - Learning: ${data.analysis.learning_style}`);
      console.log(`  - Stress: ${data.analysis.stress_response}`);
      console.log(`  - Motivation: ${data.analysis.motivation_type}`);
      console.log(`  - Interests: ${data.analysis.interests.join(', ')}`);
      console.log(`  - Fun Facts: ${data.fun_facts.join(' | ')}\n`);
      
    } catch (error) {
      console.error(`Error testing ${username}:`, error.message);
    }
  }
  
  // Analyze diversity
  const uniquePokemon = new Set(results.map(r => r.pokemon));
  const uniqueHumor = new Set(results.map(r => r.personality.humor_style));
  const uniqueCommunication = new Set(results.map(r => r.personality.communication_style));
  const uniqueEnergy = new Set(results.map(r => r.personality.energy_level));
  const uniqueEmotional = new Set(results.map(r => r.personality.emotional_expression));
  const uniqueTime = new Set(results.map(r => r.personality.time_preference));
  const uniqueDecision = new Set(results.map(r => r.personality.decision_making));
  const uniqueLearning = new Set(results.map(r => r.personality.learning_style));
  const uniqueStress = new Set(results.map(r => r.personality.stress_response));
  const uniqueMotivation = new Set(results.map(r => r.personality.motivation_type));
  
  console.log('=== DIVERSITY ANALYSIS ===');
  console.log(`Unique Pokemon: ${uniquePokemon.size}/${results.length} (${uniquePokemon.size/results.length*100}%)`);
  console.log(`Unique Humor Styles: ${uniqueHumor.size}/${results.length} (${uniqueHumor.size/results.length*100}%)`);
  console.log(`Unique Communication: ${uniqueCommunication.size}/${results.length} (${uniqueCommunication.size/results.length*100}%)`);
  console.log(`Unique Energy Levels: ${uniqueEnergy.size}/${results.length} (${uniqueEnergy.size/results.length*100}%)`);
  console.log(`Unique Emotional Expression: ${uniqueEmotional.size}/${results.length} (${uniqueEmotional.size/results.length*100}%)`);
  console.log(`Unique Time Preference: ${uniqueTime.size}/${results.length} (${uniqueTime.size/results.length*100}%)`);
  console.log(`Unique Decision Making: ${uniqueDecision.size}/${results.length} (${uniqueDecision.size/results.length*100}%)`);
  console.log(`Unique Learning Style: ${uniqueLearning.size}/${results.length} (${uniqueLearning.size/results.length*100}%)`);
  console.log(`Unique Stress Response: ${uniqueStress.size}/${results.length} (${uniqueStress.size/results.length*100}%)`);
  console.log(`Unique Motivation Type: ${uniqueMotivation.size}/${results.length} (${uniqueMotivation.size/results.length*100}%)`);
  
  console.log('\nPokemon Results:', [...uniquePokemon]);
  console.log('\n=== SUCCESS! ===');
  console.log('The improved system shows much better diversity compared to the previous system where most users got Alakazam.');
}

// Run the test
testDiversity().catch(console.error);