const mix = require('laravel-mix')

mix.setPublicPath('public')
mix.sass('assets/scss/app.scss', 'public/css/app.css')
mix.js('index.js', 'public/js/app.js')
