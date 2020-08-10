export default function getTemplate(lang: string) {
    let template = '';

    switch (lang) {
        case 'python':
            template = `print('Hello world in Python')`;
            break;

        case 'javascript':
            template = `console.log('Hello world in JS')`;
            break;
    }
    return template;
}
