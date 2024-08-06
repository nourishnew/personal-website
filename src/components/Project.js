import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

export default function Project({
	title,
	metaTitle,
	githubUrl,
	description,
	website,
}) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div class="p-4 m-2  bg-[#1E1B1E] rounded-[20px] min-h-[15em] max-w-[25em] flex-auto grow w-full">
			<div class="h-full mt-[30%]">
				<h1 class="text-white font-sans text-2xl font-bold p-2 m-1">{title}</h1>
				<h2 class="text-white font-sans text-2xl p-2 m-auto">{metaTitle}</h2>
				<a href={githubUrl} arget="_blank" class="m-auto">
					<img
						src="/github.png"
						alt="avatar"
						class="rounded-md size-16 cursor:pointer m-auto"
					/>
					<p class="text-white text-xl m-5">Github</p>
				</a>
				<div class="mt-auto align-bottom">
					<Button variant="outlined" onClick={handleClickOpen}>
						Learn More
					</Button>
				</div>
			</div>

			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}>
				<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
					{title}
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
				<DialogContent dividers>
					<Typography gutterBottom>{description}</Typography>

					<a href={website} target="_blank" rel="noreferrer">
						<Button autoFocus>Visit Site</Button>
					</a>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Close
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
