const library=[
    {
        title:'the road ahead',
        author:'bill gate',
        status:{
            own:true,
            reading:true,
            read:false,
        },
    },
    {
        title:'Steve jobs',
        author:'walter Isaacson',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title:'Mocking jay',
        author:'Suzzane Collins',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },

];

library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const{title:firstbook}=library[0]
console.log(firstbook);

const libraryJSON=JSON.stringify(library);
console.log(libraryJSON);