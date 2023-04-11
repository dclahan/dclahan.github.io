
const linksList = document.querySelector('.link-list');
const setupLinks = (data) => {
    if (data.length) {
        let innerHTML = "";
        data.forEach(doc => {
            const link = doc.data();
            if (link.title.length){
                const inner = `
                    <li><a href="${link.url}">${link.title}</a></li>
                `; 
                innerHTML += inner;
            }
        });
        if (innerHTML.length){
            linksList.innerHTML = innerHTML;
        } else {
            linksList.innerHTML = `
            <li><a href="/">Nothing to see here!</a></li>
            `;
        }
    } else {
        linksList.innerHTML = `
        <li><a href="https://youtu.be/gqXHRgZDYkc">Nothing to see here!</a></li>
        `;
    }   
};