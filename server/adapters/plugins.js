// plugins

module.exports = [

    require('inert'), // required for serving static files
    require('vision'),
    {
        register: require('hapi-i18next'),
        options: {
            i18nextOptions: {
                lng: 'en',
                fallbackLng: 'en',
                detectLngFromQueryString: 'lang',
                detectLngFromPath: 0,
                ns: {
                    namespaces: ['common'],
                    defaultNs: 'common'
                },
                resSetPath: '../../locales/__lng__/__ns__.json',
                supportedLngs: ['en', 'zh-HK'],
                preload: ['en', 'zh-HK']
            }
        }
    }

];
