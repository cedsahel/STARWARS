import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./fiche.css"

export default function Character() {
	const params = useParams()
	const id = params.id
	const [data, setData] = useState()
	const [vehicles, setVehicles] = useState([])
	const [starships, setStarships] = useState([])
	const [films, setFilms] = useState([])


	useEffect(() => {
		fetch("https://swapi.dev/api/people/" + id)
			.then(res => {
				return res.json()
			})
			.then(resultat => {
				setData(resultat)
				if (resultat.vehicles.length > 0) {
					let vehiclesArray = resultat.vehicles
					vehiclesArray.forEach(element => {
						fetch(element)
							.then(res => {
								return res.json()
							})
							.then((resultat) => {
								setVehicles(old => [...old, resultat])
								// console.log(resultat)
							})
					});
				}
				if (resultat.films.length > 0) {
					let filmsArray = resultat.films
					filmsArray.forEach(element => {
						fetch(element)
							.then(res => {
								return res.json()
							})
							.then((resultat) => {
								setFilms(old => [...old, resultat])
								// console.log(resultat)
							})
					});
				}
				if (resultat.starships.length > 0) {
					let starShipsArray = resultat.starships
					starShipsArray.forEach(element => {
						fetch(element)
							.then(res => {
								return res.json()
							})
							.then((resultat) => {
								setStarships(old => [...old, resultat])
								// console.log(resultat)
							})
					});
				}
			})
	}, [])

	console.log(starships);

	return <div className='perso'>
		<div className='head'>
			<div className="photo"></div>
			<div className="info">
				<h4>informations</h4>
				<p>nom : {data?.name.toLowerCase()}</p>
				<p>taille : {data?.height} cm</p>
				<p>genre : {data?.gender}</p>
				<p>poids : {data?.mass} kg</p>
				<p>date de naissance : {data?.birth_year}</p>
				<p>couleur de peau : {data?.skin_color}</p>
				<p>couleur de cheveux : {data?.hair_color}</p>
				<p>couleur de yeux : {data?.eye_color}</p>
			</div>
		</div>
		<div>
			<h3>vehicules</h3>
			{vehicles.map((vehicle, key) => (
				<p key={key}><a>{vehicle.name}</a></p>
			))}
		</div>
		<div>
			<h3>vaisseaux </h3>
			{starships.map((starship, key) => (
				<p key={key}><a>{starship.name}</a></p>
			))}
		</div>
		<div>
			<h3>films</h3>
			{films.map((film, key) => (
				<p key={key}><a href='/films/1'>{film.title}</a></p>
			))}
		</div>
	</div>;
}
