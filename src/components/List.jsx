export default function List({ items, keyProp, displayProp, linkProp, renderItem, className, itemClassName }) {
    // items: tableau d'objets à afficher
    // keyProp: clé unique pour chaque élément (ex: "id")
    // displayProp: propriété de l'objet à afficher (ex: "name")
    // linkProp: propriété de l'objet contenant le lien (ex: "path")
    // renderItem: fonction optionnelle pour le rendu personnalisé de chaque élément
    // className: classes CSS pour la liste
    // itemClassName: classes CSS pour chaque élément de la liste
    
    return (
        <ul className={className}>
            {items.map((item) => (
                <li key={item[keyProp]} className={itemClassName}>
                    {renderItem ? (
                        renderItem(item)
                    ) : (
                        <a href={item[linkProp]}>{item[displayProp]}</a>
                    )}
                </li>
            ))}
        </ul>
    );
}