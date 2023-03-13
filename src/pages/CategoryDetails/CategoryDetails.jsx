// import category from "../../models/category";
import { useLocation } from 'react-router-dom'

export default function CategoryDetails({ categories }) {
	// console.log(categories)
	const location = useLocation()
	const { category } = location.state
	console.log("each", category)

	return (
		<>
			<h1>{category.name}</h1>
			
		</>
	)
}