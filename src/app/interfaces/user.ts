export interface User {
    profilePicture: Picture;
    id?: number;
    username?: string;
    password?: string;
    grantType?: string;
    refreshToken?: string;
}
