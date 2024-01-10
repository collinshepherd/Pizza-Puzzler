// async function fetchData(req) {
//   try {
//     // const apiUrl = `http://localhost:3001/api/pizza/${req.session.user_id}`; // For website
//     // const apiUrl = `http://localhost:3001/api/pizza/${req.session.params.id}`; // For insomnia testing
//     console.log("Fetching URL:", apiUrl);
//     const pizzaData = await fetch(apiUrl, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });
//     const jsonData = await pizzaData.json();
//     console.log(jsonData);
//   } catch (error) {
//     console.error(error);
//   }
// }
