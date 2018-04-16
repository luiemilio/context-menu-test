# Context Menu Test

Small app to test ctrl+alt+shift keyword combination to open the Context Menu in OpenFin.

```
window.addEventListener('contextmenu', onContextMenu, true);

function onContextMenu(event) {
	if (event.ctrlKey && event.shiftKey && event.altKey) {
		console.log('context menu opened...');
		return;
	}

	event.preventDefault();
}
```

## Get started

1. Clone this repo.
2. `npm install`
3. `npm start`

### Test Context Menu

1. Press ctrl+alt+shift to open the Context Menu.
