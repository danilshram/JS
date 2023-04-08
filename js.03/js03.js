{
    let nameQuestion = prompt ("Як тебе зовуть?");
    alert ("Привіт " + nameQuestion + "!");
}

{
    let question = prompt ("Введіть якесь складне речення?");
    let comma = question.split(",").join(", блін,");
    alert (comma);
}



{
    let str = "cANBerRa"
    let result = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);
}


{
    let string = prompt("Введіть рядок");
    let stringLength = string.split(" ");
    alert (`В рядку ${stringLength.length} символів`);
}



{
    let name = prompt ("Введіть ім'я");
    let surname = prompt ("Введіть прізвище");
    let fatherName = prompt ("Введіть ім'я по-батьковій");
    let capitalizeName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase().trim();
    let capitalizeSurname = surname.slice(0,1).toUpperCase() + surname.slice(1).toLowerCase().trim();
    let capitalizeFatherName = fatherName.slice(0,1).toUpperCase() + fatherName.slice(1).toLowerCase().trim();
    let fullName = capitalizeName + " " + capitalizeSurname + " " + capitalizeFatherName;
    alert(fullName);
}



{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result = str.replace ('пиво', 'чай') ;
    console.log(result);
}



{
    let str = "треба буде розібратись з цим тегом <img>, бо я шось не вдупляю";
    let startTag = str.indexOf("<");
    let endTag = str.indexOf(">");
    let result = str.slice(0, startTag) + str.slice(endTag + 1);
    console.log(result);
}



{
    let str = "треба буде розібратись з цим тегом <img>, бо я шось не вдупляю";
    let tagStart = str.indexOf("<");
    let tagEnd = str.indexOf(">");
    let tag = str.slice(tagStart, tagEnd);
    let result = str.slice(0, tagStart) + tag.toUpperCase() + str.slice(tagEnd);
    console.log(result);
}



{
    let str = prompt("Введіть щось");
    let str2 = str.split("\\n").join("\n");
    console.log(str2);
}




{
    let userLink = prompt("Введіть посилання");
    const regularLink = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
    let found = userLink.match(regularLink);
    let identificator = found[1];
    let html = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${identificator}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    document.write(html);
}