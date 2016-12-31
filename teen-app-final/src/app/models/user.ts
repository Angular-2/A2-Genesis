export class User {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        passHash: string;
        //profilePictureUrl: string;
        //role: string;

        constructor(firstName: string, lastName: string, username: string, email: string, passHash: string) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.username = username;
                this.email = email;
                this.passHash = passHash;
        }
}