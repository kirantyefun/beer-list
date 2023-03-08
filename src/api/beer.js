const RESOURCE = "beers/";

const Beer = ($axios) => ({
	all({ perPage = 10, page = 1 }) {
		return $axios.get(`${RESOURCE}?page=${page}&per_page=${perPage}`);
	},

	get(id) {
		return $axios.get(`${RESOURCE}${id}`);
	},

	// can be added in future as required

	// create (payload) {
	//     return $axios.post(`${BASE_URL}`, payload)
	// },

	// update (id, payload) {
	//     return $axios.post(`${BASE_URL}${id}`, payload)
	// },

	// delete (id) {
	//     return $axios.delete(`${BASE_URL}${id}`)
	// },
});

export default Beer