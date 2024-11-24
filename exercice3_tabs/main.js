function showTab(tabName) {
    // Masquer tous les contenus
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Cacher tous les onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('tab-active'));

    // Afficher le contenu du tab sélectionné
    const activeContent = document.querySelector(`.${tabName}`);
    activeContent.classList.add('active');

    // Ajouter la classe 'tab-active' à l'onglet sélectionné
    const activeTab = document.querySelector(`.tab-${tabName}`);
    activeTab.classList.add('tab-active');
  }