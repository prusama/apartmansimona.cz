import React from "react";

const Header = (): React.JSX.Element => {
    return (
        <div className="py-5">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div>
                        <a href="#">LOGO</a>
                    </div>
                    <ul className="flex justify-between items-center">
                        <li className="px-5">
                            <a href="#">Dostupnost</a>
                        </li>
                        <li className="px-5">
                            <a href="#">Galerie</a>
                        </li>
                        <li className="px-5">
                            <a href="#">Rezervace</a>
                        </li>
                        <li className="px-5">
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                    <div>

                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;