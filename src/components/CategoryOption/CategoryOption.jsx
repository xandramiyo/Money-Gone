import MenuItem from '@mui/material/MenuItem';

export default function CategoryOption({category}) {
	return(
		<>
			<MenuItem 
				value={category._id} 
				label="Category"
			>
				{category.name}
			</MenuItem>
		</>
	)
}