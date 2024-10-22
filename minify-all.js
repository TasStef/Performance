const { glob } = require('glob');
const { exec } = require('child_process');

glob('**/*.js', { ignore: '**/*.min.js' }, (err, files) => {
    if (err) {
        console.error('Error finding files:', err);
        return;
    }

    files.forEach(file => {
        const minifiedFile = file.replace('.js', '.min.js');
        exec(`terser ${file} -o ${minifiedFile} --compress --mangle`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error minifying ${file}:`, err);
                return;
            }
            console.log(`Minified ${file} to ${minifiedFile}`);
        });
    });
});
