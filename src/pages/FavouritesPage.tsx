import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function FavouritesPage() {
	const { favourites } = useAppSelector(state => state.github)
	console.log(favourites)

	if (favourites.length === 0) return <p className="text-center">No items.</p>

	return (
		<div className="flex justify-center pt-10 mx-auto h-auto w-screen ">
			<ul className="list-none">
				{favourites.map(f => (
					<li className="flex justify-center" key={f}>
						<a className="border p-4 hover:shadow-md hover:bg-gray-100 transition-all w-screen" href={f} target="_blank"  rel="noreferrer">{f}</a>
					</li>
				))}
			</ul>
		</div>
	)
}