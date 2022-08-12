import { useEffect, useState } from "react";
import { Paper, Button, Card, Typography, CardContent, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

/*	
	Loan

	(admin) Esta muestra los prestamos que han realizado los distintos usuarios y toda
	su información relacionada
	(client) Muestra los prestamos que el usuario en la sesión actual ha realizado

	Obtiene la información a través de la conexión con la base de datos
*/

export default function Loan() {

	const navigate = useNavigate();
	const [loans, setLoans] = useState([]);

	const loadLoans = async () => {
		const response = await fetch('http://localhost:4000/loans')
		const data = await response.json()
		setLoans(data)
	};
	useEffect(() => { loadLoans() }, [])


	return (
		<Box sx={{ mt: 3, mb: 3 }}>
			<h2>Loans</h2>

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
								<TableCell> Loan</TableCell>
								<TableCell> Loan date</TableCell>
								<TableCell> Devolution date</TableCell>
								<TableCell> User</TableCell>
								<TableCell> Book</TableCell>
								<TableCell> Delivered</TableCell>
								<TableCell> </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{loans.map((loan) => (
								<TableRow key={loan.id_loan}>
									<TableCell>{loan.id_loan}</TableCell>
									<TableCell>{loan.loan_date}</TableCell>
									<TableCell>{loan.devolution_date}</TableCell>
									<TableCell>{loan.id_user}</TableCell>
									<TableCell>{loan.isbn}</TableCell>
									<TableCell>{loan.delivered}</TableCell>
									<TableCell>
										<Button 
											variant='contained'
											style={{ marginLeft: ".5rem" }}										
										>
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


export function LoansClient() {

	const [loans, setLoans] = useState([]);

	const loadLoans = async () => {
		const response = await fetch('http://localhost:4000/loans')
		const data = await response.json()
		setLoans(data)
	};
	useEffect(() => { loadLoans() }, [])

	return (
		<Box sx={{ mt: 3, mb: 3 }}>
			<h2>Loans Client</h2>

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
								<TableCell> Loan</TableCell>
								<TableCell> Loan date</TableCell>
								<TableCell> Devolution date</TableCell>
								<TableCell> User</TableCell>
								<TableCell> Book</TableCell>
								<TableCell> Delivered</TableCell>
								<TableCell> </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{loans.map((loan) => (
								<TableRow key={loan.id_loan}>
									<TableCell>{loan.id_loan}</TableCell>
									<TableCell>{loan.loan_date}</TableCell>
									<TableCell>{loan.devolution_date}</TableCell>
									<TableCell>{loan.id_user}</TableCell>
									<TableCell>{loan.isbn}</TableCell>
									<TableCell>{loan.delivered}</TableCell>
									<TableCell>
										<Button 
											variant='contained'
											style={{ marginLeft: ".5rem" }}
										>
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