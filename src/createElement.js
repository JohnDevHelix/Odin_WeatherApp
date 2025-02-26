export function CreateElement(element, parent, className, type, content) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);

  if (element === "input") {
    newElement.type = type;
  } else if (["h1", "h2", "h3", "p"].includes(element)) {
    newElement.textContent = content;
  }

  return newElement;
}
