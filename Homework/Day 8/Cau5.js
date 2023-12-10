console.log('-----Câu 5-----');

function insertString(s1, s2, p) {
    let s2Start = s2.slice(0, p-1);
    let s2End = s2.slice(p-1);

    console.log(s2Start.concat('', s1).concat('', s2End));
}

insertString('000', 'abc', 2);
insertString('000', 'abc', -100);
insertString('000', 'abc', 100);