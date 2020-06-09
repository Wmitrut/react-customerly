<p align="center">
 <img src="logo.png" width="150">
</p>
<h1> React Customerly</h1>
A simple react library to configure Customerly on your app in a simple way

![Version 1.1.1](https://img.shields.io/badge/Version-2.0.0-brightgreen)

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

customerly.initialize("app_id",{ widget_position: "right" ,widget_color:'FF00FF'});

```

 `app_id`: Stands for the ID (project ID or App ID) provided by Customerly to config the Live Chat on your website -  *(the only required param)*.

### Other params:

You can easily control all the other params like position and color of the widget and any other supported param from Customerly as well.


To learn more about the custom params, access the link:

- [How to control the live chat widget custom features](https://docs.customerly.help/api/how-to-control-the-live-chat-widget-custom-features) of Customerly docs.
