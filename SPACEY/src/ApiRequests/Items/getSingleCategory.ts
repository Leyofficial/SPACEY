export const getSingleCategory = async (item: string) => {
  const response = await fetch(
    `https://spacey-server-two.vercel.app/api/product?category=${item}`
  );

  const data = await response.json();

  return data;
};
