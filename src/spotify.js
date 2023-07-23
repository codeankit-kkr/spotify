

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientId = "c4c87d96151d481fbf02ab96bd160d78";

const scopes = [
    'user-read-private user-read-email',
    "playlist-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state"

]

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;