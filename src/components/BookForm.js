import { Grid, Box, Card, Typography, CardContent, TextField, Button, CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom'

import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2';


/*
  BookForm

  Esta función contiene la interfaz que permite la creación y edición de un libro

  Además se comunica con la api para enviar a la base de datos la información requerida
  para crear un nuevo registro

  Pueden seleccionarse las categorias, autores y editoriales ya creados o también
  crear nuevos

  Se utilizan distintos hooks para determinar la disposición de los elementos de
  la interfaz
*/

function BookForm() {

	const [pulsado, setPulsado] = useState(true);
	const [pulsado2, setPulsado2] = useState(true);
	const [pulsado3, setPulsado3] = useState(true);

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function BotonNuevo() {
		return (
			<Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={() => setPulsado(!pulsado)}
			>
				New
			</Button>
		)
	}

	function BotonEnviar() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={handleSubmitCategory}
			>
				Submit
			</Button >
		)
	}

	function BotonCargar() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={asignCategoryID}
			>
				Load
			</Button >
		)
	}


	function BotonNuevo2() {
		return (
			<Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={() => setPulsado2(!pulsado2)}
			>
				New
			</Button>
		)
	}

	function BotonEnviar2() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={handleSubmitAuthor}
			>
				Submit
			</Button >
		)
	}

	function BotonCargar2() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={asignAuthorID}
			>
				Load
			</Button >
		)
	}

	function BotonNuevo3() {
		return (
			<Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={() => setPulsado3(!pulsado3)}
			>
				New
			</Button>
		)
	}

	function BotonEnviar3() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={handleSubmitEditorial}
			>
				Submit
			</Button >
		)
	}

	function BotonCargar3() {
		return (
			< Button
				variant="contained"
				sx={{ mt: 1, ml: 3 }}
				onClick={asignEditorialID}
			>
				Load
			</Button >
		)
	}

	const asignCategoryID = () => {

		setPulsado(!pulsado)
		console.log(categories)
		var id = 0;

		for (var i = 0; i < categories.length; i++) {
			if (JSON.stringify(categories[i].name_category) === JSON.stringify(category.name_category)) {
				console.log('funciona')
				id = parseInt(categories[i].id_category)
			}
		}

		console.log('idCategory: ' + id)

		setBook({
			...book,
			id_category: id
		})
	}

	const [category, setCategory] = useState({
		name_category: '',
	});

	const handleSubmitCategory = async (e) => {
		e.preventDefault();
		setLoading(true);

		let config2 = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(category)
		}

		const res = await fetch('http://localhost:4000/categories', config2);
		const data = await res.json();

		setLoading(false);
		loadCategories();
		//console.log( JSON.stringify(book))     
	};

	const [categories, setCategories] = useState([]);
	const loadCategories = async () => {
		const response = await fetch('http://localhost:4000/categories')
		const data = await response.json()
		setCategories(data)
	};
	useEffect(() => { loadCategories() }, [])


	const asignAuthorID = () => {

		setPulsado2(!pulsado2)
		console.log(authors)
		var id = 0;

		for (var i = 0; i < authors.length; i++) {
			if (JSON.stringify(authors[i].name_author) === JSON.stringify(author.name_author)) {
				console.log('funciona')
				id = parseInt(authors[i].id_author)
			}
		}

		console.log('idAuthor: ' + id)

		setBook({
			...book,
			id_author: id
		})
	}

	const [author, setAuthor] = useState({
		name_author: '',
		nacionality: ''
	});

	const handleSubmitAuthor = async (e) => {
		e.preventDefault();
		setLoading(true);

		let config3 = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(author)
		}

		const res = await fetch('http://localhost:4000/authors', config3);
		const data = await res.json();

		setLoading(false);
		loadAuthors();
		//console.log( JSON.stringify(book))     
	};

	const [authors, setAuthors] = useState([]);
	const loadAuthors = async () => {
		const response = await fetch('http://localhost:4000/authors')
		const data = await response.json()
		setAuthors(data)
	};
	useEffect(() => { loadAuthors() }, [])


	const asignEditorialID = () => {
		setPulsado3(!pulsado3)
		console.log(editorials)
		var id = 0;

		for (var i = 0; i < editorials.length; i++) {
			if (JSON.stringify(editorials[i].name_editorial) === JSON.stringify(editorial.name_editorial)) {
				console.log('funciona')
				id = parseInt(editorials[i].id_editorial)
			}
		}

		console.log('idEditorial: ' + id)

		setBook({
			...book,
			id_editorial: id
		})
	}

	const [editorial, setEditorial] = useState({
		name_editorial: ''
	});

	const handleSubmitEditorial = async (e) => {
		e.preventDefault();
		setLoading(true);

		let config4 = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editorial)
		}

		const res = await fetch('http://localhost:4000/editorials', config4);
		const data = await res.json();

		setLoading(false);
		loadEditorials();
		//console.log( JSON.stringify(book))     
	};

	const [editorials, setEditorials] = useState([]);
	const loadEditorials = async () => {
		const response = await fetch('http://localhost:4000/editorials')
		const data = await response.json()
		setEditorials(data)
	};
	useEffect(() => { loadEditorials() }, [])

	const [book, setBook] = useState({
		title: '',
		score: 0,
		published_date: 0,
		id_category: 0,
		id_author: 0,
		id_editorial: 0,
	});

	const params = useParams();

	const handleChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
		console.log(book);
	};

	const inputChangeCategory = ({ target }) => {
		const { name, value } = target
		setCategory({
			...category,
			[name]: value
		})
	}

	const inputChangeAuthor = ({ target }) => {
		const { name, value } = target
		setAuthor({
			...author,
			name_author: value
		})
	}

	const inputChangeNacionality = ({ target }) => {
		const { name, value } = target
		setAuthor({
			...author,
			nacionality: value
		})
	}

	const inputChangeEditorial = ({ target }) => {
		const { name, value } = target
		setEditorial({
			...editorial,
			[name]: value
		})
	}

	const loadBook = async (isbn) => {
		const res = await fetch(`http://localhost:4000/books/${isbn}`)
		const data = await res.json()
		console.log(data)
		setBook({
			title: data.title,
			score: data.score,
			published_date: data.published_date,
			id_category: data.id_category,
			id_author: data.id_author,
			id_editorial: data.id_editorial,
		})
	}

	useEffect(() => {
		if (params.isbn) {
			loadBook(params.isbn);
		}
	}, [params.isbn])


	const handleSubmitBook = async (e) => {
		e.preventDefault();
		setLoading(true);

		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Book created successfully',
			showConfirmButton: false,
			timer: 1500
		})

		let config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(book)
		}

		const res = await fetch('http://localhost:4000/books', config);
		const data = await res.json();

		setLoading(false);
		//console.log( JSON.stringify(book))     
	};


	{/* ========================= COMPONENTES ============================ */ }


	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'>

			<Grid item xs={6}>
				<Card sx={{
					mt: 5,
					mb: 5,
					width: 465
				}} style={{ backgroundColor: '#FFFFFF', padding: "1rem" }}>

					<Typography variant="h5" color="black" sx={{ ml: 18, mt: 2, mb: 2 }}>
						Create Book
					</Typography>

					<CardContent>
						<form>
							<TextField
								name="title"
								value={book.title}
								variant='filled'
								label='title'
								sx={{
									display: 'block',
									mb: 2,
									width: 180
								}}

								onChange={handleChange}
							/>

							<TextField
								fullWidth
								select
								name="score"
								value={book.score}
								variant='filled'
								label="score"
								sx={{
									display: 'block',
									mb: 1,
									width: 180
								}}

								onChange={handleChange}
							>
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4</MenuItem>
								<MenuItem value={5}>5</MenuItem>
							</TextField>

							<TextField
								name='published_date'
								value={book.published_date}
								variant='filled'
								label='published date'
								sx={{
									display: 'block',
									mb: 2,
									width: 180
								}}
								onChange={handleChange}
							/>

							<Grid container>
								{!pulsado ? (
									<TextField
										fullWidth
										value={category.name_category}
										variant='filled'
										label="category"
										sx={{
											mb: 2,
											width: 180
										}}

										onChange={inputChangeCategory}
										name="name_category"
									/>
								) : (
									<TextField
										fullWidth
										select

										value={categories.name_category}
										variant='filled'
										label="category"
										sx={{
											mb: 2,
											width: 180
										}}
										onChange={handleChange}
										name="id_category"
									>
										{categories.map(category => (
											<MenuItem value={category.id_category} key={category.id_category}>
												{category.name_category}
											</MenuItem>
										))}
									</TextField>
								)}
								{pulsado ?
									(
										<Box>
											<BotonNuevo />
										</Box>

									) : (

										<Box>
											<BotonEnviar />
											<BotonCargar />
										</Box>
									)}
							</Grid>

							<Grid container>
								{!pulsado2 ? (
									<TextField
										fullWidth
										value={author.name_author}
										variant='filled'
										label="author"
										sx={{
											mb: 2,
											width: 180
										}}
										onChange={inputChangeAuthor}
										name="name_author"
									>
									</TextField>
								) : (
									<TextField
										fullWidth
										select
										value={book.id_author}
										variant='filled'
										label="author"
										sx={{
											mb: 2,
											width: 180
										}}
										onChange={handleChange}
										name="id_author"
									>
										{authors.map(author => (
											<MenuItem value={author.id_author} key={author.id_author}>
												{author.name_author}
											</MenuItem>
										))}
									</TextField>
								)}

								{pulsado2 ?
									(
										<Box>
											<BotonNuevo2 />
										</Box>

									) : (

										<Box>
											<BotonEnviar2 />
											<BotonCargar2 />
										</Box>
									)}

							</Grid>

							{!pulsado2 ?
								(
									<TextField
										fullWidth
										value={author.nacionality}
										variant='filled'
										label="nacionality"
										sx={{
											mb: 2,
											width: 180
										}}
										onChange={inputChangeNacionality}
										name="name_author"
									>
									</TextField>

								) : (
									<></>
								)}

							<Grid container>
								{!pulsado3 ? (
									<TextField
										fullWidth
										variant='filled'
										label="editorial"
										sx={{
											mb: 2,
											width: 180
										}}

										onChange={inputChangeEditorial}
										name="name_editorial"
									>

									</TextField>
								) : (
									<TextField
										fullWidth
										select
										variant='filled'
										label="editorial"
										sx={{
											mb: 2,
											width: 180
										}}
										onChange={handleChange}
										name="id_editorial"
									>
										{editorials.map(editorial => (
											<MenuItem value={editorial.id_editorial} key={editorial.id_editorial}>
												{editorial.name_editorial}
											</MenuItem>
										))}
									</TextField>
								)}

								{pulsado3 ?
									(
										<Box>
											<BotonNuevo3 />
										</Box>

									) : (
										<Box>
											<BotonEnviar3 />
											<BotonCargar3 />
										</Box>
									)}
							</Grid>

							<Button
								variant='contained'
								color='primary'
								type='submit'
								name='id_category'
								onClick={handleSubmitBook}
								sx={{
									ml: 20,
									mt: 3
								}}

								disabled={!book.title ||
									!book.score ||
									!book.published_date ||
									!book.id_category ||
									!book.id_author ||
									!book.id_editorial}
							>
								{loading ? (
									<CircularProgress color="inherit" size={24} />
								) : (
									"save"
								)}
							</Button>
						</form>
					</CardContent>

				</Card>
			</Grid>

		</Grid >

	)
}

export default BookForm;