const getHash = () =>
 location.hash.replace(/#\/([a-z]+[-?'?]?[a-z]+)\/?/, "$1").toLowerCase() || '/'

export default getHash