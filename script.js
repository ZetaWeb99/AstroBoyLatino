function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }

  document.querySelectorAll('.menu-container').forEach(container => {
    const toggleBtn = container.querySelector('.menu-toggle');
    const menu = container.querySelector('.menu-options');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  });
      // 📌 Menú hamburguesa
    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    }

    document.querySelectorAll('.menu-container').forEach(container => {
        const toggleBtn = container.querySelector('.menu-toggle');
        const menu = container.querySelector('.menu-options');
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    });

    // 📌 Buscador
    const buscador = document.getElementById("buscador");
    const resultados = document.getElementById("searchResults");
    const episodios = Array.from(document.querySelectorAll("#episodiosData div"))
        .map(e => ({ titulo: e.textContent, url: e.dataset.url }));

    buscador.addEventListener("input", function() {
        const filtro = this.value.trim().toLowerCase();
        resultados.innerHTML = "";
        
        if (filtro === "") {
            resultados.style.display = "none";
            return;
        }

        // Filtrado y ordenado (más coincidencias primero)
        const filtrados = episodios
            .filter(ep => ep.titulo.toLowerCase().includes(filtro))
            .sort((a, b) => {
                return a.titulo.toLowerCase().startsWith(filtro) ? -1 : 1;
            });

        if (filtrados.length > 0) {
            filtrados.forEach(ep => {
                const div = document.createElement("div");
                div.classList.add("search-item");
                div.innerHTML = ep.titulo.replace(new RegExp(filtro, "gi"), match => `<span class="resaltado">${match}</span>`);
                div.onclick = () => { window.location.href = ep.url; };
                resultados.appendChild(div);
            });
            resultados.style.display = "block";
        } else {
            resultados.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            resultados.style.display = "none";
        }
    });