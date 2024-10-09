
function createHeader(arr) {
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    const home_text = document.createElement('a');

    home_text.innerText = 'Home';
    home_text.setAttribute('href', 'https://tatev55.github.io/Project1/');
    home_text.classList.add('btn');

   
    arr.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.innerText = link.text;
        a.setAttribute('href', link.href);
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.classList.add('navbar');

    header.appendChild(navbar);
    navbar.appendChild(ul);
    header.appendChild(home_text);
    document.body.appendChild(header);
}



const links = [
    { text: 'About', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Contact', href: '#' }
];


createHeader(links);


function createFormLogin(){
    const form = document.createElement('form');
    const input_user = document.createElement('input');
    const input_password = document.createElement('input');
    const button = document.createElement('button');

    form.classList.add('login_form');
    input_user.type = 'text';
    input_user.placeholder = 'User name';
    input_user.classList.add('input_user');
    input_password.type = 'password';
    input_password.placeholder = 'password';
    input_password.classList.add('input_user');
    button.classList.add('btn_login');
    button.innerText = 'Login';

    button.addEventListener('click', function(){
        const user = input_user.value;
        const password = input_password.value;

        if(user === '' || password === ''){
            alert('Please fill in all fields');
        }else{
            alert('Login successful');
        }
        user = '';
        password = '';

        
    });

    form.appendChild(input_user);
    form.appendChild(input_password);
    form.appendChild(button);
    document.body.appendChild(form);
    
}

createFormLogin();


