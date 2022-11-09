// const canvas = require('canvas');
const fs = require('fs');
const path = require('path');
const process = require('process');
const exec = require('child_process').exec;

var spawn = require('child_process').spawn;
// main function
async function main() {
    //load classification model
    //await tf.enableProdMode();
    //await tf.setBackend('tensorflow');
    //await tf.ENV.set('DEBUG', false);
    //await tf.ready();
    //model =  await tf.loadModel(modelpath);

    //https://indesire.tistory.com/159
    //python 로드

    // python3라는 명령어로 두번째 인자값에 있는 파일을 실행하겠다는 겁니다.
    // python 파일에서 print를 하면 그 print된 text가 chunk에 담겨져 나오게 됩니다. 
    // 이걸 이용, 가공해서 쓰시면 되겠습니다. node.js에서 프로세스로 실행시킨
    // 이 파이썬 파일은 네이버 실시간 검색어를 크롤링하는 파이썬 파일입니다.
    // 해당 크롤링 데이터 JSON형태로 출력시키게 해놓았습니다.
    // 만약 해당 routing 경로로 호출하게 된다면
    

    let argument = [[160, 145, 176, 164, 112, 72, 176, 176]];

    // import python code
    const pythonClassification = exec('python3', ['-c', `import model; model.pose_classification(${argument});`]);
    console.log(pythonClassification);

    pythonClassification.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    pythonClassification.on('exit', (code) => {
        console.log(`Classification process ended with code`);
    });

    //const res = model.execute(img.tensor);

    /*
    $.ajax({
        type: "POST",
        url: "~/model_classification.py",
        data: { param: text}
      }).done(function( o ) {
         
    });
    */
    
}

main();