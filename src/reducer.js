export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly: null
    // token: "BQCnoScgCqD5WE9c1lORvXRSBJvNH9K5YfNCZRDSqOqP-6y8ooxl_wanPg_tbdIjzxPErWW8Xxm0J7mENNc_cqzjH-2SGK36UW2YMI43zVgHLAsrBVe7i0dmkN8tOF755sSOmZVb951Az0AwZiBrYecZZs59V3E-PtBzs8b1g6MFHGAFXnGlMP6N7B9NSBfc9vNMXplL8l2ReopUbJ8kmEtvlA_V"
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_DISCOVERWEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: return state;
    }
}

export default reducer;