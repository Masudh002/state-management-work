export function filterItems(items, query) {
    const lowercaseQuery = query.toLowerCase();
    return items.filter(item =>
        item.name.toLowerCase().includes(lowercaseQuery)
    );
}

export const foods = [
    {
        id: 0,
        name: 'Masudh',
        description: 'Masudh is a frontend engineer proficient in React.'
    },
    {
        id: 1,
        name: 'John',
        description: 'John is a backend developer with expertise in Node.js.'
    },
    {
        id: 2,
        name: 'Jane',
        description: 'Jane is a designer specializing in UI/UX.'
    },
    {
        id: 3,
        name: 'Alice',
        description: 'Alice is a full-stack developer passionate about web technologies.'
    }
];