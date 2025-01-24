interface CategoryProps {
    params: {
      categories: string[];
      searchParamas?: string;
    }
} 

export default async function Category({params} : CategoryProps){
    const resolvedParams = await params;
    const { categories } = resolvedParams;
    
    
    return (
      <h1>
        Categoría dinámica: { categories }
      </h1>
    )
}