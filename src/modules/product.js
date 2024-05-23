export const getAllMovesOfEsp = async () => {
    let res = await fetch("https://search.imdbot.workers.dev/?q=esp", config)
    let data = await res.json();
    return data;

}

export const getAllMovesNotEspecific = async () => {
    let res = await fetch("https://search.imdbot.workers.dev/?q=")
    let data = await res.json();
    return data;

}
/*FUNCIONALES PARA EL EXAMEN-------------------------------*/ 
//Filtrar películas por año de lanzamiento.
export const getAllMoviesForYearOfRelease = async (year) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=year&year=${year}`, config)
    let data = await res.json();
    return data;


}

//Filtrar películas por actor.
export const getAllMoviesForTheActor = async (actor) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=${actor}`, config)
    let data = await res.json();
    return data;

}

//Filtrar películas por rango de IMDb.
export const getAllMoviesForTheRangeOfImdb = async (min, max) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=imdb&min=${min}&max=${max}`, config)
    let data = await res.json();
    return data;
}
//Consulta los títulos de todas las películas.
export const getAllTitulesOfMovies = async () => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=title`, config)
    let data = await res.json();
    return data;
}

//Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV).
export const getAllTitulesAndYearsOfOriginalRangesToAllTheContents = async () => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=original`, config)
    let data = await res.json();
    return data;
}

//Consulta los identificadores y títulos de todas las películas.
export const getAllIdentificateAndTitulesOfAllTheMovies = async (titule,id) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=titule=${titule}&id=${id}`, config)
    let data = await res.json();
    return data;
}

//Consulta las URL completas y los tipos de objetos (películas y programas de TV).
export const getAllUrlAndTypeOfObjectsForMoviesAndTv = async (url,type) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=url=${url}&type=${type}`, config)
    let data = await res.json();
    return data;
}

//Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas.
export const getAllTitulesAndYearsOfOriginalRangesAndTypeOfObjectsToMovies = async (titule,year,type) => {
    let res = await fetch(`https://search.imdbot.workers.dev/?q=titule=${titule}&year=${year}&type=${type}`, config)
    let data = await res.json();
    return data;
}







/*JAVASCRIPT DEL TIPO QUE NOS DICE COMOP HACERLO  Y SON PRTE DEL JS*/

// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})