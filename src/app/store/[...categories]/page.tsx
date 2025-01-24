interface CategoryProps {
    params: {
      categories: string[];
    }
} 

export default async function Category({params} : CategoryProps){
    const resolvedParams = await params;
    const { categories } = resolvedParams;
    console.log(categories)
    
    return (
      <h1>
        Categoría dinámica: { categories }
      </h1>
    )
}