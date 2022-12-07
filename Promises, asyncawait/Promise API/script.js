const studentRol=new Promise((resolve, reject) => {
    setTimeout(()=>{
        /**this function will give the value Of tageted studebt Roll number  */
           let RollOffStd=[1,2,3,4,5,6,7,8];
        
            for (let index = RollOffStd[RollOffStd.length-1]+1 ; index <50; index++) {
                RollOffStd.push(index)
                
            }
            
            resolve( RollOffStd)
            
            reject('My name is Noor mohammad ')
      

    },1000)
})


const mybiodata=(gRollOfStudent /* this is First parameter OF ( mybiodata function ) and You can change parameter value  */)=>{
    return new Promise((resolve, reject) => {
        setTimeout((x) => {
           let  bio={
                myname : 'Noor mohammad Patwary ' ,
                age : 25 ,
            }

            resolve(`my name is ${bio.myname } and my age =  ${bio.age } and my roll is =${x} ` )
        }, 1000,gRollOfStudent);
    })
}

studentRol.then(( RollOfStudent)=>{
    document.write(RollOfStudent + "<br>" + "<br>"); /** From here we are gating the Value OF student roll number  */
    mybiodata(RollOfStudent[1] /* this is First Argument OF ( mybiodata function )*/).then((fff)=>{
        document.write(fff + "<br>" + "<br>");
    })

}).catch((x)=>{
    document.write(x + "<br>" + "<br>");
})
