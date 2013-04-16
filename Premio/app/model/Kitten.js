Ext.define('Premio.model.Kitten', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            "name",
            "image",
            { name: "cuteness", type: 'int' }
        ]
    }
});
