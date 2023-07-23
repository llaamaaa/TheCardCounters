import { useNavigate } from "react-router-dom";
import './Learn.css';
import CardCountingImage from '/assets/CardCountImg.jpeg';

const CardCountingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="learn-page">
            <div className="navButton backButton" onClick={() => navigate("/LearnOption")}>
                Back
            </div>
            <h1 className="section-heading">Card Counting in Blackjack</h1>
            <p className="intro-paragraph">
                Card counting is a blackjack strategy used by players to gain an advantage over the casino. Unlike the basic strategy, which focuses on the player's hand, card counting involves keeping track of the cards that have been dealt from the deck. By doing so, skilled players can estimate the remaining high and low-value cards in the shoe, altering their bets and playing decisions accordingly to improve their odds of winning.
            </p>

            <h2 className="section-subheading">How Card Counting Works:</h2>
<p className="body-text">
  Card counting is based on assigning a point value to each card. Low cards (2-6) are given a positive value (+1), while high cards (10-Ace) are assigned a negative value (-1). Neutral cards (7-9) are usually considered as zero (0) points. As the cards are dealt, the player keeps a running count by adding and subtracting the card values.
</p>
<img src={CardCountingImage} alt="Card Counting" className="card-counting-image" />


            <h2 className="section-subheading">Using the Running Count:</h2>
            <p className="body-text">
                The running count indicates whether the remaining cards in the shoe are favorable to the player or the dealer. A positive count means that there are more high cards left, increasing the chances of getting a natural blackjack (Ace + 10) and improving the odds for doubling down. On the other hand, a negative count signals an advantage for the dealer, as there are more low cards remaining.
            </p>

            <h2 className="section-subheading">True Count and Bet Adjustment:</h2>
            <p className="body-text">
                To make the running count more accurate, players convert it into a true count by considering the number of decks remaining in the shoe. By dividing the running count by the estimated number of decks, players get a more precise indication of the card advantage. The higher the true count, the more a player should bet to capitalize on favorable situations.
            </p>

            <h2 className="section-subheading">Casino Countermeasures:</h2>
            <p className="body-text">
                It's essential to be discreet while card counting, as casinos frown upon this strategy. If suspected of card counting, casinos may take countermeasures, such as reshuffling the decks more frequently or asking the player to leave the table.
            </p>

            <h2 className="section-subheading">Conclusion:</h2>
            <p className="body-text">
                Card counting is a powerful blackjack strategy that can give skilled players an edge over the casino. However, it requires practice, focus, and an understanding of the game. If you decide to learn card counting, remember to use it responsibly and be prepared for potential casino countermeasures. With dedication and skill, card counting can enhance your blackjack experience and increase your chances of walking away a winner.
            </p>
        </div>
    );
}

export default CardCountingPage;
