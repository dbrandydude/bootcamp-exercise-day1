function AndelaFellow(firstName, lastName, age, gender, skill) {
    let getFullName = (a, b) => {
        let names =  [a, b];
        return names.join(' ');
    };

    this.name = getFullName(firstName, lastName);
    this.age = age;
    this.gender = gender;
    this.skills = skill;
    this.bio = `Hi, my name ${this.name} ${this.age}years old, ${this.gender}. I love ${this.skills}`;



    this.changeName = function(firstName, lastName) {
        let names =  [firstName, lastName];
        this.name = names.join(' ');
    };

    this.setSkills = function(skills) {
        if (arguments) {
            let skillsList = [];
            for (let skill of arguments) {
                skillsList.push(skill);
            }
            this.skills = skillsList.join(', ');
        }
    };
}
