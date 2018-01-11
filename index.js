const app = "I don't do much.";

const token = '500d3ed05a180c646085866b831e8c255da66f49'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
