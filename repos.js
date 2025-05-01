const username = "mattpito"; // Replace with your GitHub username

const manualRepos = [
  {
    name: "secret-repo",
    url: "#",
    description: "Not-Public-Repo *"
  },
  {
    name: "MairLab_ClinicalDB_Lightsail",
    url: "https://github.com/YOUR_USERNAME/MairLab_ClinicalDB_Lightsail",
    description: "Clinical database for multimodal GBM exploration."
  },
  {
    name: "PTBT",
    url: "https://github.com/YOUR_USERNAME/PTBT",
    description: "Analysis for Precision Brain Tumour Programme (work pending)."
  }
];

const list = document.getElementById("repo-list");

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(res => res.json())
  .then(repos => {
    const shown = new Set();

    // Public repos from GitHub API
    repos.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <span> — ${repo.description || "No description"}</span>
      `;
      list.appendChild(li);
      shown.add(repo.name);
    });

    // Manual entries
    manualRepos.forEach(repo => {
      if (!shown.has(repo.name)) {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${repo.url}" target="_blank">${repo.name}</a>
          <span> — ${repo.description}</span>
        `;
        list.appendChild(li);
      }
    });
  });
