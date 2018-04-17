//event listeners.
document.addEventListener("DOMContentLoaded", () => {
	if (typeof fin != "undefined") {
		fin.desktop.main(onMain);
	} else {
		ofVersion.innerText =
			"OpenFin is not available - you are probably running in a browser.";
	}
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
	const app = fin.desktop.Application.getCurrent();
	fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
	fin.desktop.System.getVersion(version => {
		const ofVersion = document.querySelector("#of-version");
		ofVersion.innerText = version;
	});

	window.addEventListener('contextmenu', onContextMenu, true);
}

function onContextMenu(event) {
	if (event.ctrlKey && event.shiftKey && event.altKey) {
		console.log('context menu opened...');
		return;
	}

	event.preventDefault();
}