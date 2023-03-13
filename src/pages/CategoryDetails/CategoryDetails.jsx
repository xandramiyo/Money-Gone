// import category from "../../models/category";
import { useLocation } from 'react-router-dom'
import CategoryTable from '../../components/CategoryTable/CategoryTable'

export default function CategoryDetails({ categories }) {
	const location = useLocation()
	const { category } = location.state

	return (
		<>
			<h1>{category.name}</h1>
			<CategoryTable category={category} />
		</>
	)
}