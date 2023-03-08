import { useState } from "react";
import "./App.scss";
import BeerList from "./components/beer-section/BeerList";
import MyBeers from "./components/beer-section/myBeers/MyBeers";
import Header from "./components/header/Header";
import { useGlobalContext } from "./context";

function App() {
	const { state } = useGlobalContext();
	const tabList = [
		{ 
			label: "All Beers", 
			component: BeerList, 
			key: "allBeers" 
		},
		{
			label: "My Beers",
			component: MyBeers,
			key: "myBeers",
		},
	];

	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	const CurrentTabContent = tabList[selectedTabIndex].component;
	return (
		<div className="App">
			<Header
				tabList={tabList}
				setSelectedTabIndex={setSelectedTabIndex}
				selectedTabIndex={selectedTabIndex}
			/>
			<CurrentTabContent beerList={state.beers} showLoadMore={true} />
		</div>
	);
}

export default App;
