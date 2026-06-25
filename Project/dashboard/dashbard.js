async function getStudents() {
  token = localStorage.getItem("token");

  let response = await fetch(
    "https://futurelabs-student-api.vercel.app/api/students/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  let data = await response.json();

  displayStudents(data);
}

getStudents();

function displayStudents(res) {
  let body = document.body;
  console.log(res.data);

  let total = document.createElement("p");

  total.textContent = `Total Students: ${res.data.length}`;
  body.appendChild(total);

  res.data.forEach((student) => {
    let studentName = document.createElement("p");

    studentName.textContent = `${student.firstName} ${student.lastName}`;
    body.appendChild(studentName);
  });
  // console.log(data)
}
