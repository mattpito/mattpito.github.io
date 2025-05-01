window.addEventListener("DOMContentLoaded", () => {
  const username = "mattpito"; // Replace if needed

  const manualRepos = [
    {
      name: "secret-repo",
      url: "#",
      description: "Not-Public-Repo *"
    },
    {
      name: "MairLab_ClinicalDB_Lightsail",
      url: "https://github.com/manthosp/MairLab_ClinicalDB_Lightsail",
      description: "Clinical database/dashboard for multimodal GBM exploration using Django backend and React frontend."
    },
    {
      name: "PTBT",
      url: "https://github.com/manthosp/PTBT",
      description: "Analysis (Genomic Landscape) for Precision Brain Tumour Programme (work pending)."
    }
  ];

  const list = document.getElementById("repo-list");

  fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => res.json())
    .then(repos => {
      const shown = new Set();

      // Add public section title
      const publicHeader = document.createElement("h3");
      publicHeader.textContent = "🔹 Public Repositories";
      list.appendChild(publicHeader);

      repos.forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <span> — ${repo.description || "No description"}</span>
        `;
        list.appendChild(li);
        shown.add(repo.name);
      });

      // Add private/manual section title
      const manualHeader = document.createElement("h3");
      manualHeader.style.marginTop = "2rem";
      manualHeader.textContent = "🔒 Not Public / Manual Repositories";
      list.appendChild(manualHeader);

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
    })
    .catch(err => {
      console.error("GitHub API error:", err);
      const fallback = document.createElement("li");
      fallback.textContent = "Unable to load repositories.";
      list.appendChild(fallback);
    });
});
