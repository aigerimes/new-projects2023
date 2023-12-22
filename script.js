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
        "https://thumbs.dreamstime.com/b/women-s-bathroom-sign-vector-design-isolated-white-background-woman-sign-symbol-woman-s-bathroom-sign-symbol-vector-180155886.jpg";
    } else {
      img.src =
        "https://media.compliancesigns.com/media/catalog/product/m/e/mens-boys-sign-rrep-7010-black_on_white_1000.gif";
    }
    h1.textContent = userName;
  } catch (err) {}
};
//
const onChangeHandler = (e) => {
  userName = e.target.value;
  console.log(userName);
};
