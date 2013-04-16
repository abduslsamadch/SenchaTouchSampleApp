/**
 * A simple store that has predefined data. It uses the {@link Example.model.Kitten}
 * model for it's fields definition.
 */
Ext.define('Premio.store.Kittens', {
    extend: 'Ext.data.Store',
    requires: ['Premio.model.Kitten'],

    config: {
        model: 'Premio.model.Kitten',

        data: [
            { name: 'abdus 1', image: '', cuteness: 70 },
			{ name: 'abdus 1', image: '', cuteness: 70 },
			{ name: 'abdus 1', image: '', cuteness: 70 },
			{ name: 'abdus 1', image: '', cuteness: 70 },
			{ name: 'abdus 1', image: '', cuteness: 70 },
			{ name: 'abdus 1', image: '', cuteness: 70 }
//../../resources/images/PizzaDetail.png        
]
    }
});
