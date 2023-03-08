import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import $axios from "./api/axiosInstance";
import apiIndex from "./api/apiIndex";

const API = apiIndex($axios);
const initialState = {
	page: 1,
	perPage: 10,
	beers: [],
	isLoading: true,
	error: null,
	customBeers: []
};

const AppContext = createContext();

// creating Provider
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		fetchBeers();
	}, []);
	const fetchBeers = async () => {
		dispatch({ type: "FETCH_DATA_REQUEST" });
		try {
			const response = await API.beer.all({
				perPage: state.perPage,
				page: state.page,
			});
			dispatch({
				type: "FETCH_DATA_SUCCESS",
				payload: {
					beers: response.data,
					page: state.page + 1,
				},
			});
		} catch (error) {
			dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
		}
	};

	return (
		<AppContext.Provider value={{ state, dispatch, fetchBeers }}>
			{children}
		</AppContext.Provider>
	);
};

// custom hook creation
const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
