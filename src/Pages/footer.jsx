// import logo from './logo.svg';
import React from "react";
import { IconButton } from '@chakra-ui/react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram,FaTwitter } from "react-icons/fa";


import './footer.css';


function Footer() {
	return (
		<><a href="https://dibackend.hostx1.de/logo-diesel.svg"></a><footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>company</h4>
						<ul>
							<li><a href="https://dieselindia.com/cms/our-brands">About Diesel</a></li>
							<li><a href="https://www.otbfoundation.org/">Only the Brave Foundation</a></li>
							<li><a href="#">Store Locator</a></li>
							

						</ul>
					</div>
					<div class="footer-col">
						<h4>get help</h4>
						<ul>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">shipping</a></li>
							<li><a href="#">returns</a></li>
							<li><a href="#">order status</a></li>
							<li><a href="#">payment options</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Cookie Policy and Terms</h4>
						<ul>
							<li><a href="https://dieselindia.com/cms/legal-area/?for=privacy-policy">Privacy Policy</a></li>
							<li><a href="https://dieselindia.com/cms/terms-of-conditions">Terms and Conditions</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>follow us</h4>
						<div class="social-links text-black" >
							 <a href="https://www.facebook.com/Diesel/" target="_blank"> <FaFacebookF size="30px" /> </a>
							<a href="https://twitter.com/DIESEL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"> <FaTwitter size="30px" /></a>
							<a href="https://www.instagram.com/diesel/" target="_blank"> <FaInstagram size="30px" /> </a> 

						</div>
						

					</div>
				</div>
			</div>
		</footer></>
  );
}


export default Footer;
