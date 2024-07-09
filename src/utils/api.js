export const getAnimeResponse = async (resource, query) => {
	const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`);
	const { data } = await response.json();
	return data;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
	const response = await getAnimeResponse(resource);
	return response.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
	const first = Math.random() * (data.length - gap) + 1;
	const last = first + gap;

	const response = {
		data: data.slice(first, last),
	};

	return response;
};
