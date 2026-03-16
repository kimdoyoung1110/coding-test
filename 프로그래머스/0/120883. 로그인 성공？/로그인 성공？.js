function solution(id_pw, db) {
    const name = id_pw[0];
    const password = id_pw[1];
    
    for (let i = 0;i<db.length;i++){
        if (name === db[i][0]){
            if (password === db[i][1])
                return "login"
            else
                return "wrong pw"
        }
    }
    return "fail"
}