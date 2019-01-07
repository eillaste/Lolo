// var that = this;
// fetch(`https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss`, {
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json'
// 	}
// }).then(function(response) {
// 	return response.text().then(function(data) {
// 		var users = data;

// 		that.setState({ data: users });

// 	});
// });

// fetch('https://mercury.postlight.com/parser?url=https://flipboard.com/@raimoseero/', {
// 	mode: 'cors',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'x-api-key': 'YBgHyID4pkPx1DPICY0jxf5454ALrZqeKG1m8Elf'
// 	}
// }).then(function(response) {
// 	return response.json().then(function(myJson) {
// 		console.log(myJson);
// 	});
// });

// componentDidMount() {
// 	fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 		mode: 'cors',
// 		headers: {
// 			'Access-Control-Allow-Origin': '*'
// 		}
// 	})
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(function(myJson) {
// 			console.log(JSON.stringify(myJson));
// 		});
// }

// <div>{this.state.flag ? this.state.articles['article 9'].title : 'Loading articles...'}</div>;

// {
// 	this.state.flag
// 		? Object.keys(this.state.articles).map(function(key, index) {
// 				console.log(key);
// 			})
// 		: 'Loading articles...';
// }

//`${key}: ${value.title} ${value.author} ${value.category} ${value.description}`

// {this.state.activeArticle ? (
//     (document.getElementById('article').innerHTML = this.state.currentArticle)
// ) : (
//     (document.getElementById('article').innerHTML = 'bla')
// )}

// eslint-disable-next-line jsx-a11y/anchor-is-valid
// <a
// 	style={{
// 		color: 'inherit',
// 		textDecoration: 'none',
// 		cursor: 'pointer'
// 	}}
// 	key={value.id}
// 	// href={value.url}
// 	// target=""
// 	onClick={() => {
// 		this.fetchArticle(value.url);
// 	}}
// >
// 	<div class="preview">
// 		<p style={{ fontSize: '0.5em' }}>{value.pubDate}</p>
// 		<img src={value.img} width={200} height={140} align="right" />
// 		<h5>{value.title}</h5>
// 		<p class="description" style={{ fontSize: '0.5em' }}>
// 			{value.description}
// 		</p>
// 		<p style={{ fontSize: '0.5em' }}>~ {value.author}</p>
// 	</div>
// </a>
