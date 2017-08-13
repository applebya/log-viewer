import React, { Component } from "react";
import styled from "styled-components";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { fadeInUp } from "./animations";

const TableContainer = styled.div`
	background: white;
	border-radius 6px;
	box-shadow: 0px -5px 20px 2px rgba(0,0,0,0.1);
	padding: 2em !important;
	margin-top: 2em;
	animation: ${fadeInUp} 1s ease;
	overflow: scroll;

	@media (max-width: 991px) {
		padding: 15px 0 !important;
	}

	@media (max-width: 767px) {
	  border-radius: 0px;
	  padding: 1em 0 0 0 !important;
	}
`;

const Table = styled.table`width: 100%;`;

class LogTable extends Component {
	state = {
		isAscending: false,
		orderingProperty: "datetime"
	};

	updateOrdering(orderingProperty) {
		let state = { orderingProperty };

		if (orderingProperty === this.state.orderingProperty) {
			state.isAscending = !this.state.isAscending;
		}
		this.setState(state);
	}

	render() {
		return (
			<TableContainer>
				<Table>
					<TableHeader {...this.state} updateOrdering={x => this.updateOrdering(x)} />
					<TableBody {...this.state} {...this.props} />
				</Table>
			</TableContainer>
		);
	}
}

export default LogTable;
