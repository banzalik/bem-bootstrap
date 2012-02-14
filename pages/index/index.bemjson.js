({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: 'index.css'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'}
    ],
    content: [{
        block: 'b-layout',
        mods: { type: 'fixed'},
        content: 'b-layout'
    }]
})
