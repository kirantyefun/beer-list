import "./beer.scss";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export default function Beer({name, description, image, tagline, ingredients}) {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
	return (
		<div className="beer-card">
      <div className="beer-img-container" >
        <BootstrapTooltip title={<p className="tooltip">Ingredients: {ingredients}</p>} placement="top" arrow>
        <img
          className="beer-img"
          src={image}
          alt="Beer"
        />
        </BootstrapTooltip>
      </div>
      <div className="content">
        <p className="beer-title">{name}</p>
        <p className="beer-tagline">
          {tagline}
        </p>
        <p className="beer-description">
          {description}
        </p>
      </div>
		</div>
	);
}
