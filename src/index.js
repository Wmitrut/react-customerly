var customerly = require('./react-customerly');

function initialize(app_id, mWidget, attachments, screenshot, lang) {
	customerly(app_id, mWidget, attachments, screenshot, lang);
}

module.exports = initialize;