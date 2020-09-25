import Logo from '../assets/logo.png';
 const Header = () => {
     const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        <img src=${Logo}>
                    </a>
                </h1>
            </div>
            <nav class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </nav>
        </div>
     `;
     return view;
 }

export default Header;
