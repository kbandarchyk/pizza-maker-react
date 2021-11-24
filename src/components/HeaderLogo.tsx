import logo from "../assets/img/header/logo.png";

export default function HeaderLogo() {
    return (
        <div className="header__logo">
            <img src={logo} alt="logo"/>
            <h2>react pizza</h2>
            <p>самая вкусная пицца во вселенной</p>
        </div>
    );
}