import * as React from 'react';
import { getEmail } from './Login';
import { useState, useEffect } from 'react';

var user = '';
var userEmail = getEmail();

/*	
	ClientORAdmin

	Determina el rol del usuario que se encuentra logeado en la sesión actual
	para así separar las funcionalidades a las que puede acceder el usuario
	según su rol
*/

const ClientORAdmin = () => {

	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await fetch('http://localhost:4000/users')
		const data = await response.json()
		setUsers(data)
	};
	useEffect(() => { loadUsers() }, [])

	for (var i = 0; i < users.length; i++) {
        if (users[i].email === userEmail) {
            user = users[i].roles;
        } else {
            console.log('User not found')
        }
    }

    console.log('rol:', user)
}

export default ClientORAdmin;