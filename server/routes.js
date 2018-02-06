import express from 'express';
import resource from './controllers/resource';
import dropboxClient from './controllers/dropbox';

const routes = express();

routes.get('/dropbox', (req, res) => {
	dropboxClient.list('/')
		.then(contents=>{
			let contents = contents.entries;
			let folders = contents.filter(file => file['.tag'] === 'folder');
			let files = contents.filter(file => file['.tag'] === 'file');
			console.log('folders', folders);
			console.log('files', files);
		})
		.catch(err=>{
			console.log(err);
		});
	res.send('dropbox...');
});

routes.get('/settings', (req, res) => {
	let file = 'settings.yaml';
	resource.sync(file)
		.then(result=>{
			// sync complete
			console.log('sync complete',result);
		})
		.catch(err=>{
			// failed somewhere
			console.log('sync error',err);
		});
	res.send('settings...');
});

routes.get('/file/md', (req, res) => {
	let file = 'behind-the-scenes/dji-sam-soe.md';
	resource.sync(file);
	res.send('file/md...');
});

routes.get('/file/img', (req, res) => {
	let file = 'behind-the-scenes/dji-sam-soe-images/download-0.jpg';
	resource.sync(file);
	res.send('file/img...');
});

export default routes;
