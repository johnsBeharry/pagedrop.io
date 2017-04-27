import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import resources from './resources'

/**
 Get the settings file
 */
const settings = () => {
	let settings_file = resources.get('settings.yaml');
	let settings_obj = yaml.safeLoad(settings_file, 'utf8');
	return settings_obj;
}

const site = {
	settings
};

export default site;
