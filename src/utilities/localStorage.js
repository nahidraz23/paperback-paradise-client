const getBookInfo = () => {
    const storedBookInfo = localStorage.getItem('mark-as-read');
    if(storedBookInfo){
        return JSON.parse(storedBookInfo);
    }
    return [];
}

const saveBookInfo = id => {
    const storedBookInfo = getBookInfo();
    const exist = storedBookInfo.find(bookId => bookId === id);
    if(!exist){
        storedBookInfo.push(id);
        localStorage.setItem('mark-as-read', JSON.stringify(storedBookInfo));
    }
}

export{getBookInfo, saveBookInfo};