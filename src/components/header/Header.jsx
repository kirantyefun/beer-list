import "./header.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import AddBeerDialog from "../beer-section/myBeers/AddBeer";

export default function Header({
	tabList,
	setSelectedTabIndex,
	selectedTabIndex,
}) {
	const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
	const [showButton, setShowButton] = useState(false);
	const handleTabChange = (index) => {
		if (tabList[index].key === "myBeers") {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
		setSelectedTabIndex(index);
	};
	return (
		<div className="container">
			<header className="header">
				<nav className="main-nav">
					<ul className="main-nav-list">
						{tabList.map((tab, index) => (
							<li key={tab.key}>
								<a
									href="#"
									className={`main-nav-link ${
										selectedTabIndex === index
											? "active"
											: ""
									}`}
									onClick={() => handleTabChange(index)}
								>
									{tab.label}
								</a>
							</li>
						))}
					</ul>

					{
            showButton ? 
            <div>
              <Button
								className="btn-add"
                variant="contained"
                disableElevation
								onClick={handleOpenDialog}
              >
                Add a new beer
              </Button>
							<AddBeerDialog open={dialogOpen} onClose={handleCloseDialog} />
            </div> :
            null
					}
				</nav>
			</header>
		</div>
	);
}
