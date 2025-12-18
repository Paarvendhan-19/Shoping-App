const rawEnvUrl = import.meta.env.VITE_API_URL || "http://localhost:2796/api";
// Remove any trailing slash from the env var and then ensuring /api suffix
const normalizedBase = rawEnvUrl.endsWith('/') ? rawEnvUrl.slice(0, -1) : rawEnvUrl;
export const API_URL = normalizedBase.endsWith('/api') ? normalizedBase : `${normalizedBase}/api`;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/Product`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/Product/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
