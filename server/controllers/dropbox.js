import Dropbox from 'dropbox';

const client = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

/**
 * Lists a file or folder tree
 * @constructor
 * @param {string} path - path relative to site folder.
 * @todo: validation for path param. look into lodash
 */
const list = path => {
    return client.filesListFolder({ path: '/'+process.env.SITE+'/'+path });
};

/**
 * Download a file from Dropbox.
 * @constructor
 * @param {string} path - path relative to site folder.
 * @todo: validation for path param. look into lodash
 */
const download = path => {
	return client.filesDownload({ path: '/'+process.env.SITE+'/'+path });
};

const dropbox = {
	client,
	download,
	list
};

export default dropbox;
