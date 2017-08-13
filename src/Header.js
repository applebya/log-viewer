import React from "react";
import styled from "styled-components";
import Fa from "react-fontawesome";

const HeaderContainer = styled.header`position: relative;`;

const AboutButton = styled.button.attrs({
	type: "button",
	className: "btn btn-primary"
})`
	position: absolute;
	border: 1px solid white !important;
	background: none !important;
	right: 0;
	transition: background .15s ease;
	margin-top: 14px;	

	&:hover {
		background: rgba(255,255,255,0.15) !important;
	}

	@media (max-width: 767px) {
		margin-top: 2px !important;
		margin-right: 5px;

		aside {
			display: none !important;			
		}
	}
`;

const Title = styled.h1`
	color: white;
	font-size: 3.5em;
	text-align: center;
	font-family: 'Monoton', Roboto, sans-serif;

	@media (max-width: 767px) {
		font-size: 2.5em;
	}
`;

const Header = ({ infoIsVisible, toggleInfo }) =>
	<HeaderContainer>
		<AboutButton onClick={toggleInfo}>
			<aside style={{ display: "inline" }}>
				{!infoIsVisible ? "About" : "Hide info"}
				&nbsp;&nbsp;
			</aside>
			<Fa name={!infoIsVisible ? "question-circle" : "times"} />
		</AboutButton>
		<Title>Log Viewer</Title>
	</HeaderContainer>;

export default Header;
