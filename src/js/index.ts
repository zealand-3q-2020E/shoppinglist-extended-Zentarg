//Write your Typescript code here
let healthy : Array<string> = ["Cashew nuts", "Tomato", "Salad", "Cabbage"];

document.getElementById("newItemAdd").addEventListener('click', () => {
    let name : string = (<HTMLInputElement> document.getElementById("newItemInput")).value;
    addNewItemToShoppingList(name);
});

let children = document.getElementById("list").children;

for (let index = 0; index < children.length; index++) {
    const element = children[index];
    element.addEventListener("click", () => {HiddenOnClick(<HTMLElement> element)});
}

function addNewItemToShoppingList(itemName : string) {
    let list : HTMLUListElement = <HTMLUListElement> document.getElementById("list");
    let newItem : HTMLLIElement = document.createElement("li");
    newItem.setAttribute("id", `${list.childElementCount}`);
    newItem.setAttribute("class", "unhealthy");
    for (let index = 0; index < healthy.length; index++) {
        if (itemName == healthy[index]) {
            newItem.setAttribute("class", "healthy");
            break;
        }
    }
    newItem.innerText = itemName;
    newItem.addEventListener("click", () => {HiddenOnClick(newItem)});
    list.appendChild(newItem);
}

function HiddenOnClick(e : HTMLElement) {
    e.setAttribute("hidden", "true");
}