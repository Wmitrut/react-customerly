<p align="center">
 <img src="logo.png" width="150">
</p>
<h1> React Customerly</h1>
A simple react library to configure Customerly on your app in a simple way

![Version 1.1.1](https://img.shields.io/badge/Version-1.1.1-brightgreen)

# Installation
```bash
npm install react-customerly --save
```

or 

```bash
yarn add react-customerly
```

# Use / Example
```javascript
import { customerly } from 'react-customerly';

customerly.initialize(app_id);
```
- `app_id`*: Stands for the ID (project ID or App ID) provided by Customerly to config the Live Chat on your website -  *(*required*).

### Other params:

- `mobile`: If you want to hide(false) or show(true) it your widget on the mobile version, you have to provide this boolean flag - **true** as default.

- `attachments`: Another boolean flag. It's intended to active the attachment feature to your chat - **false** as default.

- `screenshot`: Other boolean flag that controls the availability of the attachment feature - **false** as default.

- `lang`: It's where you control which language your live chat will be - the available ones are:  `'it'|'en'|'fr'|'es'`- **`en`** as default.

- `visible`: Controls the visibility of the widget - **true** as default.

- `color`: Customize the color based on your app theme, you can use `HEX` colors without the `#` on the string.

- `position`: Controls which side the widget will appear in your page.

---
<br>

You can learn more from [How to control the live chat widget custom features](https://docs.customerly.help/api/how-to-control-the-live-chat-widget-custom-features) of Customerly docs.
