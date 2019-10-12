const cache = {};

function importBaseComponents(r) {
    r.keys().forEach(key => cache[key] = r(key));
}

export default importBaseComponents(require.context('./', false, /\.js$/));
