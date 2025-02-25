export function CreateElement(element, parent, className, type, content) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);

  if (element === "input") {
    newElement.type = type;
  } else if (element === "p" || element === "h1") {
    newElement.textContent = content;
  }

  return newElement;
}
