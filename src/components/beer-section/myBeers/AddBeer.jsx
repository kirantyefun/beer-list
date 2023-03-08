import React, { useState } from "react";
import { useGlobalContext } from "../../../context";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Button,
	TextField,
} from "@mui/material";

function AddBeerDialog(props) {
	const [name, setName] = useState("");
	const [genre, setGenre] = useState("");
	const [description, setDescription] = useState("");

	const { state, dispatch } = useGlobalContext();

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleGenreChange = (event) => {
		setGenre(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleSubmit = () => {
		// Handle form submission here
		dispatch({
			type: "ADD_CUSTOM_BEER",
			payload: {
				// id is supposed to be generated in the backend, preferably a uuid
				id: state.customBeers.length + 1,
				name: name,
				tagline: genre,
				description: description,
				image_url: "assets/beer.png",
				ingredients: { malt: "malt", water: "water", hops: "hops" },
			},
		});
		setName("");
		setGenre("");
		setDescription("");
		props.onClose();
	};

	return (
		<Dialog open={props.open} onClose={props.onClose}>
			<DialogTitle style={{ fontWeight: "600", fontSize: "1.8rem" }}>
				Add a New Beer
			</DialogTitle>
			<DialogContent style={{ height: "350px", width: "400px" }}>
				<div className="default-beer-img-container">
					<img
						className="default-beer-img"
						src="assets/beer.png"
						alt="Default Beer"
						style={{
							maxWidth: "20%",
							maxHeight: "20%",
							marginBottom: "16px",
						}}
					/>
				</div>
				<div>
					<TextField
						className="form-field"
						label="Beer Name*"
						value={name}
						onChange={handleNameChange}
						fullWidth
						inputProps={{ style: { fontSize: "1.4rem", color: "#222" } }}
						InputLabelProps={{style: {fontFamily: "inherit", fontSize: "1.2rem"}}}
						style={{
							marginBottom: "1.2rem",
						}}
					/>
					<TextField
						label="Genre*"
						value={genre}
						onChange={handleGenreChange}
						fullWidth
						inputProps={{ style: { fontSize: "1.4rem", color: "#222" } }}
						InputLabelProps={{style: {fontFamily: "inherit", fontSize: "1.2rem"}}}
						style={{ marginBottom: "12px" }}
					/>
					<TextField
						label="Description*"
						value={description}
						onChange={handleDescriptionChange}
						inputProps={{ style: { fontSize: "1.4rem", color: "#222" } }}
						InputLabelProps={{style: {fontFamily: "inherit", fontSize: "1.2rem"}}}
						multiline
						rows={4}
						fullWidth
					/>
				</div>
			</DialogContent>
			<div className="form-actions-container">
				<Button
					onClick={props.onClose}
					style={{
						color: "rgba(182,182,183,255)",
						textTransform: "none",
						fontSize: "1.2rem",
					}}
				>
					Cancel
				</Button>
				<Button
					className="btn btn-add"
					variant="contained"
					disableElevation
					onClick={handleSubmit}
				>
					Save
				</Button>
			</div>
		</Dialog>
	);
}

export default AddBeerDialog;
