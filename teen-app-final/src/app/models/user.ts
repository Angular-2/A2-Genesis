export class User {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        profilePictureUrl: string;
        createdAt: Date;
        lastUpdated: Date;
        // role: string;

        constructor(firstName: string, lastName: string, username: string, email: string, password: string, profilePictureUrl: string) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.username = username;
                this.email = email;
                this.password = password;
                this.profilePictureUrl = profilePictureUrl;

                this.createdAt = new Date();
                this.lastUpdated = new Date();
        }
}