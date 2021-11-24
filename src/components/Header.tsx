import HeaderLogo from "./HeaderLogo";
import HeaderBasket from "./HeaderBasket";

export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <HeaderLogo/>
                    <HeaderBasket/>
                </div>
            </div>
        </div>
    );
}
