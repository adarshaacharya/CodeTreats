export default function getTemplate(lang: string) {
    let template = '';

    switch (lang) {
        case 'python':
            template = `print('Hello world in Python')`;
            break;

        case 'javascript':
            template = `console.log('Hello world in JS')`;
            break;
        case 'typescript':
            template = `let a: number;\na= 10;\nconsole.log(a);`;
    }
    return template;
}
