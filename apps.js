function getHandScore(input) {
    var cards = input.split(' ');
    var suits = {
        'H': 0,
        'C': 0,
        'D': 0,
        'S': 0,
    };
    var ranks = {
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
    var rankCounts = {};
    cards.forEach(function (card) {
        var suit = card.charAt(0);
        var rank = card.substr(1);
        suits[suit] += ranks[rank];
        rankCounts[rank] = (rankCounts[rank] || 0) + 1;
    });
    console.log(input);
    console.log('Score values for each suit:');
    for (var suit in suits) {
        console.log("".concat(suit, ": ").concat(suits[suit]));
    }
    var maxScore = Math.max.apply(null, Object.keys(suits).map(function (suit) { return suits[suit]; }));
    var maxSuit;
    for (var suit in suits) {
        if (suits[suit] === maxScore) {
            maxSuit = suit;
            break;
        }
    }
    var rankScore = 0;
    var hasThreeOfAKind = false;
    for (var rank in rankCounts) {
        if (rankCounts[rank] === 3) {
            hasThreeOfAKind = true;
            if (rank === 'A') {
                rankScore = 35;
            }
            else {
                rankScore = 32.5;
            }
            break;
        }
    }
    if (hasThreeOfAKind) {
        console.log("Max of ".concat(maxScore, " ").concat(maxSuit, ", ").concat(suits['C'], " C, ").concat(suits['H'], " H, ").concat(suits['D'], " D is ").concat(maxScore));
        console.log("So the score is ".concat(rankScore, " here."));
        return rankScore;
    }
    console.log("Max of ".concat(maxScore, " ").concat(maxSuit, ", ").concat(suits['C'], " C, ").concat(suits['H'], " H, ").concat(suits['D'], " D is ").concat(maxScore));
    console.log("So the score is ".concat(maxScore, " here."));
    return maxScore;
}
var score = getHandScore("S8 S10 CA");
console.log(score);
