import { Button, Box, AppBar, Toolbar, Typography, Grid, Tabs, Tab } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";

import {getRol} from './Login'


/*	
	Navbar

	Es la barra de navegación que muestra las diferentes rutas en que se encuentran
	las interfaces, tiene diferentes variaciones de aspecto y funcionalidad, según
	la ruta en la que se encuentre el usuario
*/

export default function Navbar() {
	const location = useLocation()

	return (
		<div>
			{(location.pathname == '/')
				? (<NavbarInit />) : (location.pathname == '/login') ?
				(<NavbarLogin />) : (location.pathname == '/signup') ?
				(<NavbarSignup />) : (getRol()=='Client') ?
				(<NavbarClient />) : (<NavbarAdmin />)}
		</div>
	)
}

function NavbarInit() {

	const navigate = useNavigate()
	const [value, setValue] = useState(false);

	return (
		<Box>
			<AppBar style={{
				position: "relative",
				backgroundColor: "#DFF0F7",
				height: 60,
			}}
				elevation={2}
			>
				<Toolbar>
					<Grid container>
						<Grid>
							<Image src="https://cdn.discordapp.com/attachments/681190491278147626/1007369914312573028/Logo.png"
								rounded />
						</Grid>

						<Grid item xs sx={{ mt: 0.2, ml: 3 }} >
							<Typography variant="h6" color="#113343">
								<Link to="/" style={{ textDecoration: 'none', color: "black" }}>Pachacho Library</Link>
							</Typography>
						</Grid>

						<Grid justifyContent='flex-end'>
							<Button
								variant='contained'
								color='primary'
								onClick={() => navigate('/login')}
								sx={{mr:3}}
							>
								Login
							</Button>
						</Grid>

						<Grid justifyContent='flex-end'>
							<Button
								variant='contained'
								color='primary'
								onClick={() => navigate('/signup')}
							>
								Sign up
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box >
	)

}

function NavbarLogin() {

	const navigate = useNavigate()
	const [value, setValue] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<AppBar style={{
				position: "relative",
				backgroundColor: "#DFF0F7",
				height: 60,
			}}
				elevation={2}
			>
				<Toolbar>
					<Grid container>
						<Grid>
							<Image src="https://cdn.discordapp.com/attachments/681190491278147626/1007369914312573028/Logo.png"
								rounded />
						</Grid>

						<Grid item xs sx={{ mt: 0.2, ml: 3 }} >
							<Typography variant="h6" color="#113343">
								<Link to="/" style={{ textDecoration: 'none', color: "black" }}>Pachacho Library</Link>
							</Typography>
						</Grid>

						<Grid justifyContent='flex-end'>
							<Button
								variant='contained'
								color='primary'
								onClick={() => navigate('/signup')}
							>
								Sign up
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box >
	)

}

function NavbarSignup() {

	const navigate = useNavigate()
	const [value, setValue] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<AppBar style={{
				position: "relative",
				backgroundColor: "#DFF0F7",
				height: 60,
			}}
				elevation={2}
			>
				<Toolbar>
					<Grid container>
						<Grid>
							<Image src="https://cdn.discordapp.com/attachments/681190491278147626/1007369914312573028/Logo.png"
								rounded />
						</Grid>

						<Grid item xs sx={{ mt: 0.2, ml: 3 }} >
							<Typography variant="h6" color="#113343">
								<Link to="/" style={{ textDecoration: 'none', color: "black" }}>Pachacho Library</Link>
							</Typography>
						</Grid>

						<Grid justifyContent='flex-end'>
							<Button
								variant='contained'
								color='primary'
								onClick={() => navigate('/login')}
							>
								Login
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box >
	)

}

function NavbarAdmin() {

	const navigate = useNavigate()
	const [value, setValue] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<AppBar style={{
				position: "relative",
				backgroundColor: "#DFF0F7",
				height: 60,
			}}
				elevation={2}
			>
				<Toolbar>
					<Grid container>
						<Grid sx={{ mt: 0.8 }}>
							<Image src="https://cdn.discordapp.com/attachments/681190491278147626/1007369914312573028/Logo.png"
								rounded />
						</Grid>

						<Grid item xs sx={{ mt: 1.2, ml: 3 }} >
							<Typography variant="h6" color="#113343">
								<Link to="/" style={{ textDecoration: 'none', color: "black" }}>Pachacho Library</Link>
							</Typography>
						</Grid>

						<Grid container item xs={9} sx={{ mt: 1 }}>
							<Tabs value={value} onChange={handleChange}>
								<Tab label="Users" onClick={() => navigate("/users")} />
								<Tab label="Books" onClick={() => navigate("/books")} />
								<Tab label="Loans" onClick={() => navigate("/loans")} />
							</Tabs>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box >
	)
}


function NavbarClient() {

	const navigate = useNavigate()
	const [value, setValue] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<AppBar style={{
				position: "relative",
				backgroundColor: "#DFF0F7",
				height: 60,
			}}
				elevation={2}
			>
				<Toolbar>
					<Grid container>
						<Grid sx={{ mt: 0.8 }}>
							<Image src="https://cdn.discordapp.com/attachments/681190491278147626/1007369914312573028/Logo.png"
								rounded />
						</Grid>

						<Grid item xs sx={{ mt: 1.2, ml: 3 }} >
							<Typography variant="h6" color="#113343">
								<Link to="/" style={{ textDecoration: 'none', color: "black" }}>Pachacho Library</Link>
							</Typography>
						</Grid>

						<Grid container item xs={9} sx={{ mt: 1 }}>
							<Tabs value={value} onChange={handleChange}>
								<Tab label="Books" onClick={() => navigate("/books")} />
								<Tab label="My Loans" onClick={() => navigate("/loans")} />
							</Tabs>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box >
	)
}