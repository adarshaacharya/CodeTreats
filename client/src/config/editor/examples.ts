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
            break;

        case 'c':
            template = `#include <stdio.h>\n\nint main() {\n\tint a = 10;\n\tprintf("%d", a);\n\treturn 0;\n}\n`;
            break;

        case 'cpp':
            template = `#include<iostream>\n\nusing namespace std;\n\nint main() {\n\tint a = 10;\n\tcout << a;\n\treturn 0;\n}\n
            `;
            break;

        case 'go':
            template = `package main\n\nimport (\n\t"fmt"\n)\n\nfunc main() {\n\tvar a = 10;\n\tfmt.Println(a)\n} `;
            break;

        case 'java':
            template = `class main {\n\tpublic static void main(String[] args) {\n\t\tint a = 10;\n\t\tSystem.out.println(a);\n\t}\n} `;
            break;

        case 'csharp':
            template = `using System;\nclass MainClass {\n\tstatic void Main(){\n\t\tint a = 10;\n\t\tConsole.WriteLine(a);\n\t}\n}`;
            break;
    }
    return template;
}
