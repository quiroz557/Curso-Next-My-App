interface CategoryProps {
    params: Promise<{
        category: string;
    }>
} 

export default async function Category({params} : CategoryProps){
    const resolvedParams = await params;
    const { category } = resolvedParams;
    
    return (
      <h1>
        Categoría dinámica: { category }
      </h1>
    )
}