import React from "react";
import { Link } from "react-router-dom";
import about_banner1 from '../../assets/about-banner-01.jpg'
import about_banner2 from '../../assets/about-banner-02.jpg'
import about_banner3 from '../../assets/about-banner-03.jpg'
import about_banner4 from '../../assets/about-banner-04.jpg'
import about_banner5 from '../../assets/about-banner-05.png'

function About() {
    return (
        <>
            <div className="Page-section mb-5 text-center">
                <p className="text-muted"> <Link to='/'>Home</Link> / About</p>
                <h2 className="fw-bold">About</h2>
            </div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src={about_banner1}
                            alt="About Banner 1"
                            className="img-fluid w-100 h-100 object-fit-cover"
                            style={{ minHeight: "100%" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="row mb-3">
                            <div className="col-12">
                                <img
                                    src={about_banner2}
                                    alt="About Banner 2"
                                    className="img-fluid w-100 object-fit-cover"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img
                                    src={about_banner3}
                                    alt="About Banner 3"
                                    className="img-fluid w-100 object-fit-cover"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src={about_banner4}
                                    alt="About Banner 4"
                                    className="img-fluid w-100 object-fit-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='opportunities'>
                <div className="container my-5 py-5">
                    <div className="row align-items-center">
                        <div className="col-xl-6 mb-4 mb-md-0 opportunities_title">
                            <h2 className="mb-3">
                                INSPIRATION, INNOVATION, <br />
                                AND OPPORTUNITIES.
                            </h2>
                            <p className="text-muted mb-4">
                                Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text.
                            </p>
                            <div class="accordion" id="businessAccordion">
                                <div class="accordion_item accordion-item border-0">
                                    <h2 class="accordion_header accordion-header">
                                        <button class="accordion-button fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
                                            ▴ Business’s vision
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#businessAccordion">
                                        <div className="accordion-body text-muted">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion_item border-0">
                                    <h2 class="accordion_header accordion-header">
                                        <button className="accordion-button collapsed fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
                                            ▾ Our mission
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#businessAccordion">
                                        <div className="accordion-body text-muted">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion_item accordion-item border-0">
                                    <h2 className="accordion_header accordion-header">
                                        <button class="accordion-button fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
                                            ▾ Our support
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#businessAccordion">
                                        <div class="accordion-body text-muted">
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-6 text-center">
                            <img src={about_banner5} alt="Idea" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 py-5">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="About_card card text-center border-0">
                            <div className="mb-3">
                                <i className="bi bi-check-square fs-1 text-success"></i>
                            </div>
                            <h5 className="fw-normal">SUBMIT A TASK</h5>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="About_card card text-center border-0">
                            <div className="mb-3">
                                <i className="bi bi-chat-dots fs-1 text-success"></i>
                            </div>
                            <h5 className="fw-bold">SEND MESSAGE</h5>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="About_card card text-center border-0">
                            <div className="mb-3">
                                <i className="bi bi-person fs-1 text-success"></i>
                            </div>
                            <h5 className="fw-bold">TRUSTED EXPERIENCE</h5>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats_section text-white text-center py-5 my-3">
                <div className="container my-5 py-5">
                    <div className="row justify-content-center">
                        <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                            <h2>18+</h2>
                            <p>years</p>
                        </div>
                        <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                            <h2>200+</h2>
                            <p>Employee</p>
                        </div>
                        <div className="about_col col-6 col-md-3 mb-4 mb-md-0">
                            <h2>85%</h2>
                            <p>Page views</p>
                        </div>
                        <div className="about_col col-6 col-md-3">
                            <h2>27+</h2>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 py-5 text-center">
                <p className="text-muted mb-2">Contact us</p>
                <h2 className="fw-bold mb-4 text-uppercase">About Us Info</h2>
                <p className="text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
                    It is a long-established fact that a reader will be distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using ‘Content here.
                </p>
                <a href="#contact" className="contact_btn px-4 py-2">
                    CLICK HERE TO CONTACT US
                </a>
            </div>
        </>
    )
}

export default About