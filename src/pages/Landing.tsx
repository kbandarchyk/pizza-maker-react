import '../assets/css/landing.css';
import Header from "../components/Header";
import LandingContentSelector from "../components/LandingContentSelector";
import LandingContent from "../components/LandingContent";

export default function Landing() {
    return (
        <div>
            <Header/>
            <LandingContentSelector/>
            <LandingContent/>
        </div>
    );
}