// API Configuration
const API_URL = "http://localhost:3000";

// DOM Elements
const productContainer = document.getElementById("product-container");
const productCount = document.getElementById("product-count");
const addProductForm = document.getElementById("add-product-form");
const categorySelect = document.getElementById("category");
const errorFormElement = document.getElementById("error");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const descriptionInput = document.getElementById("description");
// -------------------------------------------------------------------
// 1. GET Request: Fetch products and render them (Implemented)
// -------------------------------------------------------------------
const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching data:", error);
    productContainer.innerHTML = `
            <div style="color: red; padding: 20px; text-align: center; grid-column: 1/-1;">
                Error loading products. Ensure json-server is running on ${API_URL}
            </div>
        `;
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    const categories = await response.json();
    renderCategories(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
// -------------------------------------------------------------------
// 1. GET Request: Fetch single product and render them (Implemented)
// -------------------------------------------------------------------
const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    const product = await response.json();
    renderProducts([product]);
  } catch (error) {
    console.log(error);
  }
};
// rennder categories to the ui
const renderCategories = (categories) => {
  categorySelect.innerHTML = ""; // Clear existing options
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });
};

// Render products to the UI
const renderProducts = (products) => {
  // Update count
  productCount.textContent = `${products.length} product${products.length !== 1 ? "s" : ""}`;

  // Clear container
  productContainer.innerHTML = "";

  if (products.length === 0) {
    productContainer.innerHTML = `<div class="loader">No products found. Add one!</div>`;
    return;
  }

  // Create and append cards
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <div class="card-image" onclick="fetchSingleProduct(${product.id})">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400?text=No+Image'">
            </div>
            <div class="card-content">
                <span class="card-category">${product.category}</span>
                <h3 class="card-title" title="${product.title}">${product.title}</h3>
                <p class="card-description" title="${product.description}">${product.description}</p>
                
                <div class="card-footer">
                    <span class="card-price">$${Number(product.price).toFixed(2)}</span>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `;

    productContainer.appendChild(card);
  });
};

// -------------------------------------------------------------------
// 2. POST Request: Add a new product (PLACEHOLDER for lesson)
// -------------------------------------------------------------------
addProductForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const price = priceInput.value;
  const category = categorySelect.value;
  const image = imageInput.value;
  const description = descriptionInput.value;

  if (!title || !price || !category || !image || !description) {
    errorFormElement.textContent = "Please fill all the fields";
    errorFormElement.style.display = "block";
    return;
  }

  errorFormElement.style.display = "none"; // Clear previous errors

  const newProduct = { title, price, category, image, description };

  await addProduct(newProduct);
});

const addProduct = async(product) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) throw new Error("Can't add this product");

    // Clear form
    titleInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    descriptionInput.value = "";

    // Only refresh AFTER the POST succeeds
    fetchProducts();
  } catch (error) {
    console.error(error);
    errorFormElement.textContent = error.message;
    errorFormElement.style.display = "block";
  }
}


// -------------------------------------------------------------------
// 3. DELETE Request: Remove a product (PLACEHOLDER for lesson)
// -------------------------------------------------------------------
const deleteProduct = (id) => {
  // ~~~ DELETE LOGIC PLACEHOLDER ~~~
  const deleteProductReq = async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Can't delete this product");
      }
      const data = await response.json();
      console.log(data);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  deleteProductReq(id);

  // Hint for the lesson:
  // 1. fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' })
  // 2. Handle response
  // 3. fetchProducts() again to refresh list
};

// Initial Fetch on Page Load
fetchProducts();
fetchCategories();
