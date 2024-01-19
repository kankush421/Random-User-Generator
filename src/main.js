const userGenerateButton = document.getElementById("generate-user");

function generateUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]));
}

function displayUser(user) {
  const userDisplay = document.getElementById("User_Info");

  userDisplay.innerHTML = "";

  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }

  const div = document.createElement("div");
  div.className = "flex justify-between";

  const div1 = document.createElement("div");
  div1.className = "flex";
  const img = document.createElement("img");
  img.className = "w-48 h-48 rounded-full mr-8";
  img.src = user.picture.large;

  const div2 = document.createElement("div");
  div2.className = "space-y-3";

  const p1 = document.createElement("p");
  p1.className = "text-xl";
  p1.innerHTML = `<span class="font-bold">Name: </span>${user.name.first} ${user.name.last}`;

  const p2 = document.createElement("p");
  p2.className = "text-xl";
  p2.innerHTML = `<span class="font-bold">Email: </span>${user.email}`;

  const p3 = document.createElement("p");
  p3.className = "text-xl";
  p3.innerHTML = `<span class="font-bold">Phone: </span>${user.phone}`;

  const p4 = document.createElement("p");
  p4.className = "text-xl";
  p4.innerHTML = `<span class="font-bold">Location: </span>${user.location.city} ${user.location.country}`;

  const p5 = document.createElement("p");
  p5.className = "text-xl";
  p5.innerHTML = `<span class="font-bold">Age: </span>${user.dob.age}`;

  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div1.appendChild(img);
  div.appendChild(div1);
  div.appendChild(div2);
  userDisplay.appendChild(div);
}

userGenerateButton.addEventListener("click", generateUser);
