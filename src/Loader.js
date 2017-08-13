import React from "react";
import styled from "styled-components";
import Fa from "react-fontawesome";

const LoaderContainer = styled.aside`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	flex: 1;
`;

const Inner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8em;
	height: 8em;
	text-align: center;
	font-size: 1.3em;
`;

const Icon = styled(Fa)`
	font-size: 3em;
	margin-top: 0.3em;
`;

const Loader = () =>
	<LoaderContainer>
		<Inner>
			<div>
				Loading . . .<br />
				<Icon name="spinner" spin />
			</div>
		</Inner>
	</LoaderContainer>;

export default Loader;
