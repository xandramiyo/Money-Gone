import { useLocation } from 'react-router-dom'
import CategoryTable from '../../components/CategoryTable/CategoryTable'
import { Typography } from '@mui/material';

export default function CategoryDetails({ categories }) {
	const location = useLocation()
	const { category } = location.state

	return (
		<>
			<Typography variant="h4" component="h1" sx={{mt: '1rem'}}>{category.name}</Typography>
			<CategoryTable category={category} />
		</>
	)
}