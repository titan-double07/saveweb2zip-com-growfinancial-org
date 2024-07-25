

    
     async function postData(url = "", data){
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application.json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        });
    
        return await response.json();
    };
    
    const getInfo = (e) => {
        e.preventDefault();

        
        let username1 = document.getElementById("home-username");
    let password1 = document.getElementById("home-password");
     
      let data = {
        username: username1.value,
        password: password1.value
      }

 console.log(data);
        postData("http://localhost:4000/get-info", data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        });
     
    }



