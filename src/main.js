import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import { router } from './router/index.routes'

router(window.location.hash) //Carga el contenido a penas inicia

window.addEventListener('hashchange', () => {
	router(window.location.hash) //Al cambiar, cambia el contenido
})