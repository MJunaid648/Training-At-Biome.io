// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// }

async function fetchDataRepeatedly(fetchFunction, maxRepeatCycles) {
  for (let attempt = 1; attempt <= maxRepeatCycles; attempt++) {
    try {
      const data = await fetchFunction();
      console.log("Data fetched successfully:", data);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message);
      console.log(`Retrying...`);
    }
    if (attempt === maxRepeatCycles) {
      console.log("Max attempts reached. Exiting.");
    }
  }
}

fetchDataRepeatedly(fetchData, 3);

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      throw new Error(`Error fetching data: ${err.message}`);
    });
}
