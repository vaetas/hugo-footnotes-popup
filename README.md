# Hugo Footnotes Popup

![Demo](demo.gif)

**Hugo Footnotes Popup** is a pure javascript plugin that makes your footnotes opened in popup at the bottom of the page in a panel. It is only 2 KB and can be used on every website that uses Hugo.

To use this plugin you need to download `footnotes.js` file and put following code at the end of your HTML page (inner content will be created in JS):

```html
<div class="bottom-panel" id="bottom-panel">
    <div class="popup-wrapper" id="popup-wrapper"></div> 
</div> 
<script src="./footnotes.js"></script>
```

You can change the visibility of index or close button inside `footnotes.js` file. At the end is main function call. To disable index or close button, set their values to `false`. 

```javascript
footnotePopup(false, false);
```

You can style the popup inside your CSS file. Check the `main.css` file for reference.