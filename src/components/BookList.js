import { useEffect, useState } from 'react'
import { Paper, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'

import { getRol } from './Login'


/*
  BookList

  Obtiene los registros desde la conexión con la base de datos
  y muestra los libros que han sido creados

  Además permite enviar una instrucción de edición(update) y de eliminar(delete)
  a través de la misma conexión

  El Botón para crear un nuevo libro dirige a la función y ruta (BookForm)
*/

export default function BookList() {
	return (
		<div>
			{(getRol() == 'Admin') ? (<BookListAdmin />)
				: (getRol() == 'Client') ? (<BookListClient />) : (<BookListAdmin />)}
		</div>
	)
}


function BookListAdmin() {
	const navigate = useNavigate();

	const [books, setBooks] = useState([]);

	const loadBooks = async () => {
		const response = await fetch('http://localhost:4000/books')
		const data = await response.json()
		setBooks(data)
	};

	const handleDelete = async (id) => {

		Swal.fire({
			title: 'Do you want to delete this book?',
			showConfirmButton: false,
			showDenyButton: true,
			showCancelButton: true,
			denyButtonText: `Delete`,

		}).then(async (result) => {

			if (result.isDenied) {
				Swal.fire({ title: 'Book deleted', showConfirmButton: false, timer: 1600 })

				try {
					const response = await fetch(`http://localhost:4000/books/${id}`, {
						method: "DELETE",
					})
					setBooks(books.filter((book) => book.isbn !== id));
				}
				catch (error) {
					console.log(error)
				}
			}
		})
	};

	useEffect(() => { loadBooks() }, [])

	return (
		<Box sx={{ mt: 3 }}>
			<h2>Book List</h2>

			<Paper sx={{
				width: '100%',
				marginTop: 3,
				overflowy: 'auto',
			}} >

				<TableContainer sx={{ height: 500 }}>
					<Table sx={{ height: 'max-content' }}>
						<TableHead>
							<TableRow>
								<TableCell> isbn</TableCell>
								<TableCell> title</TableCell>
								<TableCell> score</TableCell>
								<TableCell> date</TableCell>
								<TableCell> category</TableCell>
								<TableCell> author</TableCell>
								<TableCell> editorial</TableCell>
								<TableCell> </TableCell>
								<TableCell> </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{books.map((book) => (
								<TableRow key={book.isbn}>
									<TableCell> {book.isbn}</TableCell>
									<TableCell> {book.title}</TableCell>
									<TableCell> {book.score}</TableCell>
									<TableCell> {book.published_date}</TableCell>
									<TableCell> {book.name_category}</TableCell>
									<TableCell> {book.name_author}</TableCell>
									<TableCell> {book.name_editorial}</TableCell>
									<TableCell>
										<Button variant='contained'
											onClick={() => navigate(`/books/${book.isbn}/edit`)}>
											Edit
										</Button>
									</TableCell>
									<TableCell>
										<Button variant='contained'
											onClick={() => handleDelete(book.isbn)}
											style={{ marginLeft: 2 }}>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>

			<Grid container justifyContent='flex-end'>
				<Button variant='contained'
					sx={{ margin: '.7rem' }}
					onClick={() => navigate("/books/new")}>
					New Book
				</Button>
			</Grid>
		</Box>

	)
}


function BookListClient() {
	const navigate = useNavigate();

	const [books, setBooks] = useState([]);

	const loadBooks = async () => {
		const response = await fetch('http://localhost:4000/books')
		const data = await response.json()
		setBooks(data)
	};

	useEffect(() => { loadBooks() }, [])

	return (
		<Box sx={{ mt: 3 }}>
			<h2>Book List</h2>

			<Paper sx={{
				width: '100%',
				marginTop: 3,
				overflowy: 'auto',
			}} >

				<TableContainer sx={{ height: 500 }}>
					<Table sx={{ height: 'max-content' }}>
						<TableHead>
							<TableRow>
								<TableCell> isbn</TableCell>
								<TableCell> title</TableCell>
								<TableCell> score</TableCell>
								<TableCell> date</TableCell>
								<TableCell> category</TableCell>
								<TableCell> author</TableCell>
								<TableCell> editorial</TableCell>
								<TableCell> </TableCell>
								<TableCell> </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{books.map((book) => (
								<TableRow key={book.isbn}>
									<TableCell> {book.isbn}</TableCell>
									<TableCell> {book.title}</TableCell>
									<TableCell> {book.score}</TableCell>
									<TableCell> {book.published_date}</TableCell>
									<TableCell> {book.name_category}</TableCell>
									<TableCell> {book.name_author}</TableCell>
									<TableCell> {book.name_editorial}</TableCell>
									<TableCell>
										<Button variant='contained'
											onClick={() => console.log('Libro prestado:', book.title)}>
											Borrow
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	)
}
