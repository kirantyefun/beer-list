import { useState } from "react";
import BeerList from "../BeerList";
import AddBeerDialog from "./AddBeer";
import "./myBeers.scss";
import { useGlobalContext } from "../../../context";

export default function MyBeers() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

	const {state} = useGlobalContext();

	if (state.customBeers.length) {
		return <BeerList beerList={state.customBeers} showLoadMore={false}/>;
	}

	return (
		<div className="container">
			<div className="empty-beers center-text">
				<p>Nothing to see yet.</p>
				<p>
					<button onClick={handleOpenDialog} className="btn btn-add">
            Click here
          </button> to add your
					first beer!
				</p>
        <AddBeerDialog open={dialogOpen} onClose={handleCloseDialog} />
			</div>
		</div>
	);
}
