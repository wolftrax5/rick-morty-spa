import getData from '../utils/getData';

const characterCard = (character) => `
<article class="Characters-item hover-shadow">
    <a href="#/${character.id}">
        <img src="${character.image}" alt="${character.name}" >
        <h2>${character.name}</h2>
    </a>
</article>
`;

const Home = async () => {
    const characters =  await getData();

    const view =`
    <div class="Characters">
        ${characters.results.map(characterCard).join('')}
    </div>
    `;
    return view
};

export default Home;
