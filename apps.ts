function getHandScore(input: string): number {
    const cards = input.split(' ');
  
    const suits: { [key: string]: number } = {
      'H': 0,
      'C': 0,
      'D': 0,
      'S': 0,
    };
  
    const ranks: { [key: string]: number } = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'J': 10,
      'Q': 10,
      'K': 10,
      'A': 11,
    };
  
    cards.forEach((card) => {
      const suit = card.charAt(0);
      const rank = card.substr(1);
  
      suits[suit] += ranks[rank];
    });

    console.log(input);

    console.log('Score values for each suit:');
    for (const suit in suits) {
        console.log(`${suit}: ${suits[suit]}`);
    }
  
    const maxScore = Math.max.apply(null, Object.keys(suits).map((suit) => suits[suit]));

    let maxSuit: string | undefined;
    for (const suit in suits) {
    if (suits[suit] === maxScore) {
        maxSuit = suit;
        break;
    }
    }
    console.log(`Max of ${maxScore} ${maxSuit}, ${suits['C']} C, ${suits['H']} H, ${suits['D']} D is ${maxScore}`);

    console.log(`So the score is ${maxScore} here.`);
  
    return maxScore;
  }
  
  const score = getHandScore("S8 S10 CA");
  console.log(score);