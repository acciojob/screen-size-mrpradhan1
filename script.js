//your JS code here. If required.
function updateWindowSize() {
	let sizeElement= document.querySelector('#sizeInfo h1');
	const width = window.innerWidth;
	const height = window.innerHeight;
	sizeElement.textContent = `Width: ${width} and Height: ${height}`;
}
updateWindowSize();
window.addEventListener('resize' , updateWindowSize);

// function updateWindowSize() {
//     const sizeElement = document.querySelector('#sizeInfo h1');
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     sizeElement.textContent = `Width: ${width} and Height: ${height}`;
// }

// // Call the updateWindowSize function initially
// updateWindowSize();

// Update the size whenever the window is resized
window.addEventListener('resize', updateWindowSize);
