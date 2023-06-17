import { useNavigate } from "react-router-dom";

const LearnPage: React.FC = () => {
    const navigate = useNavigate();

    return <div>
        <div className="navButton" onClick={(() => navigate("/"))}>
    Back
</div>
        Learn Screen
    </div>
}
export default LearnPage;