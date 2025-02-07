import { friends, colleagues } from './01-basics'
import { Friend, Colleague } from './myTypes'

function sort<T>(data: T[], criterion: (a: T, b: T) => number): T[] {
    return [...data].sort(criterion);
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
    sort<Colleague>(
        colleagues.current,
        (a, b) => a.contact.extension - b.contact.extension
    )
);
