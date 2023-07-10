function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data="Hello World !"
            resolve(data)
        }, 1000);
    })
}

async function main(){
    try{
    const data= await fetchData();
    console.log(data);
    }
    catch(error) {
        console.log(error);
}
}

main()
console.log("Hello World in main")