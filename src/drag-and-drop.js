

const combinations = {
  "Fire+Water": "Steam",
  "Water+Fire": "Steam",
  "Earth+Water": "Clay",
  "Water+Earth": "Clay",
  "Air+Fire": "Energy",
  "Fire+Air": "Energy",
  "Air+Earth": "Dust",
  "Earth+Air": "Dust",
  "Fire+Earth": "Lava",
  "Earth+Fire": "Lava",
  "Water+Air": "Cloud",
  "Air+Water": "Cloud",
  "Water+Cloud": "Rain",
  "Cloud+Water": "Rain",
  "Rain+Earth": "Plant",
  "Earth+Rain": "Plant",
  "Plant+Fire": "Ash",
  "Fire+Plant": "Ash",
  "Earth+Energy": "Metal",
  "Energy+Earth": "Metal",
  "Metal+Fire": "Tool",
  "Fire+Metal": "Tool",
  "Plant+Water": "Grass",
  "Water+Plant": "Grass",
  "Grass+Earth": "Life",
  "Earth+Grass": "Life",
  "Life+Energy": "Human",
  "Energy+Life": "Human",
  "Human+Tool": "Civilization",
  "Tool+Human": "Civilization",
};


let elements = document.getElementsByClassName("element");
let mixingZone = document.getElementById("mixing-zone");

let currentMix = [];


for (let element of elements) {
  element.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text/html", e.target.outerHTML);
    e.dataTransfer.setData("text/plain", e.target.dataset.name);
  });
}


mixingZone.addEventListener("dragover", function(e) {
  e.preventDefault();
});

mixingZone.addEventListener("drop", function (e) {
  e.preventDefault();

  if (currentMix.length >= 2) {
    alert("You can only mix 2 elements at a time!");
    return;
  }

  const elementName = e.dataTransfer.getData("text/plain");
  if (currentMix.includes(elementName)) return;

  currentMix.push(elementName);

  let elementHTML = e.dataTransfer.getData("text/html");
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = elementHTML;
  const elementNode = tempDiv.firstChild;
  elementNode.draggable=false;
  elementNode.classList.add("mixing-element");

  let mixContainer = document.querySelector(".mix-container");
  if(!mixContainer){
    mixContainer = document.createElement("div");
    mixContainer.className = "mix-container";
    mixingZone.appendChild(mixContainer);
  }
  mixContainer.appendChild(elementNode);


  if (currentMix.length === 1) {
    const plus = document.createElement("span");
    plus.textContent = " + ";
    plus.className = "mix-symbol";
    mixContainer.appendChild(plus);
  } else if (currentMix.length === 2) {
    const equal = document.createElement("span");
    equal.textContent = " = ";
    equal.className = "mix-symbol";
    mixContainer.appendChild(equal);


    const key = `${currentMix[0]}+${currentMix[1]}`;
    const resultName = combinations[key];
    let resultElement;

    if (resultName) {
      const original = document.querySelector(
        `.elements-container .element[data-name="${resultName}"]`
      );

      if (original) {
        original.classList.remove("hidden-element");
        original.style.display = "inline-block";

        resultElement = original.cloneNode(true);
        resultElement.draggable = false;
        resultElement.classList.add("mixing-element");
      }
    }
    if (resultElement) {
      mixContainer.appendChild(resultElement);

    } else {
      const unknown = document.createElement("div");
      unknown.textContent = "❌ Unknown";
      unknown.className = "mixing-element";
      mixContainer.appendChild(unknown);
    }

    setTimeout(function() {
        currentMix = [];
        $(mixContainer).remove();
    }, 1500);

  }

});
