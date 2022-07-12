## react-cookie-gpdr
🍪 Beautiful and customizable react cookie consent widget for your applications

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/clementdlc)

![enter image description here](https://i.imgur.com/zEKpOfG.png)
___

## :cloud: Installation

```shell  
npm install react-cookie-gpdr
```  

## :rocket: Props

| Props | Description | Default value
|-----|----------------------------|---------------| 
|`location` | Widget position (bottom left or bottom right) | "left"
|`color` | Color scheme of the widget | "#bb2030"
|`policyLink`|URL of your policy Link | /
|`policyLinkText`|URL of your policy Link | "Read the privacy policy"
|`title`|Widget title|"This website"
|`subtitle`|Widget subtitle|"use Cookies"
|`text`|Widget text content|"We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy."
|`rejectButtonText`|Widget reject button|"Reject All"
|`acceptButtonText`|Widget accept button|"Accept All"
|`cookieSecurity`|Cookie security (true if you use https)|true
|`hideOnScrollDown`|Automaticaly hide and accept on scroll down|false
|`onAccept`|On Accept All function| void
|`onReject`|On Reject All function| void
___  

## :computer: Development

```shell  
npm run storybook
```  

This will start Storybook process.

To view the Storybook, go to `http://localhost:6006` in your browser.

## :mag_right: Credits

react-cookie-gpdr is a library of  [Clément de Louvencourt](https://github.com/c-delouvencourt)

**Special thanks to:**

- *Your name here ?*
