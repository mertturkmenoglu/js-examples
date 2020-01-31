window.onload = () => {
    const BASE_URL = "https://api.github.com/users/";
    const checkBtn = window.document.getElementById('check-btn');
    const usernameField = document.getElementById('username');

    checkBtn.addEventListener('click', () => {
        const username = usernameField.value;
        const url = BASE_URL + username + "/repos?per_page=1000";
        (async function() {
            const response = await fetch(url);
            const json = await response.json();
            writeToPage(json);
        })().catch(err => console.error(err));
    });
}


function writeToPage(json) {
    const container = document.getElementById('repo-container');
    for (let repo of json) {
        const r = document.createElement('div');
        const a = document.createElement('a');
        const link = document.createTextNode(repo.name);

        a.appendChild(link);
        a.title = repo.name;
        a.href = repo.html_url;
        r.appendChild(a);
        r.appendChild(document.createElement('p'));

        const star = document.createTextNode('Star Count: ' + repo.stargazers_count);
        r.appendChild(star);
        r.appendChild(document.createElement('p'));

        const watch = document.createTextNode('Watchers: ' + repo.watchers_count);
        r.appendChild(watch);
        r.appendChild(document.createElement('p'));

        const forks = document.createTextNode('Forks: ' + repo.forks_count);
        r.appendChild(forks);
        r.appendChild(document.createElement('p'));

        const lang = document.createTextNode('Language: ' + repo.language);
        r.appendChild(lang);
        r.appendChild(document.createElement('p'));

        if (repo.license) {
            const license = document.createTextNode('License: ' + repo.license.name);
            r.appendChild(license);
            r.appendChild(document.createElement('p'));
        }

        r.appendChild(document.createElement('hr'));

        container.appendChild(r);
    }
}