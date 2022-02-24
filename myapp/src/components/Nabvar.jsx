const Navbar = () => {
    return (
      <>
        <div id="Header_wrapper">
          <header id="Header">
            <div className="header_placeholder" />
            <div id="Top_bar">
              <div className="container">
                <div className="column one">
                  <div className="top_bar_left clearfix">
                    <div className="logo">
                      <a
                        id="logo"
                        href="index-pay.html"
                        title="BePay - BeTheme"
                        data-height={60}
                        data-padding={15}
                      >
                        <img
                          className="logo-main scale-with-grid"
                          src="assets/images/pay.png"
                          data-retina="assets/images/retina-pay.png"
                          data-height={75}
                          alt="pay"
                        />
                        <img
                          className="logo-sticky scale-with-grid"
                          src="assets/images/pay.png"
                          data-retina="assets/images/retina-pay.png"
                          data-height={75}
                          alt="pay"
                        />
                        <img
                          className="logo-mobile scale-with-grid"
                          src="assets/images/pay.png"
                          data-retina="assets/images/retina-pay.png"
                          data-height={75}
                          alt="pay"
                        />
                        <img
                          className="logo-mobile-sticky scale-with-grid"
                          src="assets/images/pay.png"
                          data-retina="assets/images/retina-pay.png"
                          data-height={75}
                          alt="pay"
                        />
                      </a>
                    </div>
                    <div className="menu_wrapper">
                      <nav id="menu">
                        <ul id="menu-main-menu" className="menu menu-main">
                          <li className="current-menu-item">
                            <a href="index-pay.html">
                              <span>Home</span>
                            </a>
                          </li>
                          <li>
                            <a href="./about.jsx">
                              <span>About</span>
                            </a>
                          </li>
                          <li>
                            <a href="content/pay/features.html">
                              <span>Features</span>
                            </a>
                          </li>
                          <li>
                            <a href="content/pay/pricing-list.html">
                              <span>Pricing list</span>
                            </a>
                          </li>
                          <li>
                            <a href="content/pay/Profile.html">
                              <span>Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="content/pay/contact.html">
                              <span>Contact</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <a className="responsive-menu-toggle" href="#">
                        <i className="icon-menu-fine" />
                      </a>
                    </div>
                  </div>
                  <div className="top_bar_right">
                    <div className="top_bar_right_wrapper">
                      <a
                        href="#"
                        className="button button_theme button_js action_button"
                        target="_blank"
                      >
                        <span className="button_label">GO TO MARKET</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    );
}
 
export default Navbar;