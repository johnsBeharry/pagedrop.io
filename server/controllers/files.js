import fs from 'fs-extra';
import path from 'path';

/**
 * Return directory name
 */
const getDirName = file_path=>{
	let site_path = process.env.SITE;
	let full_path = './'+site_path+'/'+file_path;
	return path.dirname(full_path);
};

/**
 * Return file name
 * @param {string} file - a path ending with a file
 * @todo write logic
 */
const getFileName = file_path=>{
	return path.basename(file_path);
}

/**
 * Return file type
 * @param {string} file - file relative to the site folder
 * @todo write logic
 */
const checkType = file_path=>{

};

/**
 * Write file to system
 * @param {string} file - file relative to the site folder
 * @param {object} data - data to write to the file
 */
const save = (file, data)=>{
	let dir = getDirName(file);
	let file_name = getFileName(file);
	return new Promise(function(resolve, reject) {
		fs.ensureDir(dir, err=>{
			if (err) reject(err);
			fs.writeFile(dir+'/'+file_name, data, err=>{
				if (err) reject(err);
				else resolve(data);
			})
		})
	})
}

/**
 * Read file from file system
 * @param {string} file - file relative to the site folder
 * @todo write logic
 */
const read = file=>{

}

const files = {
	getDirName,
	getFileName,
	checkType,
	save,
	read
}

export default files
