function createHeader(headerTitle, loginText) {
    const header = document.createElement('header');
    

    const titleElement = document.createElement('h1');
    titleElement.innerText = headerTitle; 
    titleElement.classList.add('title');

  
    const login_text = document.createElement('a');
    login_text.innerText = 'Login';
    login_text.classList.add('login_text');
    login_text.setAttribute('href', 'http://127.0.0.1:5500/index2.html');

  
    header.appendChild(titleElement);
    header.appendChild(login_text);
    
    document.body.appendChild(header);
}

createHeader('Lorem ipsum dolor ', 'Login');


function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const section = document.createElement('section');
    section.classList.add('section');

    const box_top = document.createElement('div');
    box_top.classList.add('box-top');

    const title_text = document.createElement('h3');
    title_text.innerText = 'Hello world';
    title_text.classList.add('title-text');

    const text = document.createElement('p');
    text.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum a, sit animi qui officia possimus dolorum, numquam impedit corrupti velit, quod id dolores eveniet ipsa cumque repellat nobis porro reiciendis.';
    text.classList.add('text');

    const box_bottom = document.createElement('div');
    box_bottom.classList.add('box-bottom');

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const in_footer_box = document.createElement('div');
    in_footer_box.classList.add('in-footer-box');

    const text_footer = document.createElement('span');
    text_footer.innerText = 'Lorem dolor amet sit';
    text_footer.classList.add('text-footer');



    main.appendChild(navbar);
    box_top.appendChild(title_text);
    box_top.appendChild(text);
    section.appendChild(box_top);
    section.appendChild(box_bottom);
    footer.appendChild(in_footer_box);
    in_footer_box.appendChild(text_footer);
    section.appendChild(footer);
    main.appendChild(section);
    document.body.append(main);

    return { navbar, in_footer_box };
}


function createMenu(navbar, arr) {
    const header = document.createElement('header');
    const ul = document.createElement('ul');
 
    arr.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.innerText = link.text;
        a.setAttribute('href', link.href);
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
}

const links = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Gallery', href: '#'}
];

const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
];

const { navbar, in_footer_box } = createMain();
createMenu(navbar, links);   
createMenu(in_footer_box, footerLinks); 



