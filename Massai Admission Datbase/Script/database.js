let LSdata = JSON.parse(localStorage.getItem("admission")) || [];

display(LSdata, ["Accept", "Reject"], onClick);

function onClick(el, index) {
  LSdata = LSdata.filter(function (ele, i) {
    if (i === index) {
      let LSdata2 =
        JSON.parse(
          localStorage.getItem("admission-" + el.toLowerCase()+"ed")
        ) || [];
      LSdata2.push(ele);
      localStorage.setItem(
        "admission-" + el.toLowerCase() + "ed",
        JSON.stringify(LSdata2)
      );
    }
    return i != index;
  });
  display(LSdata, ["Accept", "Reject"], onClick);
  localStorage.setItem("admission",JSON.stringify(LSdata));
}
