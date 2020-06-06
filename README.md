<p align="center">
 <img src="logo.png" width="150">
</p>
<h1> React Customerly</h1>
A simple react library to configure Customerly on your app in a simple way

# Installation
```bash
npm install react-customerly --save
```

or 

```bash
yarn add react-customerly --save
```

# Use / Example
```javascript
import { customerly } from 'react-customerly';

customerly.initialize(app_id, mWidget, attachments, screenshot, lang);
```
- `app_id`: Stands for the ID (project ID or App ID) provided by Customerly to config the Live Chat on your website.

- `mWidget`: If you want to have your widget on the mobile version, you have to provide this boolean flag.

- `attachments`: Another boolean flag. It's intended to active the attachment feature to your chat.

- `screenshot`: Other boolean flag that controls the availability of the attachment feature.

- `lang`: It's where you control which language your live chat will be - the available ones are:  `'it'|'en'|'fr'|'es'`

---
<br>
You can learn more from [How to control the live chat widget custom features
](https://docs.customerly.help/api/how-to-control-the-live-chat-widget-custom-features) of Customerly docs.