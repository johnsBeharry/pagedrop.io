import fs from 'fs';

import dropboxClient from './dropbox';
import files from './files';

/**
 * Download from dropbox and write to file system
 * @constructor
 * @param {string} resource - path relative to site folder.
 * @todo: validation for path param. look into lodash
 * @todo: return promise
 */
const sync = resource=>{
	return new Promise((resolve,reject)=>{
		dropboxClient.download(resource)
			.then(data=>{
				files.save(resource, data.fileBinary)
					.then(saved=>{
						// file saved
						resolve(saved);
					})
					.catch(err=>{
						// writing file failed
						reject(err);
					});
			})
			.catch(err=>{
				// download failed
				reject(err);
			});
	});
};

const resource = {
	sync
};

export default resource;
