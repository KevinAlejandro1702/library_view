import { React } from 'react'
import { Grid, Button } from '@mui/material'


/*	
	StartPage

	La ruta de inicio de la página que muestra el nombre de la libreria y los botones
  para crear un nuevo usuario o ingresar
*/

function StartPage() {
  return (
    <Grid container
      sx={{
        width: 1349,
        height: 764,
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/817048757946417194/1007541383256612974/bginit.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    </Grid>
  )
}

export default StartPage