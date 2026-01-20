
        // creating the obnject 
        const studentBioData={
            firstName:"ganesh",
            lastName:"Pathak",
            age:20,
            address:"Doti",
            gender:"Male",
            course:["Java","python","SQL","ERP"]

        };
        
        // accessing the html by its id
        document.getElementById("addBtn").addEventListener("click",()=>{
            addTodoList();

        });

        document.getElementById("getBtn").addEventListener("click",()=>{
            getTodoList();

        });

         document.getElementById("removeBtn").addEventListener("click",()=>{
            removeTodoList();
        });

        const addTodoList=()=>{
            localStorage.setItem("objectData",JSON.stringify(studentBioData));
        };

        const  getTodoList=()=>{
           const studentDatas= JSON.parse(localStorage.getItem("objectData"));
           console.log(studentDatas);
        };

        const removeTodoList=()=>{
            const deleteData=localStorage.removeItem("objectData");
            console.log("the deleted data is ",deleteData);
        };



    