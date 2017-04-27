import app from './app';

app.listen(process.env.PORT, () => {
	console.log(process.env.NAME+' Server running at http://localhost:'+process.env.PORT);
});
