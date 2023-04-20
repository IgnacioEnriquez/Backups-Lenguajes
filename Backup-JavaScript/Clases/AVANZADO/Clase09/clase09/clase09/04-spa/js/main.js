const mainElement = document.querySelector('main');

const getIdFromHash = () => {
    const defaultPage = 'inicio';
    let id = location.hash.slice(1);
    if (id[0] === '/') {
        id = id.slice(1);
    }
    return id || defaultPage;
};

const getUrlFromId = id => `partials/${id}.html`;

const init = () => {
    loadDefaultPage();
};

const loadDefaultPage = () => {
    const id = getIdFromHash();
    console.log(id);
};

init();
