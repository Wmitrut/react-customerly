var customerly = require('./src/react-customerly');

module.exports = {
	customerly: {    
        initialize: function initialize(app_id, mWidget, attachments, screenshot, lang) {
            customerly(app_id, mWidget, attachments, screenshot, lang);
        }
	}
};