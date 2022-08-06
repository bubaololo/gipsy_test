let mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
mix.js('src/js/app.js', 'js');
mix.sass('src/sass/app.scss', 'css');


mix.setPublicPath('dist');

mix.webpackConfig({
    plugins: [
        // Создаем svg-спрайт с иконками
        new SVGSpritemapPlugin(
            'src/icons/*.svg', // Путь относительно каталога с webpack.mix.js
            {
                output: {
                    filename: 'images/icons.svg', // Путь относительно каталога public/
                    svg4everybody: false, // Отключаем плагин "SVG for Everybody"
                    svg: {
                        sizes: false // Удаляем инлайновые размеры svg
                    },
                    chunk: {
                        keep: true, // Включаем, чтобы при сборке не было ошибок из-за отсутствия spritemap.js
                    },
                    // svgo: {
                    //     plugins : [
                    //         {
                    //             'removeStyleElement': false // Удаляем из svg теги <style>
                    //         },
                    //         {
                    //             'removeAttrs': {
                    //                 attrs: ["fill", "stroke"] // Удаляем часть атрибутов для управления стилями из CSS
                    //             }
                    //         },
                    //     ]
                    // },
                },
                sprite: {
                    prefix: 'icon-', // Префикс для id иконок в спрайте, будет иметь вид 'icon-имя_файла_с_иконкой'
                    generate: {
                        title: false, // Не добавляем в спрайт теги <title>
                    },
                },
            }
        ),


    ],
})