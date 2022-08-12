import { useEffect, useState } from "react";
import { Paper, Button, Card, Typography, CardContent, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

/*	
	UserList

	Obtiene la información desde la base de datos para mostrar
	los usuarios registrados, permite al administrador eliminar
	usuarios
*/

export default function UserList() {

	const navigate = useNavigate();
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await fetch('http://localhost:4000/users')
		const data = await response.json()
		setUsers(data)
	};
	useEffect(() => { loadUsers() }, [])



	const handleDelete = async (id) => {
		try {
			const response = await fetch(`http://localhost:4000/users/${id}`, {
				method: "DELETE",
			})
			setUsers(users.filter((user) => user.id_user !== id));
		}
		catch (error) {
			console.log(error)
		}
	};

	return (
		<Box sx={{ mt: 3 }}>
			<h2>User List</h2>

			<Grid>
				<TextField
					sx={{ mt: 3, mb: 3 }}
					size="small"
					fullWidth
					label="🔍︎"
					placeholder="search lendings"
				/>
			</Grid>

			<Paper sx={{
				width: '100%',
				marginTop: 3,
				overflowy: 'auto',
			}} >

				<TableContainer sx={{ height: 500 }}>
					<Table sx={{ height: 'max-content' }}>
						<TableHead>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell>Full name</TableCell>
								<TableCell>Phone Number</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Address </TableCell>
								<TableCell>Role</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users.map((user) => (
								<TableRow>
									<TableCell>{user.id_user}</TableCell>
									<TableCell>{user.full_name}</TableCell>
									<TableCell>{user.cellphone}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>{user.address}</TableCell>
									<TableCell>{user.roles}</TableCell>
									<TableCell>
										<Button variant='contained'
											onClick={() => handleDelete(user.id_user)}
											style={{ marginLeft: ".5rem" }}>
											X
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>

		</Box>
	);
}