// Reusable function to perform an API call and to handle error

const Fetch = async (url) =>{
    let response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Something went wrong');
    }
    return response;
}

export default Fetch;