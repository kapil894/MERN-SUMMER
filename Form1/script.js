// const handleSubmit=(e)=>{
//     e.preventDefault();
//     const event=e.target;
//     const FirstName=event[0].value;
//     const LastName=event[1].value;
//     const Email=event[2].value;
//     const dob=event[3].value;
//     const gender=event[4].value;
//     const contact=event[5].value;
    
//     if(isValidate(FirstName,LastName,Email,dob,gender,contact)){
//         const form=document.getElementsByClassName('form-container');
//         form.style.display='none';

//         const root=document.getElementsById('root');
//         root.style.display='block';
//         root.innerHTML=`
//         <h3 class='name'>"First Name: "${FirstName}<h3>
//         <h3 class='last'>"Last Name: "${LastName}<h3>
//         <h3 class='Email'>"Last Name: "${Email}<h3>
//         <h3 class='last'>"Date of Birth: "${dob}<h3>
//         <h3 class='Gender'>"Gender: "${gender}<h3>
//         <h3 class='Contact'>"Contact: "${contact}<h3>
//         `
//     }
// }
// const isValidate=(f,l,e,d,g,c)=>{
//    let isValid=true;
//    const phonePattern = /^[0-9]{10}$/;

//    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

//    document.getElementById('firstnameError')='';
//    document.getElementById('lastnameError')='';
//    document.getElementById('emailError')='';
//    document.getElementById('dobError')='';
//    document.getElementById('firstnameError')='';
//    document.getElementById('genderError')='';
//    document.getElementById('contactError')='';

//    if(f.trim()===''){
//     document.getElementById('firstnameError').textContent="Enter Name";
//     isValid=false;
//    }

//    if(l.trim()===''){
//     document.getElementsById('lastnameError').textContent='Enter LastName';
//     isValid=False;
//    }

//    if(!emailPattern.test(e)){
//     document.getElementById('emailError').textContent='Enter Valid email';
//     isValid=false;
//    }

//    if(d.trim()===''){
//     document.getElementById('dobError').innertext='Enter DOB';
//     isValid=false;
//    }

//    if(!g){
//     document.getElementById('genderError').innerText='Gender Required';
//     isValid=false
//    }
    
//    if(!phonePattern.text(c)){
//     document.getElementById('contactError').innerText='Enter valid Contact Number';
//     isValid=false;
//    }

//    return isValid;

// }
const handleSubmit = (e) => {
    e.preventDefault();
    const event = e.target;
    const firstName = event[0].value;
    const lastName = event[1].value;
    const email = event[2].value;
    const dob = event[3].value;
    const gender = document.querySelector('input[name="gender"]:checked');
   

    const genderValue = gender ? gender.value : '';

    if (isValidate(firstName, lastName, email, dob, genderValue)) {
        const form = document.getElementsByClassName('form-container')[0];
        form.style.display = 'none';

        const root = document.getElementById('root');
        root.style.display = 'block';
        root.innerHTML = `
            <h3 class='name'>First Name: ${firstName}</h3>
            <h3 class='last'>Last Name: ${lastName}</h3>
            <h3 class='Email'>Email: ${email}</h3>
            <h3 class='dob'>Date of Birth: ${dob}</h3>
            <h3 class='Gender'>Gender: ${genderValue}</h3>
           
        `;
    }
};

const isValidate = (f, l, e, d, g) => {
    let isValid = true;
    const phonePattern = /^[0-9]{10}$/;


    document.getElementById('firstnameError').textContent = '';
    document.getElementById('lastnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';


    if (f.trim() === '') {
        document.getElementById('firstnameError').textContent = 'Enter Name';
        isValid = false;
    }

    if (l.trim() === '') {
        document.getElementById('lastnameError').textContent = 'Enter Last Name';
        isValid = false;
    }

    if (!emailPattern.test(e)) {
        document.getElementById('emailError').textContent = 'Enter a Valid Email';
        isValid = false;
    }

    if (d.trim() === '') {
        document.getElementById('dobError').textContent = 'Enter DOB';
        isValid = false;
    }

    if (g.trim() === '') {
        document.getElementById('genderError').textContent = 'Gender Required';
        isValid = false;
    }

    

    return isValid;
};
