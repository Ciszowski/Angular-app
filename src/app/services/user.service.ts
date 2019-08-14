import {User} from '../template/user.modele';
import { Subject } from 'rxjs/Subject';
export class UserService{
    private users: User[] = [
        {
            firstName: "Luna",
            lastName: "Ciszowski",
            email: "Lunita-cocotte@pate.fr",
            drinkPref: "eau",
            hobbies: [
                'Jouer',
                'Faire ses griffes',
                'Manger'
            ]
        },
        {
            firstName: "Luna",
            lastName: "Ciszowski",
            email: "Lunita-cocotte@pate.fr",
            drinkPref: "eau",
            hobbies: [
                'Jouer',
                'Faire ses griffes',
                'Manger'
            ]
        }
    ];
    userSubject = new Subject<any[]>();

    emitSubject(){
        console.log('tableau users emit')
        this.userSubject.next(this.users.slice())
    }

    addUser = (user : User) =>{
        this.users.push(user);
        this.emitSubject();
    }
}