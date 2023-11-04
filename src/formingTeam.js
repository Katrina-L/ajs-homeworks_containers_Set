export default class Team {
    constructor(){
        this.members = new Set();
    };

    add(character) {
        if ( !this.members.has(character) ) {
            this.members.add(character);
        } else throw `Персонаж ${character} уже есть в команде`;
    };

    addAll( ...characters ) {
        characters.forEach( (character) => {
            if ( !this.members.has(character) ) {
                this.members.add(character);
            }
        } )
    };

    toArray() {
        const teamMembers = Array.from(this.members);
        return teamMembers;
    }
}
