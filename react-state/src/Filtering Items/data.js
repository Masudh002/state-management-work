export function filterItems(items, query){
    query = query.toLowerCase();
    return items.filter (item =>
        item.name.split('').some(word =>
            word.toLowerCase().startswith(query)
            ));
}

export const foods = [
    {
     id:0,
     name:'Masudh',
     description:'masudh is a frontend engineer proficient in react '
    },
    {
        id:1,
        name:'Masudh',
        description:'masudh is a frontend engineer proficient in react '
    },
    {
        id:2,
        name:'Masudh',
        description:'masudh is a frontend engineer proficient in react '
    },
    {
        id:3,
        name:'Masudh',
        description:'masudh is a frontend engineer proficient in react '
    }

]