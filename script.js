let userName = "";
const h1 = document.getElementById("name");
const onRevealClick = async () => {
  try {
    const res = await fetch(`https://api.genderize.io?name=${userName}`);
    const data = await res.json();

    const img = document.querySelector("img");
    console.log(img);
    if (data.gender === "female") {
      img.src =
        "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png";
    } else {
      img.src = "https://cdn-icons-png.flaticon.com/512/3233/3233508.png";
    }
    h1.textContent = userName;
  } catch (err) {}
};
//
const onChangeHandler = (e) => {
  userName = e.target.value;
  console.log(userName);
};
