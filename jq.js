$(
    function () {
        const obj = {
            nev:"Jakab"
        };
        const articleELEM=$("article");
        articleELEM.append("<h1>JQuery-vel írtam bele!</h1>");
        articleELEM.on("click", function() {
            console.log("article-re kattintottam")
            console.log($(event.target))
        }
        );
    }
)