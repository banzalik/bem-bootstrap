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
        content: [{
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            },{
                elem: 'span',
                elemMods:{ size: '1'},
                content: '1'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '4'},
                content: '4'
            },{
                elem: 'span',
                elemMods:{ size: '4'},
                content: '4'
            },{
                elem: 'span',
                elemMods:{ size: '4'},
                content: '4'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '4'},
                content: '4'
            },{
                elem: 'span',
                elemMods:{ size: '8'},
                content: '8'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '6'},
                content: '6'
            },{
                elem: 'span',
                elemMods:{ size: '6'},
                content: '6'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '12'},
                content: '12'
            }]
        }]
    },
    {
        block: 'b-layout',
        mods: { type: 'fixed'},
        content: [
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '4'},
                content: '4'
            },{
                elem: 'span',
                elemMods:{ size: '4'},
                mix: [
                    {
                        block: 'b-layout',
                        elem: 'offset',
                        elemMods:{ size: '4'}
                    }
                ],
                content: '4 offset 4'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '3'},
                mix: [
                    {
                        block: 'b-layout',
                        elem: 'offset',
                        elemMods:{ size: '3'}
                    }],
                content: '3 offset 3'
                },
                {
                elem: 'span',
                elemMods:{ size: '3'},
                mix: [
                    {
                        block: 'b-layout',
                        elem: 'offset',
                        elemMods:{ size: '3'}
                    }
                ],
                content: '3 offset 3'
            }]
        },
        {
            elem: 'row',
            content: [{
                elem: 'span',
                elemMods:{ size: '4'},
                mix: [
                    {
                        block: 'b-layout',
                        elem: 'offset',
                        elemMods:{ size: '8'}
                    }],
                content: '8 offset 4'
                }]
        }]
    },
    {
        block: 'b-layout',
        mods: { type: 'fixed'},
        content: [{

            content: [{
                elem: 'span',
                elemMods:{ size: '12'},
                content: [{
                    tag: '',
                    content:'1'
                },{
                    elem: 'row',
                    content: [{
                        elem: 'span',
                        elemMods:{ size: '6'},
                        content: 'Level 2'
                    },{
                        elem: 'span',
                        elemMods:{ size: '6'},
                        content: 'Level 2'
                    }]
                }]
            }]
        }]
    },
    {
        block: 'b-layout',
        mods: { type: 'fluid'},
        content: {
                 elem: 'row',
                 elemMods: { type: 'fluid'},
                 content: [{
                     elem: 'span',
                     elemMods:{ size: '2'},
                     content: 'Sidebar content'
                 },{
                     elem: 'span',
                     elemMods:{ size: '10'},
                     content: 'Body content'
                 }]
        }
    }]
})
