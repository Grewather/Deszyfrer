const selectCipherType = document.querySelector(".selCiphers");
const caesarCipherSection = document.querySelector(".CaesarCipherSection");
const phoneKeypadCipher = document.querySelector(".PhoneKeypadCipher");
let gaderypolukiSection = document.querySelector(".gaderypolukiSection");
const textToDecode = document.querySelector(".cipherTranslateBox");
const resultBox = document.querySelector("#resultBox");
const copyResult = document.querySelector("#copyResult");

let gaderySectKey = document.querySelector("#gaderypolukiKey");

const gaderypolukiEncode = document.querySelector("#gaderypolukiEncode");

const caesarCipherEncode = document.querySelector("#caesarCipherEncode");
const errorInf = document.querySelector("#errorInf");

const gaderypolukiKey = {
  A: "G",
  a: "g",
  g: "a",
  G: "A",
  D: "E",
  d: "e",
  E: "D",
  e: "d",
  R: "Y",
  r: "y",
  Y: "R",
  y: "r",
  P: "O",
  p: "o",
  O: "P",
  o: "p",
  L: "U",
  l: "u",
  U: "L",
  u: "l",
  K: "I",
  k: "i",
  I: "K",
  i: "k",
};
const koniecMaturyKey = {
  K: "O",
  k: "o",
  O: "K",
  o: "k",
  N: "I",
  n: "i",
  I: "N",
  i: "n",
  E: "C",
  e: "c",
  C: "E",
  c: "e",
  M: "A",
  m: "a",
  A: "M",
  a: "m",
  T: "U",
  t: "u",
  U: "T",
  u: "t",
  R: "Y",
  r: "y",
  y: "r",
  Y: "R",
};
const malinowebutyKey = {
  M: "A",
  m: "a",
  A: "M",
  a: "m",
  L: "I",
  l: "i",
  I: "L",
  i: "l",
  N: "O",
  n: "o",
  O: "N",
  o: "n",
  W: "E",
  w: "e",
  E: "W",
  e: "w",
  B: "U",
  b: "u",
  U: "B",
  u: "b",
  T: "Y",
  t: "y",
  y: "t",
  Y: "T",
};
// zmiana sekcji
selectCipherType.onchange = (e) => {
  let selectedValue =
    selectCipherType.options[selectCipherType.selectedIndex].text;
  let activeElement = document.querySelector(".active");
  if (selectedValue == "GADERYPOLUKI") {
    activeElement.classList.remove("active");
    gaderypolukiSection.classList.add("active");
  } else if (selectedValue == "Szyfr cezara") {
    activeElement.classList.remove("active");
    caesarCipherSection.classList.add("active");
  } else if (selectedValue == "Szyfr komórkowy") {
    activeElement.classList.remove("active");
    phoneKeypadCipher.classList.add("active");
  }
};
let errValue = document.querySelector("#errValue");
gaderypolukiEncode.addEventListener("click", (e) => {
  if (!textToDecode.value) {
    textToDecode.style.borderColor = "red";
    errValue.style.color = "red";
    errValue.innerHTML = "Puste pole";
    return;
  }
  textToDecode.style.borderColor = "black";
  errValue.innerHTML = "";
  encodeGaderypoluki(textToDecode.value);
});

let encodeGaderypoluki = (decodeTxt) => {
  if (gaderySectKey.value == "GA-DE-RY-PO-LU-KI") {
    decodeTxt = decodeTxt.replace(
      /A|a|g|G|D|d|E|e|R|r|Y|y|P|p|O|o|L|l|U|u|K|k|I|i/gi,
      (let = (mat) => {
        return gaderypolukiKey[mat];
      })
    );
    showResult(decodeTxt);
  } else if (gaderySectKey.value == "KO-NI-EC-MA-TU-RY") {
    decodeTxt = decodeTxt.replace(
      /K|k|O|o|N|n|I|i|E|e|C|c|M|m|A|a|T|t|U|u|R|r|Y|y/gi,
      (let = (mat) => {
        return koniecMaturyKey[mat];
      })
    );
    showResult(decodeTxt);
  } else if (gaderySectKey.value == "MA-LI-NO-WE-BU-TY") {
    decodeTxt = decodeTxt.replace(
      /M|m|A|a|L|l|I|i|N|n|O|o|W|w|E|e|B|b|U|u|T|t|Y|y/gi,
      (let = (mat) => {
        return malinowebutyKey[mat];
      })
    );
    showResult(decodeTxt);
  }
};

//
let showResult = (textToShow) => {
  resultBox.value = textToShow;
};
copyResult.addEventListener("click", () => {
  navigator.clipboard.writeText(resultBox.value).then(() => {
    const orginalBtnText = copyResult.innerHTML;
    copyResult.innerHTML = "Skopiowane!";
    setTimeout(function () {
      copyResult.innerHTML = orginalBtnText;
    }, 750);
  });
});
