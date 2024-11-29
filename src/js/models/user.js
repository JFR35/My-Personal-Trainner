// User class
export default class User {
    constructor(fullName, email, height, weight, age, username, password) {
        this.fullName = fullName;
        this.email = email;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.username = username;
        this.password = password;
        this.workouts = []; 
    }
}
