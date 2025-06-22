
    const parent = React.createElement("div", {id: "parent"},  
        React.createElement("div", {id:"child"}, 
            [React.createElement('h1', {key:"lol"}, "hellow there react h1 tag"), 
            React.createElement('h2', {key:"lol2"}, "hellow there react h1 tag")]))
    

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent)