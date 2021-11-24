import FilterButtons from "./FilterButtons";
import Sorting from "./Sorting";

export default function LandingContentSelector() {
    return (
        <div className="content-selector">
            <div className="container">
                <div className="content-selector__inner">
                    <FilterButtons/>
                    <Sorting/>
                </div>
            </div>
        </div>
    );
}