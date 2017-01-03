import { Task } from './task';

export class Group {
        title: string;
        dateCreated: Date;
        author: string;
        pictureUrl: string;
        children: string[];
        tasks: Task[]

        constructor(title: string) {
            this.title = title;

            this.dateCreated = new Date();
        }
}