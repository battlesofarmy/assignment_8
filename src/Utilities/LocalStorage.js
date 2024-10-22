
const getStoredJobApplication = () =>{
    const storeJobApplicaions = localStorage.getItem('readbooks');
    if(storeJobApplicaions){
        return JSON.parse(storeJobApplicaions);
    }
    return [];
}

const saveJobApplication = id =>{
    const storeJobApplicaions = getStoredJobApplication();
    const exists = storeJobApplicaions.find((jobId => jobId === id));

    if(!exists){
        storeJobApplicaions.push(id);
        localStorage.setItem('readbooks', JSON.stringify(storeJobApplicaions));
    }
}


export {saveJobApplication};





const wishList = () =>{
    const storeJobApplicaions = localStorage.getItem('wishlist');
    if(storeJobApplicaions){
        return JSON.parse(storeJobApplicaions);
    }
    return [];
}

const wishListBooks = id =>{
    const storeJobApplicaions = wishList();
    const exists = storeJobApplicaions.find((jobId => jobId === id));

    if(!exists){
        storeJobApplicaions.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storeJobApplicaions));
    }
}

export {wishListBooks};
