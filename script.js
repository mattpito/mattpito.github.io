const username = "mattpito";
document.getElementById("username").textContent = `${username}'s GitHub Portfolio`;

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const repoList = document.getElementById("repo-list");

    repos.forEach(repo => {
      const desc = repo.description?.toLowerCase() || "";
      let category = "all";
      if (desc.includes("[archived]")) category = "archived";
      else if (desc.includes("[research]")) category = "research";
      else if (desc.includes("[script]")) category = "scripts";

      const div = document.createElement("div");
      div.className = `repo ${category}`;
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description"}</p>
      `;
      repoList.appendChild(div);
    });

    setupTabs();
  });

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const repos = document.querySelectorAll(".repo");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      repos.forEach(repo => {
        repo.style.display = tab === "all" || repo.classList.contains(tab) ? "block" : "none";
      });
    });
  });

  document.querySelector('[data-tab="all"]').click();
}
