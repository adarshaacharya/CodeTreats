export default function getExtension(language: string) {
    let extension = '';
    switch (language) {
        case 'javascript':
            extension = 'js';
            break;
        case 'python':
            extension = 'py';
            break;
    }

    return extension;
}
