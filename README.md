# onetrust-cookie-banner

CSS styling for OneTrust cookie banners

## Viewing the banner(s)

I use the VScode extension [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to view the banner(s) in the browser.

## CSS variables (subject to change)

The banner will attempt to grab these from the current page it is sat on. Otherwise it wil use the default values.

```css
--cookie-banner-background-color: #fff;

/* Accept button */
--cookie-accept-background-color: #23085a;
--cookie-accept-background-hover-color: #16043b;
--cookie-accept-font-size: 16px;

/* Reject button */
--cookie-reject-background-color: #23085a;
--cookie-reject-background-hover-color: #23085a;
--cookie-reject-font-size: 16px;

/* Cookie settings button */
--cookie-settings-color: #23085a;
--cookie-settings-hover-color: #23085a;
--cookie-settings-background-color: transparent;
--cookie-settings-background-hover-color: #eee;
--cookie-settings-border-color: #23085a;
--cookie-settings-border-width: 2px;
--cookie-settings-font-size: 16px;

/* Banner title */
--cookie-title-color: #23085a;
--cookie-title-font-size: 32px;

/* Banner body text */
--cookie-description-color: #54565a;
--cookie-description-font-size: 18px;
```
