export const fetchData = async (skip = 0, count = false) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/images?skip=${skip}&limit=10&count=${count}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
