class LifReader {
    static read(result, cols, rows, gridCells) {
        const res = result.split("\n");

        const refX = cols/2;
        const refY = rows/2;
        let x = 0;
        let y = 0;

        for (let i = 0; i < res.length; i++) {
            const tokens = res[i].split(" ");

            if (tokens[0].startsWith("#")) {
                if (tokens[0].startsWith("#P")) {
                    // it's coordinates
                    x = refX + parseInt(tokens[1]);
                    y = refY + parseInt(tokens[2]);
                }
            } else {
                // it's cells
                const cells = tokens[0];
                let copyX = x;
                for (let i = 0; i < cells.length; i++) {
                    if (i !== 0) copyX++;

                    if (cells.charAt(i) === '*') {
                        // alive
                        gridCells[y][copyX].alive = true;
                    }

                    if (i === cells.length - 1) y++;
                }
            }
        }

    }
}