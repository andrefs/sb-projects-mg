exports.config = {
    project:{
        title         : 'Botões Miguel Gonçalves',
        description   : 'As melhores frases de Miguel Gonçalves!',
        url           : 'http://mg.botoes.co',
        //external_link : 'http://www.facebook.com/brunoaleixo',
        //facebook: {
        //    id: '1016048086'
        //},
        //google: {
        //    id: 'UA-64953131-1'
        //},
        author: 'andré santos',
        publisher: 'botoes.co'
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos <i class="fa fa-envelope"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity',
    toplinks: [
        {
            link: 'http://bussaco.botoes.co',
            title: 'Bussaco'
        },{
            link: 'http://renato.botoes.co',
            title: 'Renato'
        },{
            link: 'http://senhorpe.botoes.co',
            title: 'Senhor Pé'
        },{
            link: 'http://beatriz.botoes.co',
            title: 'Beatriz'
        }
    ]
};
