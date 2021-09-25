function fore() {
  var kata = "Saya ingin belajar bersama";
  var kata2 = kata.split(" ");
  kata2.forEach((item, i) => {
    console.log("Item :", item ,"index ke", i);
  });
}

fore()
