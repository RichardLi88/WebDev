export async function createProduct(product) {
  try {
    const result = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProducts() {
  try {
    const result = await fetch("http://localhost:5000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteProduct(productId) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
