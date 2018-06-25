$(document).ready(function () {

    var theDeck = {
        suits: ["S", "H", "D", "C"],
        numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
        deck: [],
        shuffleDeck: function () {
            this.deck = [];
            this.numbers.forEach(function (num) {
                theDeck.suits.forEach(function (suit) {
                    theDeck.deck.push(num + suit);
                });
            });
        },
        drawCard: function (numCards) {
            var drawnCards = [];
            for (var n = 1; n <= numCards; n++) {
                var card = this.deck[Math.floor(Math.random() * this.deck.length)];
                console.log(card);
                this.deck.splice(this.deck.indexOf(card), 1);
                drawnCards.push(card);
            }
            return drawnCards;
        },
    }
    theDeck.shuffleDeck();
    theDeck.shuffleDeck();
    var thePlayer = {
        handValue: 0,
        hand: [],
        isAce: 0,
        newHand: function() {
            this.hand = [];
            this.hand = theDeck.drawCard(2);
        },
        handTotal: function(cards) {
            cards.forEach(function (card) {
                if (card[0] > 1) {
                    thePlayer.handValue += parseInt(card[0]);
                } else if (card[0] === "A") {
                    thePlayer.handValue += 11;
                    isAce++;
                } else {
                    thePlayer.handValue += 10;
                }    
            });
        }
    }
    thePlayer.newHand();
    console.log(thePlayer.hand);
    thePlayer.handTotal(thePlayer.hand);
    console.log(thePlayer.handValue);
    //for 
    //if (playerHand[0].charAt(0) > 1 && p











});