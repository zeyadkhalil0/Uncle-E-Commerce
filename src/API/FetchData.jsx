export const fetchProducts = async (endpoint = "home") => {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};
