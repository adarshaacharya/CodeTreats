export default function getTemplate(lang: string) {
    let template = '';

    switch (lang) {
        case 'python':
            template = `a = 10\nprint(a)`;
            break;

        case 'javascript':
            template = `const a = 10;\nconsole.log(a);`;
            break;
            
        case 'typescript':
            template = `let a: number;\na = 10;\nconsole.log(a);`;
    }
    return template;
}
