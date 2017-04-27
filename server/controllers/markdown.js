import path from 'path';
import fs from 'fs';
import frontmatter from 'front-matter';
import markdown from 'marked';
import yaml from 'js-yaml';

const article = {};

article.parse = () => {

	fs.readFile(path.resolve(__dirname, './dji-sam-soe.md'), 'utf8', (err, data) => {
		if (err) throw err

		let content = frontmatter(data)

		console.log(content.attributes.youtube)

		let embed = '<iframe width="560" height="315" src="'+content.attributes.youtube+'" frameborder="0" allowfullscreen></iframe>'

		console.log(markdown(content.body))

		return markdown(content.body)
	})

}

export default article;
