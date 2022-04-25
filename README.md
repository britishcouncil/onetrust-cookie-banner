# onetrust-cookie-banner

CSS styling for OneTrust cookie banners

## Viewing the banner(s)

I use the VScode extension [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to view the banner(s) in the browser.

## CSS variables (subjet to change)

The banner will attempt to grab these from the current page it is sat on. Otherwise it wil use the default values.

```css
--cookie-banner-background-color: #000;

/* Accept button */
--cookie-accept-background-color: #ff0000;
--cookie-accept-hover-background-color: #b30000;
--cookie-accept-font-size: 40px;

/* Reject button */
--cookie-reject-background-color: #b3ff00;
--cookie-reject-hover-background-color: #89c203;
--cookie-reject-font-size: 12px;

/* Cookie settings button */
--cookie-settings-color: blue;
--cookie-settings-hover-color: #b30000;

/* Banner title */
--cookie-title-color: orange;
--cookie-title-font-size: 80px;

/* Banner body text */
--cookie-description-color: purple;
--cookie-description-font-size: 40px;
```
