import "../assets/styles/sass/header.scss";
import { useEffect } from "react";

function Header() {
    function ShowMenu() {
        const burgerMenuBtn = document.getElementById("burgerMenuBtn");
        const menuLinksBox = document.getElementById("menuLinksBox");
        let couter = 1;

        burgerMenuBtn.addEventListener("click", () => {
            couter++;
            if (couter % 2 == 0) {
                menuLinksBox.classList.add("show_menu");
                menuLinksBox.classList.remove("hidden_menu");
            }
            if (couter % 2 != 0) {
                menuLinksBox.classList.add("hidden_menu");
                menuLinksBox.classList.remove("show_menu") 
            }
        });
    }

    useEffect(() => {
        ShowMenu();
    });

    return (
        <>
            <div className="strip"></div>
            <header className="header">
                <div className="logo">
                    <svg
                        className="pcrepb_icon"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="462.000000pt"
                        height="658.000000pt"
                        viewBox="0 0 462.000000 658.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,658.000000) scale(.100000,-0.100000)"
                            fill="#000"
                            stroke="none">
                            <path
                                d="M1861 6521 c-39 -41 -360 -470 -524 -700 -63 -87 -65 -122 -13 -167
53 -46 568 -272 659 -289 34 -7 40 -4 72 30 56 62 361 515 432 644 l28 50 -24
46 c-38 72 -256 262 -445 389 -95 63 -124 63 -185 -3z"
                            />
                            <path
                                d="M2666 6029 c-74 -58 -485 -686 -486 -741 0 -22 119 -95 313 -194
l147 -75 1 -222 c0 -122 4 -230 8 -241 6 -16 17 -6 72 60 169 204 486 619 577
756 44 67 45 68 27 94 -51 78 -472 499 -550 550 -45 30 -82 34 -109 13z"
                            />
                            <path
                                d="M1032 5574 c-36 -29 -98 -115 -574 -794 -442 -632 -440 -629 -446
-690 -4 -40 1 -60 24 -107 38 -79 424 -655 1015 -1514 251 -364 314 -469 324
-534 4 -25 -7 -123 -29 -265 -90 -579 -196 -1403 -199 -1545 l-2 -90 70 -7
c103 -11 1021 -10 1157 0 64 5 121 12 126 16 26 16 50 227 112 1001 23 275 47
565 55 645 20 195 19 289 -1 319 -15 21 -22 23 -92 19 -62 -2 -77 0 -86 14
-12 20 10 47 89 110 74 60 109 105 108 143 -1 41 -51 147 -143 305 -40 69
-207 359 -372 645 -165 286 -316 544 -335 573 -65 98 -129 136 -403 237 -162
61 -283 116 -296 136 -13 21 32 45 116 62 100 20 130 34 150 69 16 30 10 55
-56 208 -34 81 -45 170 -20 170 9 0 67 -48 129 -106 153 -146 236 -200 329
-218 66 -12 551 55 663 92 47 16 51 20 67 70 24 71 48 223 48 303 0 52 -5 72
-20 92 -34 42 -492 266 -1010 492 -300 131 -412 175 -441 175 -13 0 -39 -12
-57 -26z"
                            />
                            <path
                                d="M3397 5288 c-118 -140 -915 -1197 -956 -1269 -37 -64 -39 -88 -8
-116 49 -47 496 -251 570 -261 36 -4 41 -2 86 49 27 30 117 131 201 224 253
281 632 721 713 828 l37 49 -21 29 c-75 106 -398 424 -502 495 -52 35 -70 31
-120 -28z"
                            />
                            <path
                                d="M4113 4641 c-35 -25 -320 -333 -668 -721 -231 -257 -285 -326 -285
-361 0 -10 23 -46 52 -81 70 -85 283 -298 298 -298 22 0 585 456 840 679 204
179 260 234 260 255 0 37 -68 137 -207 304 -166 199 -215 252 -235 252 -8 0
-33 -13 -55 -29z"
                            />
                            <path
                                d="M2315 4343 c-16 -2 -120 -20 -230 -40 -208 -37 -318 -44 -441 -29
-85 10 -124 3 -124 -23 0 -40 27 -52 500 -217 72 -25 144 -44 169 -44 40 0 48
5 101 59 102 104 188 239 174 274 -9 25 -61 32 -149 20z"
                            />
                            <path
                                d="M2000 3861 c-13 -9 -5 -30 51 -139 60 -115 446 -775 846 -1446 102
-170 151 -262 145 -268 -6 -6 -52 -9 -111 -6 l-100 4 -10 -61 c-20 -116 -55
-473 -126 -1281 -41 -473 -47 -610 -25 -624 28 -17 171 -25 485 -25 355 1 374
3 386 60 4 17 7 396 8 843 l1 814 76 81 c157 169 303 387 370 553 125 309 299
1175 244 1209 -17 11 -117 -57 -442 -297 -245 -181 -287 -200 -353 -159 -16
10 -103 90 -192 178 -89 88 -196 183 -238 212 -136 94 -492 252 -718 317 -129
38 -269 54 -297 35z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="menu">
                    <button className="burger_menu_btn" id="burgerMenuBtn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z"
                                fill="black"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z"
                                fill="black"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                    <ul className="menu_links_box" id="menuLinksBox">
                        <li>
                            <a href="Início">Início</a>
                        </li>
                        <li>
                            <a href="Cultura">Cultura</a>
                        </li>
                        <li>
                            <a href="Material_Didático">Material Didático</a>
                        </li>
                        <li>
                            <a href="Ajuda">Ajuda</a>
                        </li>
                        <li>
                            <a href="Junte-se_a_Nós">Junte-se a Nós</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
