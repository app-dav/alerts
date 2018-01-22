import { Observable } from "rxjs/Observable";


export class Subscription{
    constructor()
    {
    }

    public name : string;

    public url : string

    public description : string

    public categories : Observable<string>
    
    public Priority : PriorityLevels    
}