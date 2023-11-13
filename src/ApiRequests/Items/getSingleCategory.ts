export const getSingleCategory = async (item: string) => {
    const response = await fetch(`https://spacey-server.vercel.app/api/product?category=${item}`)

    const data = await response.json();
    console.log(data)
    return data;
}