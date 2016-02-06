// plugins

module.exports = [

    require('inert'), // required for serving static files
    require('vision'),
    {
        register: require('hapi-i18next'),
        options: {
            i18nextOptions: {
                lng: 'en-US',
                fallbackLng: 'en-US',
                detectLngFromQueryString: 'lang',
                detectLngFromPath: 0,
                ns: {
                    namespaces: ['common'],
                    defaultNs: 'common'
                },
                resSetPath: '../../locales/__lng__/__ns__.json',
                supportedLngs: ['en-US', 'zh-HK'],
                preload: ['en-US', 'zh-HK']
            }
        }
    }

];
