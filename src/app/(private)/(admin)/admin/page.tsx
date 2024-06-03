'use client'

import jsonServerProvider from 'ra-data-json-server'
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin'

const data = jsonServerProvider('https://jsonplaceholder.typicode.com')
export default function Page() {
	return (
		<Admin dataProvider={data}>
			<Resource
				name='users'
				list={ListGuesser}
				edit={EditGuesser}
				recordRepresentation={'name'}
			/>
			<Resource
				name='users'
				list={ListGuesser}
				edit={EditGuesser}
				recordRepresentation={'title'}
			/>
			<Resource name='comments' list={ListGuesser} edit={EditGuesser} />
		</Admin>
	)
}
