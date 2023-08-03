const apiKey = "FiYKvJpN8cu1luM2uFNABYSbgWRPU7gKmI4VHx9I";
const category = "Linux";
const limit = 10;

var questions = {};

fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&limit=${limit}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    questions = data;
  })
  .catch((error) => {
    console.error("Error fetching questions:", error);
  }).then(()=>{console.log((questions[0]));});
