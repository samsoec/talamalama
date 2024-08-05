export function renderButtonStyle(type: string) {
	switch (type) {
		case "PRIMARY":
			return "px-6 py-3 text-sm rounded-full bg-accent text-gray-100";
		case "SECONDARY":
			return "px-6 py-3 text-sm rounded-full bg-transparent border border-gray-300 rounded";
		default:
			return "px-6 py-3 text-sm rounded-full bg-accent text-gray-100";
	}
}
