//fetch api: fetch(url,{method:method,body:body,headers:headers})

//~using then catch
// fetch("https://fakestoreapi.com/products", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     if (!response.ok) throw new Error("Network response was not ok");
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//~using async await
// const cardContainer = document.querySelector(".card-container");

// const fetchData = async () => {
//   try {
//     cardContainer.innerHTML = "Loading...";
//     const response = await fetch("https://fakestoreapi.com/products");
//     console.log(response);
//     if (!response.ok) throw new Error(`Response status: ${response.status}`);
//     const data = await response.json();
//     console.log(data);
//     if (data.length > 0) cardContainer.innerHTML = "data loaded successfully";
//     cardContainer.innerHTML = "no data found";
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// fetchData();
// const fetchData = async () => {
//   try {
//     cardContainer.innerHTML = "Loading...";
//     const response = await fetch("data.json");
//     console.log(response);
//     if (!response.ok) throw new Error(`Response status: ${response.status}`);
//     const data = await response.json();
//     console.log(data);
//     if (data.length > 0) {
//       cardContainer.innerHTML = "data loaded successfully";
//     } else {
//       cardContainer.innerHTML = "no data found";
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// fetchData();
