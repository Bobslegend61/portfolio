window.addEventListener("load", () => {
    let skillDiv = document.querySelector("#skill .all-skill");
    let contactDiv = document.querySelector("#contact .contact-links");
    fetch("../portfolio/data.json").then(res => res.json()).then(data => {
        data.skills.forEach(skill => {
            let el = document.createElement("div");
            el.className = "skill";
            let img = document.createElement("img");
            img.src = skill.link;
            img.alt = skill.name;
            el.appendChild(img);
            let paragraph = document.createElement("p");
            let text = document.createTextNode(skill.name);
            paragraph.appendChild(text);
            el.appendChild(paragraph);
            skillDiv.appendChild(el);
            console.log(el);
        });
        data.contact.forEach(contact => {
            let div = document.createElement("div");
            let a = document.createElement("a");
            a.href = contact.link;
            a.setAttribute("target", "_blank");
            let icon = document.createElement("i");
            icon.className = contact.font;
            let span = document.createElement("span");
            let text = document.createTextNode(" "+contact.name);
            span.appendChild(text);
            a.appendChild(icon);
            a.appendChild(span);
            div.appendChild(a);
            contactDiv.appendChild(div);
        })
    });
});