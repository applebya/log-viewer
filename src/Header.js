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
	margin-top: 12px;

	&:hover {
		background: rgba(255,255,255,0.15) !important;
	}
`;

const Title = styled.h1`
	color: white;
	font-size: 3.5em;
	text-align: center;
	font-family: 'Monoton', Roboto, sans-serif;
`;

const Header = ({ infoIsVisible, toggleInfo }) =>
	<HeaderContainer>
		<AboutButton onClick={toggleInfo}>
			{!infoIsVisible ? "About this page" : "Hide info"}
			&nbsp;&nbsp;
			<Fa name={!infoIsVisible ? "question-circle" : "times"} />
		</AboutButton>
		<Title>Log Viewer</Title>
	</HeaderContainer>;

export default Header;
