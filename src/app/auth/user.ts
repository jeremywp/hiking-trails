export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    completed?: Array<string>;
    interested?: Array<string>;


}
