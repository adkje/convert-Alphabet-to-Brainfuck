function butotnClick2(){

     //warukazu,nowcode,yakusuu

  let nyuuryokumoji = document.getElementById("mojinyuuryoku").value;

  var mojicode = [];

  yakusuu = [];

  var kazoeru = 0;

  var tyousei = 0;

  var shuturyoku = [];

  //入力文字のn文字目のコードを取得→配列→表示。
  for (i = 0; i  < nyuuryokumoji.length; i++){  

    var hugou = "+";
  
    var hantaihugou = "-";

    
    code = nyuuryokumoji.charCodeAt(i);

    if (code > 127){
      break;
    };
    
    if (i < 1){
       beforecode  = 0
    }

      
    //ここから
    //前の文字との差を計算
    nowcode = code - beforecode;
    nowcode2 = code - beforecode;

    

    if (nowcode < 0){
      //差を絶対値へ変換
      nowcode = nowcode * -1;
      nowcode2 = nowcode2 * -1;
      var  kazoeru = kazoeru + 1;
    };


    function soinnsuubunnkai(){
       
      //素因数分解
      for(warukazu = 2;(1 < nowcode);warukazu ++){
      
        //指数の計算
        while(nowcode % warukazu === 0){
          nowcode = nowcode / warukazu; 
          yakusuu.push(warukazu);
          //ここまで順調(4)
          //指数がなくなったら次の数へ移行.
          if(!(nowcode % warukazu === 0)){
            break;
          }; 
        };
      };
    };
    soinnsuubunnkai();
        //素因数分解終了
      
      //素数ならばこの処理。
      if (yakusuu.length === 1){

        if (!(nowcode2 === 2)){

          tyousei = tyousei + 1;
          nowcode2 = nowcode2 - 1;
          var nowcode = nowcode2;
          warukazu = 2;
          yakusuu = [];

          soinnsuubunnkai();
        };
      };
      
        //変換後のソースコード記述。
      if (kazoeru === 1){
      hugou = "-";
      hantaihugou = "+"
      var kazoeru = 0;
      };
      
      if (nowcode2 === 0){
        shuturyoku.push(".")
      }

      else if (yakusuu.length === 0){
        shuturyoku.push(hugou + ".");
      };
      
      for (m = 0;m < yakusuu.length;m++){

        if (m === 0){
          if (!(yakusuu.length === 1)){
            shuturyoku.push(">");

          };

          shuturyoku.push(hugou.repeat(yakusuu[0]))

          if (yakusuu.length === 1){
            if (0 < tyousei){
              shuturyoku.push
              (hugou);
              tyousei = tyousei - 1;
            };
            shuturyoku.push(".");
          };
        }

        //else ifで終了するのが考慮されていない。
        else if (m < yakusuu.length - 1) {
          shuturyoku.push
          ("[" + ">" + hugou.repeat(yakusuu[m]));

          if (yakusuu.length === 2){
            shuturyoku.push(".");
          }
        }

        else{
          shuturyoku.push
          ("[" + "<".repeat(m));

          shuturyoku.push
          (hugou.repeat(yakusuu[m]));

          shuturyoku.push
          (">".repeat(m));


          shuturyoku.push
          (hantaihugou + "]" + ("<" + hantaihugou + "]").repeat(m - 1) + "<");

          if (0 < tyousei){
            shuturyoku.push
            (hugou);
            tyousei = tyousei - 1;
          };
          shuturyoku.push(".");
        };
      };
    beforecode = code;
    yakusuu = [];
  };
      //ここまでは大体素因数分解関係。

  //HTMLへ出力
  if (127 > code){

  mojicode.push(code);
  HTMLshuturyoku.innerText = shuturyoku.join("");
  }

  else{
    nyuuryokunaiyou.innerText = "無効です。";
    HTMLshuturyoku.innerText = "";
  };

};
//終わりのかっこ.

function sakujosuru(){
  nyuuryokunaiyou.innerText = "";
  HTMLshuturyoku.innerText = "";
};