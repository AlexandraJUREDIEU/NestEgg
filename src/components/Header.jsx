import List from "./List"


export default function Header (){
    // State (état, données)
    const linksNav = [
        {id: 1, name: 'Concept', path: '#concept'},
        {id: 2, name: 'Qui sommes nous?', path: '#about-us'},
        {id: 3, name: 'Tarifs', path: '#price'},
        {id: 4, name: 'Connexion', path: '#connect'},
    ];
    
       
    // Comportements
    // Affichage (render)
    return (<>
        <img src="https://placehold.co/150x150" alt=""></img>
        {/* <List/> */}
        <List
        items={linksNav}
        keyProp="id"
        displayProp="name"
        linkProp="path"
    />
        <p>header</p>

    </>)
}