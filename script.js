const library=[
    {
    title:'the road ahead',
    author:'bill Gate',
    status:{
        own:true,
        reading:true,
        read:false,
    },
},
{
    title:'steve jobs',
    author:'walter Isaacson',
    status:{
        own:true,
        reading:false,
        read:false,

    },
},
{
    title:'mocking Jay',
    author:'Syzanne Collins',
    status:{
        own:true,
        reading:false,
        read:true,
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