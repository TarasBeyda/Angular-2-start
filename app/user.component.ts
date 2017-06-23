import { Component } from '@angular/core';
import { PostsService } from './services/posts.service'

@Component({
    moduleId: module.id,
    selector: 'user-comp',
    templateUrl: `templates/user.component.html`,
    providers: [PostsService]
})

export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Taras Beyda';
        this.email = 'tarasbeyda@gmail.com';
        this.address = {
            street: 'Kolomuiska',
            city: 'Lviv',
            state: 'Suhiv'
        };
        this.hobbies = ['Programming', 'Sport', 'Music'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;

    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}