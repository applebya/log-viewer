import React from "react";
import styled from "styled-components";
import Fa from "react-fontawesome";

const tableHeadersMap = [
	["type", ""],
	["datetime", "Date"],
	["name", "Name"],
	["message", "Message"],
	["source", "Source"]
];

const Th = styled.th`
	font-weight: normal;
	font-size: 15px;
	padding-bottom: 0.75em;
	cursor: pointer;
	font-weight: 500;
	user-select: none;

	transition: opacity .15s ease;
	&:hover {
		opacity: 0.75;
	}

	&:first-child {
		padding-left: 0.5em;
		font-size: 0.75em;
		opacity: 0.5;
	}
	&:last-child {
		padding-right: 0.5em;
	}
`;

const CaretIcon = ({ isVisible, direction }) =>
	<Fa
		style={{ display: isVisible ? "inline" : "none", marginLeft: "7px" }}
		name={`caret-${direction}`}
	/>;

const TableHeader = ({ orderingProperty, isAscending, updateOrdering }) =>
	<thead>
		<tr>
			{tableHeadersMap.map(([property, name]) => {
				return (
					<Th key={property} onClick={() => updateOrdering(property)}>
						{name}
						<CaretIcon
							isVisible={property === orderingProperty}
							direction={isAscending ? "up" : "down"}
						/>
					</Th>
				);
			})}
		</tr>
	</thead>;

export default TableHeader;
