//your JS code here. If required.
function updateWindowSize() {
	let sizeElement= document.querySelector('#sizeInfo h1');
	const width = window.innerWidth;
	const height = window.innerHeight;
	sizeElement.textContent = `Width: ${width} and Height: ${height}`;
}
updateWindowSize();
window.addEventListener('resize' , updateWindowSize);

