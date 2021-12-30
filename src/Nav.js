import logo from "./meme-logo.png";

export function Nav() {
    return (

        <nav>
            <img className="logo" src={logo} />
            <h2 className="nav-title">MEME GENERATOR</h2>
        </nav>
    );
}
