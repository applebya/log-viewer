import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	color white;
	padding: 1em;
`;

const Link = styled.a`
	color: white !important;
	font-weight: 500;
`;

const Footer = () =>
	<FooterContainer>
		Made with ❤️&nbsp;&nbsp;by{" "}
		<Link href="http://www.applebya.com/" target="_blank">
			Andrew Appleby
		</Link>
	</FooterContainer>;

export default Footer;
