let id: number = JSON.parse(window.localStorage.getItem('_idma') || '0') || 0;
function createId() {
    id++;
    return id;
}
export default createId;