import { useNavigate } from "react-router-dom";
import './Learn.css';

const LearnPage: React.FC = () => {
    const navigate = useNavigate();

    return <div>
        <div className="navButton backButton" onClick={(() => navigate("/"))}>
    Back
</div>
        Learn Screen
    </div>
}
export default LearnPage;