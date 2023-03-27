import React from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row px-4'>
                        {/* 1st section */}
                        <div className='footer-col2' >
                            <div style={{ backgroundColor: "#041020", border: "2px solid red", display: "flex", flexDirection: "row" }} > <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="90" height="95" className="d-inline-block align-text-top" />
                                <div style={{ backgroundColor: "#041020", color: "white", display: "flex", flexDirection: "column" }} >
                                    <div className='footer-logo'>Parikh info Solution Pvt. Ltd. </div>
                                    <div className='footer-logo'>2023 All Rights Reserved</div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd section */}
                        <div className='footer-col2'>
                            <div>Find us on:</div>
                            <div></div>
                        </div>
                        {/* third section */}
                        <div className='footer-col2'>
                            <div className='certificate'>
                                <img width="150" height="150" margin="2px 2px" src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg" className="attachment-full size-full wp-image-5745 entered lazyloaded" alt="" data-lazy-srcset="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015-150x150.jpg 150w" data-lazy-sizes="(max-width: 200px) 100vw, 200px" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg" data-ll-status="loaded" sizes="(max-width: 200px) 100vw, 200px" srcset="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-9001_2015-150x150.jpg 150w" />
                            
                                <img  width="150" height="150" src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg" class="attachment-full size-full wp-image-5746 entered lazyloaded" alt="" data-lazy-srcset="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015-150x150.jpg 150w" data-lazy-sizes="(max-width: 200px) 100vw, 200px" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg" data-ll-status="loaded" sizes="(max-width: 200px) 100vw, 200px" srcSet="https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015.jpg 200w, https://parikhinfosolutions.com/wp-content/uploads/2020/10/ISO-27100_2015-150x150.jpg 150w" />
                            
                                <img  width="150" height="150" src="https://parikhinfosolutions.com/wp-content/uploads/elementor/thumbs/image-pn95k96glrglsmc6dwdojynp8trm0xcoq6iz3gs98w.png" title="image" alt="image" data-lazy-src="https://parikhinfosolutions.com/wp-content/uploads/elementor/thumbs/image-pn95k96glrglsmc6dwdojynp8trm0xcoq6iz3gs98w.png" data-ll-status="loaded" className="entered lazyloaded" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row px-5'>
                        <div className='footer-col'>
                            <h2>Quick Links</h2>
                            <ul>
                                <li> <FaHome /> Home </li>
                                <li><FcAbout /><a href="">About</a> </li>
                                <li> <a href="">Services</a> </li>
                                <li><a href="">Blogs</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h2>Services</h2>
                            <ul>
                                <li><a>Translation</a></li>
                                <li><a>Transcription</a></li>
                                <li><a>Localization</a></li>
                                <li><a>Dubbing</a></li>
                                <li><a>Dubbing</a></li>
                                <li><a>Voice Over</a></li>
                                <li><a>Interpretation (VRI)</a></li>
                                <li><a>Content Writing</a></li>
                                <li><a>Video creation</a></li>
                                <li><a>AI Dubbing</a></li>
                            </ul>
                        </div>

                        <div className='footer-col'>
                            <h2>contact details</h2>

                            <p>316, Gemstar Commercial
                                Complex,<br />
                                Ramchandra Lane Extn,
                                Kanch Pada<br/>
                                Malad West, Mumbai 400064<br/>
                                Maharashtra, India</p>

                            <p>+91-9136109881<br/>
                                amitt@parikhinfosoltions.com<br/>
                                amitt.parikh</p>

                        </div>
                        <div className='footer-col'>
                            <h2>Map</h2>
                            <div className='map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.0161570555002!2d72.838855!3d19.189556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x832a1bf6767b8c34!2sParikh%20Info%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1673971330090!5m2!1sen!2sus" width="340" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-lf-form-tracking-inspected-dzlr5a5ogex7boq2="true" data-lf-yt-playback-inspected-dzlr5a5ogex7boq2="true" data-lf-vimeo-playback-inspected-dzlr5a5ogex7boq2="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
