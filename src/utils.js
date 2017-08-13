export function getIconName(type) {
	switch (type) {
		case "INFO":
			return "info-circle";
		case "WARN":
			return "exclamation-circle";
		case "ERROR":
			return "times-circle";
		default:
			throw new Error(`Unkown type: ${type}`);
	}
}

export function getIconColor(type) {
	switch (type) {
		case "INFO":
			return "#31708f";
		case "WARN":
			return "#F2BB66";
		case "ERROR":
			return "#a94442";
		default:
			throw new Error(`Unkown type: ${type}`);
	}
}

export function getRowClass(type) {
	switch (type) {
		case "INFO":
			return "";
		case "WARN":
			return "table-warning";
		case "ERROR":
			return "table-danger";
		default:
			throw new Error(`Unkown type: ${type}`);
	}
}

export function sortBy(orderingProperty) {
	return (a, b) => {
		let nameA = a[orderingProperty].toUpperCase();
		let nameB = b[orderingProperty].toUpperCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		return 0;
	};
}

export function formatTimestamp(datetime) {
	let timestamp = new Date(datetime);

	let date = timestamp.toDateString().split(" ").join(", ");

	let hours = timestamp.getHours();
	let minutes = "0" + timestamp.getMinutes();
	let seconds = "0" + timestamp.getSeconds();
	let time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

	return `${date} (${time})`;
}
