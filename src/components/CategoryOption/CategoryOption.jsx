export default function CategoryOption({category}) {
	return(
		<>
			<option value={category._id}>{category.name}</option>
		</>
	)
}