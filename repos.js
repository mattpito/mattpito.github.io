const username = "mattpito"; // 🔁 replace with your username

// List your known private repos here
const privateRepos = ["secret-repo", "my-private-analysis"];

const list = document.getElementById("repo-list");

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(res => res.json())
  .then(repos => {
    repos.forEach(repo => {
      const li = document.createElement("li");
      const isPrivate = privateRepos.includes(repo.name);

      li.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <span> — ${repo.description || "No description"} ${isPrivate ? " *" : ""}</span>
      `;

      list.appendChild(li);
    });

    // Add any private repos not shown in the API
    privateRepos.forEach(name => {
      if (!repos.find(r => r.name === name)) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name} *</strong> <span> — Private repository (not visible)</span>`;
        list.appendChild(li);
      }
    });
  });
