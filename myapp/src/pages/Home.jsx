import Homefooter from "../components/Homefooter";
import Navbar from "../components/Nabvar";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <>
      <body className="color-custom style-default button-default layout-full-width no-content-padding header-transparent minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-line-below-80 menuo-no-borders menuo-right mobile-tb-hide mobile-side-slide mobile-mini-mr-ll tr-content be-reg-2074">
        <div id="Wrapper">
          {/* <Navbar /> */}
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
                              <Link to="/">
                                <span>Home</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <span>About</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/features">
                                <span>Features</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/pricingList">
                                <span>Pricing list</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/profile">
                                <span>Profile</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact">
                                <span>Contact</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/signIn">
                                <span>Sign In</span>
                              </Link>
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
          <div id="Content">
            <div className="content_wrapper clearfix">
              <div className="sections_group">
                <div className="entry-content">
                  <div
                    className="section mcb-section bg-cover-ultrawide"
                    style={{
                      paddingTop: "160px",
                      paddingBottom: "0px",
                      backgroundImage:
                        "url(assets/images/home_pay_sectionbg1.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center bottom",
                    }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              <h1>
                                Buy and Sell Currency on your Desired Rates
                              </h1>
                              <h5 className="themecolor">
                                System for paying &amp; managing money.
                              </h5>
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto 25px" }}
                              />
                              <a
                                className="button  button_right button_size_2 button_js"
                                href="content/pay/pricing-list.html"
                              >
                                <span className="button_icon">
                                  <i className="icon-right-circled" />
                                </span>
                                <span className="button_label">
                                  Try for free
                                </span>
                              </a>
                              <a
                                className="button  button_right button_size_2 button_js"
                                href="https://vimeo.com/88133012"
                                rel="prettyphoto"
                                style={{
                                  backgroundColor: "#5c56d4 !important",
                                  color: "#fff",
                                }}
                              >
                                <span className="button_icon">
                                  <i
                                    className="icon-videocam-line"
                                    style={{ color: "#fff !important" }}
                                  />
                                </span>
                                <span className="button_label">
                                  Watch video
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="column mcb-column one column_image">
                            <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                              <div className="image_wrapper">
                                <img
                                  className="scale-with-grid"
                                  src="assets/images/home_pay_pic1.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="section mcb-section"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      backgroundImage:
                        "url(assets/images/home_pay_sectionbg2.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one-third column_column  column-margin-20px">
                            <div className="column_attr clearfix">
                              <h2>
                                A few reasons why{" "}
                                <span className="themecolor">Be Pay</span> might
                                be the right fit
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap mcb-wrap one-third valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column column-margin-20px">
                            <div className="column_attr clearfix">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Et
                                leo duis ut diam quam nulla porttitor. Eget nunc
                                scelerisque viverra mauris in. Venenatis cras
                                sed felis eget velit aliquet sagittis id. Sit
                                amet est placerat in egestas. Mauris rhoncus
                                orci.
                              </p>
                            </div>
                          </div>
                          <div className="column mcb-column one column_button">
                            <a
                              className="button  button_right button_size_2 button_js"
                              href="content/pay/features.html"
                            >
                              <span className="button_icon">
                                <i className="icon-menu" />
                              </span>
                              <span className="button_label">Learn more</span>
                            </a>
                          </div>
                          <div className="column mcb-column one column_divider ">
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 20px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="wrap mcb-wrap two-third valign-top clearfix"
                        style={{ padding: "0 0 0 5%" }}
                      >
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("content/pay/images/home_pay_pic2.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                01 —
                              </h6>
                              <h5>Admin panel</h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("assets/images/home_pay_pic3.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                02 —
                              </h6>
                              <h5>Safety</h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("assets/images/home_pay_pic4.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                03 —
                              </h6>
                              <h5>Statistics</h5>
                            </div>
                          </div>
                          <div className="column mcb-column one column_divider ">
                            <hr className="no_line" />
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("assets/images/home_pay_pic5.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                04 —
                              </h6>
                              <h5>Paying</h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("assets/images/home_pay_pic6.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                05 —
                              </h6>
                              <h5>Flexible</h5>
                            </div>
                          </div>
                          <div className="column mcb-column one-third column_column">
                            <div
                              className="column_attr clearfix"
                              style={{
                                backgroundImage:
                                  'url("assets/images/home_pay_pic7.png")',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left top",
                                padding: "0 0 0 80px",
                              }}
                            >
                              <h6
                                className="themecolor"
                                style={{ marginBottom: "2px" }}
                              >
                                06 —
                              </h6>
                              <h5>Areas</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_divider ">
                            <hr
                              className="no_line"
                              style={{ margin: "0 auto 40px" }}
                            />
                          </div>
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              <h2>Testimonials</h2>
                            </div>
                          </div>
                          <div className="column mcb-column one column_testimonials dark">
                            <div className="testimonials_slider single-photo hide-photos">
                              <ul className="testimonials_slider_ul">
                                <li>
                                  <div className="bq_wrapper">
                                    <blockquote>
                                      <img
                                        className="alignnone size-full wp-image-33"
                                        src="assets/images/home_pay_pic8.png"
                                      />
                                      Lorem ipsum dolor sit amet enim. Etiam
                                      ullamcorper. Suspendisse a pellentesque
                                      dui, non felis. Maecenas malesuada elit
                                      lectus felis, malesuada ultricies.
                                      Curabitur et ligula. Ut molestie.
                                      <h5 style={{ marginTop: "40px" }}>
                                        <strong>
                                          Tom Johnson{" "}
                                          <span style={{ color: "#67ffd1" }}>
                                            CEO Muffin Group
                                          </span>
                                        </strong>
                                      </h5>
                                    </blockquote>
                                  </div>
                                  <div className="hr_dots">
                                    <span />
                                    <span />
                                    <span />
                                  </div>
                                  <div className="author">
                                    <h5 />
                                    <span className="company" />
                                  </div>
                                </li>
                                <li>
                                  <div className="bq_wrapper">
                                    <blockquote>
                                      <img
                                        className="alignnone size-full wp-image-33"
                                        src="assets/images/home_pay_pic9.png"
                                      />
                                      Pellentesque facilisis. Nulla imperdiet
                                      sit amet magna. Vestibulum dapibus, mauris
                                      nec malesuada fames ac turpis velit,
                                      rhoncus eu, luctus et interdum adipiscing
                                      wisi. Aliquam erat ac ipsum. Integer
                                      aliquam purus.
                                      <h5 style={{ marginTop: "40px" }}>
                                        <strong>
                                          Kevin Perry{" "}
                                          <span style={{ color: "#67ffd1" }}>
                                            CEO Nulla Purus{" "}
                                          </span>
                                        </strong>
                                      </h5>
                                    </blockquote>
                                  </div>
                                  <div className="hr_dots">
                                    <span />
                                    <span />
                                    <span />
                                  </div>
                                  <div className="author">
                                    <h5 />
                                    <span className="company" />
                                  </div>
                                </li>
                                <li>
                                  <div className="bq_wrapper">
                                    <blockquote>
                                      <img
                                        className="alignnone size-full wp-image-33"
                                        src="assets/images/home_pay_pic10.png"
                                      />
                                      Lorem ipsum dolor sit amet enim. Etiam
                                      ullamcorper. Suspendisse a pellentesque
                                      dui, non felis. Maecenas malesuada elit
                                      lectus felis, malesuada ultricies.
                                      Curabitur et ligula. Ut molestie.
                                      <h5 style={{ marginTop: "40px" }}>
                                        <strong>
                                          Jennifer Lee{" "}
                                          <span style={{ color: "#67ffd1" }}>
                                            CEO Curabitur
                                          </span>
                                        </strong>
                                      </h5>
                                    </blockquote>
                                  </div>
                                  <div className="hr_dots">
                                    <span />
                                    <span />
                                    <span />
                                  </div>
                                  <div className="author">
                                    <h5>aaa</h5>
                                    <span className="company" />
                                  </div>
                                </li>
                              </ul>
                              <div className="slider_pager slider_pagination" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="section mcb-section"
                    style={{ paddingTop: "40px", paddingBottom: "20px" }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_clients_slider dark">
                            <div className="clients_slider">
                              <div className="clients_slider_header">
                                <h4 className="title">Clients</h4>
                              </div>
                              <ul className="clients clients_slider_ul">
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client1-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client2-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client3-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client4-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client5-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="client_wrapper">
                                    <img
                                      src="assets/images/home_pay_client6-145x75.png"
                                      className="scale-with-grid wp-post-image"
                                      alt=""
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="section mcb-section"
                    style={{
                      paddingTop: "80px",
                      paddingBottom: "30px",
                      backgroundColor: "#0b0f2f",
                      backgroundImage:
                        "url(assets/images/home_pay_sectionbg3.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center bottom",
                    }}
                  >
                    <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one valign-top clearfix">
                        <div className="mcb-wrap-inner">
                          <div className="column mcb-column one column_column">
                            <div className="column_attr clearfix align_center">
                              <h2>
                                The <span className="themecolor">Be Pay</span>{" "}
                                plan starts from{" "}
                                <span className="themecolor">$14.99</span>
                              </h2>
                              <h5 style={{ color: "#aeb0f3" }}>
                                Find the plan that's right for you
                              </h5>
                              <hr
                                className="no_line"
                                style={{ margin: "0 auto 25px" }}
                              />
                              <a
                                className="button  button_right button_size_2 button_js"
                                href="content/pay/pricing-list.html"
                              >
                                <span className="button_icon">
                                  <i className="icon-right-circled" />
                                </span>
                                <span className="button_label">
                                  Show prices
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Homefooter />
        </div>
        {/* side menu */}
        <div id="Side_slide" className="right dark" data-width={250}>
          <div className="close-wrapper">
            <a href="#" className="close">
              <i className="icon-cancel-fine" />
            </a>
          </div>
          <div className="extras">
            <a
              href="#"
              className="button button_theme button_js action_button"
              target="_blank"
            >
              <span className="button_label">GO TO MARKET</span>
            </a>
            <div className="extras-wrapper" />
          </div>
          <div className="menu_wrapper" />
        </div>
        <div id="body_overlay" />
      </body>
    </>
  );
};

export default Home;
