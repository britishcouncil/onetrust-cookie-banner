# onetrust-cookie-banner

CSS styling for OneTrust cookie banners

## Viewing the banner(s)

I use the VScode extension [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to view the banner(s) in the browser.

## CSS variables (subject to change)

The banner will attempt to grab these from the current page it is sat on. Otherwise it wil use the default values.

```css
--cookie-banner-background-color:

/* Accept button */
--cookie-accept-background-color:
--cookie-accept-hover-background-color:
--cookie-accept-font-size:

/* Reject button */
--cookie-reject-background-color:
--cookie-reject-hover-background-color:
--cookie-reject-font-size:

/* Cookie settings button */
--cookie-settings-color:
--cookie-settings-hover-color:

/* Banner title */
--cookie-title-color:
--cookie-title-font-size:

/* Banner body text */
--cookie-description-color:
--cookie-description-font-size:
```
