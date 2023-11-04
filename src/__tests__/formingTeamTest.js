import Team from "../formingTeam";

const team = new Team(),
    swordsman = {name: "Swordsman"},
    magician = {name: "Magician"},
    daemon = {name: "Daemon"},
    undead = {name: "Undead"},
    zombie = {name: "Zombie"};

test.each([
    [swordsman, [{name: "Swordsman"}]],
    [magician, [{name: "Swordsman"}, {name: "Magician"}]],
])("Testing add && toArray functions", (object, expected) => {
    team.add(object);
    expect(team.toArray()).toEqual(expected);
});

test("Testing errors in add function", () => {
    expect(() => team.add(swordsman)).toThrow();
});

test("Testing addAll function", () => {
    team.addAll(daemon, undead, magician, zombie); // magician не должен добавиться
    const expected = [{name: "Swordsman"}, {name: "Magician"}, {name: "Daemon"}, {name: "Undead"}, {name: "Zombie"}];
    expect(team.toArray()).toEqual(expected);
});