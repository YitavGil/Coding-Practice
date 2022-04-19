const generateParentheses = n => {
    const result = [];

    const generateCombo = (leftPCount, rightPCount, partial) =>{
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) result.push(partial);

        if(leftPCount > 0) generateCombo(leftPCount - 1, rightPCount, partial + '(');
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount - 1, partial + ')');
    }

    generateCombo(n, n, '')
    return result
}