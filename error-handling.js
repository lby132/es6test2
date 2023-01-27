function readFile(path) {
    throw new Error('파일 경로를 찾을 수 없음');
    return '파일의 내용';
}

function processFile(path) {
    let content = readFile(path);
    try {
        content = readFile(path);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        content = '기본내용';
    } finally {
        console.log('리소스정리')
    }
    const result = 'hi ' + content;
    return result;
}

const result = processFile('경로');
console.log(result);
