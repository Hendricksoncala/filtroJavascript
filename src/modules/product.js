export const getAll = async () => {
    let res = await fetch("")
    let data = await res.json();
    return data;

}