function useLocalStorage() {
    function getParsedData(item){
        return JSON.parse(localStorage.getItem(item))
    }
    function setParsedData(item, value) {
        localStorage.setItem(item, JSON.stringify(value))
    }
    return {getParsedData, setParsedData}
}
export { useLocalStorage }