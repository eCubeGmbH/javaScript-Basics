
const app = {
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex < this.teams.length
                    ? { value: this.teams[nextIndex++], done: false }
                    : { done: true };
            },
        };
    },
};

const iterator = app[Symbol.iterator]();


for (const team of app) {
    console.log(team);
}