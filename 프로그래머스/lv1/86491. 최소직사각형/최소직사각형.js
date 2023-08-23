function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (const size of sizes) {
        const [w, h] = size;
        maxWidth = Math.max(maxWidth, Math.max(w, h)); // 가로 길이 선택
        maxHeight = Math.max(maxHeight, Math.min(w, h)); // 세로 길이 선택
    }

    const walletSize = maxWidth * maxHeight;
    return walletSize;
}