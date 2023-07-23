import { useNavigate } from "react-router-dom";
import './Learn.css';
import bjChart from '/assets/correctBJ.png';

const LearnPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="learn-page">
            <div className="navButton backButton" onClick={() => navigate("/LearnOption")}>
                Back
            </div>
            <h1 className="section-heading">Learn Blackjack Strategy</h1>
            <p className="intro-paragraph">
                Blackjack is a popular casino card game that requires both luck and skill. While luck plays a significant role in each hand's outcome, employing a proper strategy can greatly improve your odds of winning. One of the most effective tools for blackjack players, especially new ones, is the basic strategy chart. In this guide, we'll explore what a basic strategy chart is, how to use it effectively, and why it works.
            </p>
            <h2 className="section-subheading">What is a Basic Strategy Chart?</h2>


            <p className="body-text">
                A basic strategy chart is a visual representation of the best possible moves in blackjack, based on the player's hand and the dealer's upcard. It consists of a grid with rows representing the player's hand value and columns representing the dealer's upcard. The intersections of these rows and columns provide the recommended action for the player to take - whether to hit, stand, double down, split, or surrender.
            </p>
            <img src={bjChart} alt="Basic Strategy Chart" className="strategy-chart-image" />

            <h2 className="section-subheading">Using the Basic Strategy Chart:</h2>

            <h3 className="sub-subheading">Understand Hand Values:</h3>
            <p className="body-text">
                Before using the chart, familiarize yourself with hand values in blackjack. Numbered cards are worth their face value, face cards (Jack, Queen, King) are worth 10 points, and Aces can be worth 1 or 11 points, depending on which value is more favorable for your hand.
            </p>

            <h3 className="sub-subheading">Analyze Your Hand and the Dealer's Upcard:</h3>
            <p className="body-text">
                After receiving your initial two cards and the dealer's upcard, find the corresponding row and column on the chart. For example, if you have a 12 and the dealer's upcard is a 4, locate the intersection of the "12" row and "4" column.
            </p>

            <h3 className="sub-subheading">Follow the Chart's Recommendation:</h3>
            <p className="body-text">
                The chart will advise you on the best move to make. Common actions include:
            </p>
            <ul className="action-list">
                <li>Hit: Take another card to improve your hand.</li>
                <li>Stand: Keep your current hand value and end your turn.</li>
                <li>Double Down: Double your initial bet and receive only one additional card.</li>
                <li>Split: If you have a pair, split them into two separate hands and place an additional bet.</li>
                <li>Surrender: Surrender your hand, giving up half of your bet, if allowed by the casino.</li>
            </ul>

            <h2 className="section-subheading">Why Does the Basic Strategy Chart Work?</h2>
            <p className="body-text">
                The basic strategy chart is designed based on extensive mathematical calculations and simulations of millions of blackjack hands. It aims to minimize the house edge and give players the best chance of winning in the long run. The chart is developed under the assumption that the dealer's facedown card is worth 10 points (since there are more cards with a value of 10 than any other value in a standard deck).
            </p>

            <h2 className="section-subheading">Additional Tips for New Players:</h2>

            <h3 className="sub-subheading">Start with Basic Strategy:</h3>
            <p className="body-text">
                As a new player, mastering the basic strategy chart should be your first priority. Avoid deviating from the chart unless you have a solid understanding of advanced blackjack strategies.
            </p>

            <h3 className="sub-subheading">Manage Your Bankroll:</h3>
            <p className="body-text">
                Set a budget for your blackjack sessions and stick to it. Avoid chasing losses and never bet more than you can afford to lose.
            </p>

            <h3 className="sub-subheading">Learn Card Counting (Optional):</h3>
            <p className="body-text">
                While not necessary, learning card counting can give you an additional edge in blackjack. However, be aware that card counting is frowned upon by casinos and may lead to expulsion if detected.
            </p>

            <h3 className="sub-subheading">Play at Beginner-Friendly Tables:</h3>
            <p className="body-text">
                Look for casinos or tables with lower minimum bets, as they are often more suitable for new players and allow you to practice without risking too much.
            </p>

            <h2 className="section-subheading">Conclusion:</h2>
            <p className="body-text">
                The basic strategy chart is a powerful tool that can significantly improve your blackjack gameplay. By following the chart's recommendations and understanding the game's basic principles, you'll increase your chances of winning and have a more enjoyable casino experience. Remember to stay disciplined, manage your bankroll wisely, and most importantly, have fun while playing this classic card game.
            </p>
        </div>
    );
}

export default LearnPage;
