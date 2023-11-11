

export const getSingleCategory =  (item:string) => {
    fetch(`https://spacey-server.vercel.app/product?category=${item}`).then(res =>
        res.json()
    )
}