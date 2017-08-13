import React from "react";
import styled from "styled-components";
import Fa from "react-fontawesome";

import { getIconName, getIconColor, getRowClass, sortBy, formatTimestamp } from "./utils";

const Tr = styled.tr.attrs({ className: p => getRowClass(p.type) })`
	border-bottom: 1px solid #eee;
	&:last-child {
		border: none;
	}
`;

const Td = styled.td`
	padding: .5em .25em;
	font-size: 14px;
	min-height: 60px;

	&:first-child {
		padding-left: 0.5em;
		text-align: center;
	}
	&:last-child {
		padding-right: 0.5em;
	}
`;

const TypeIcon = styled(Fa).attrs({ name: p => getIconName(p.type) })`
	margin-right: 0.5em;
	color: ${p => getIconColor(p.type)}
`;

const TableBody = ({ logs, isAscending, orderingProperty }) => {
	let orderedLogs = logs.sort(sortBy(orderingProperty));

	if (isAscending) {
		orderedLogs = orderedLogs.reverse();
	}

	return (
		<tbody>
			{orderedLogs.map(({ id, datetime, type, name, message, source }) => {
				return (
					<Tr key={id} type={type}>
						<Td>
							<TypeIcon type={type} />
						</Td>
						<Td>
							{formatTimestamp(datetime)}
						</Td>
						<Td>
							{name}
						</Td>
						<Td>
							{message}
						</Td>
						<Td>
							{source}
						</Td>
					</Tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
