import Beer from "./Beer";
import "./beer.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGlobalContext } from "../../context";

export default function BeerList({ beerList, showLoadMore }) {
	const { state, fetchBeers } = useGlobalContext();
	const handleLoadMore = async () => {
		await fetchBeers();
	};
	return (
		<div className="container">
      {
        beerList.length ? (<section className="section-beer-list">
				{beerList.map((beer) => (
					<Beer
						key={beer.id}
						name={beer.name}
						description={beer.description}
						image={beer.image_url}
						tagline={beer.tagline}
						ingredients={Object.keys(beer.ingredients).join(",")}
					/>
				))}
			</section>
      ) : state.isLoading ? (
				<div>
					<p className="center-text">Loading...</p> 
				</div>
			) : null
      }
			
			{showLoadMore && beerList.length && !state.error? (
				<div className="load-more center-text">
					<button
						disabled={state.isLoading}
						onClick={() => handleLoadMore()}
						className="btn btn--load-more"
					>
						{state.isLoading ? "Loading..." : "Load More"}
					</button>
					{state.isLoading ? null : (
						<KeyboardArrowDownIcon className="icon" />
					)}
				</div>
			) : null}
		</div>
	);
}
