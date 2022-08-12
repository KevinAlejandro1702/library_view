import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { Container } from '@mui/material'

import BookList from "./components/BookList"
import BookForm from "./components/BookForm"
import Navbar  from "./components/Navbar"
import Login from "./components/Login"
import UserList from "./components/UserList"
import Loan, {LoansClient} from "./components/Loan"
import SignUp from "./components/SignUp"
import StartPage from "./components/StartPage"

import './App.css';

/*	
	App (Función principal)

	Es la función que permite asignar las rutas a los componentes y además los
	contiene para mostrarlos en el host asignado
*/

export default function App() {

	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>

			<Container>
				<Routes>
					<Route exact path='/books' element={<BookList />} />
					<Route path='/users' element={<UserList />} />
					<Route path='/loans' element={<Loan />} />
					<Route exact path='/books/new' element={<BookForm />} />
					<Route path='/books/:isbn/edit' element={<BookForm />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}