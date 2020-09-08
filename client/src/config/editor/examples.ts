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

        case 'cpp':
            template = `#include<iostream>\n\nusing namespace std;\n\tint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}\n
            `;
    }
    return template;
}
