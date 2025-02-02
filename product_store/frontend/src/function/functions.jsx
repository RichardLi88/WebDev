export async function createProduct(product) {
  try {
    const result = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!result.ok) {
      console.log("error");
      return "Error: failed to create Product";
    }
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

    if (!result.ok) {
      console.log("error");
      return "Error: failed to get products";
    }
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
    if (!result.ok) {
      console.log("error");
      return "Error: failed to delete product data";
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateProduct(newProduct, productId) {
  try {
    const result = await fetch(
      `http://localhost:5000/api/products/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    );
    if (!result.ok) {
      console.log("error");
      return "Error: failed to update product data";
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
