'use strict';

var SUSHI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACXlBMVEUAAAD9/P3///////////////////////////////////////////////////////////////////////////////////////////////////////////////8NDyP6UqDlW6jfXqrXYa3oWqbPZa/Ca7PKZ7G0cbjzVaOudLrwV6Wodry4cLbbYKvsWKa8brbSZK31VKLGabKPgsSVf8KjeL6dfMADCxyger4rruWHhccDBBiZfcBsktB0js1TndhGo9yBiMg3qeFdmNR6i8tjldJ9isr08vfqUqE+pt//VKX89fr77fYZGCzcV6b5Spz5WqmFfsLjVaTxTp75yeL65PGQeb/HYKzPXqru6fUoqOLWW6gerOW/ZK//V6jy+P00NUapbbfl8vrs3e5SldSadLs1ot7W1tlDnNm3aLLq0Ofao89mjM1xh8r0fbknKDr62Ot8gsbX6vfsw+D3u9voo8/oj8Ow2/Lc2e7f3+JckdHDxMmTisjnb7Lm5u6exujettqwarTYyOQnGTLM1u2icro8PU3F5faW1fJuwurZj8VUVWOyxufLxuTBuN3tsteHn9X2os32kMOUlJ13dYFMIUQ8Gzvu7vCAy+3OrtephMOKh5JERVVVu+ixtN28qdbCnc7Kj8a8vMLWbbL2aa6jpKt/gIqzQH2ertvNzdG/f76zs7rce7lkZXJbXGlNTl2It+KmodOwl81sbHmKNGdaJUxbrOBvndXqe7nKRok9tOdzrd7PfrypcbngT5nXSpF5LVyclc25isWcnKWXOW9mKVOqqrGGks6/QYClPHVxsIpzAAAAHXRSTlMA/gr0zO0ad0mEEDlqI92OwbitozHXUZjlK2BYQSTyX4QAAB+bSURBVHja7JjPT9pgGMdbhQEqisiPoT5/xXbBTMtkunj0QjKypElDmh7gQC81jZFkMWmb4OKRLKlnj7gDJHDayX9r7/O2L6+OLNsc7Yrj07cUvej32+fH+7zCggULFixYsGDBggULFsyIlXQpt7qaLBSSq6u5UnpF+H9YKiUTxUw+viwCYzm+HsturCVzL5aEZ056ZysPP+dlLJvYfSE8V9KJzDL8mnimuF16hjmxuxUHhigrlmHYtt3rkQ/DsHRZhkfks4nSs8qHnQz4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";

module.exports = SUSHI;
//# sourceMappingURL=sushi.png.js.map
