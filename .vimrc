let $PATH = './node_modules/.bin:' . $PATH
let g:used_javascript_libs = 'react'
let g:neomake_jsx_enabled_makers = ['standard']
let g:neomake_javascript_enabled_makers = ['standard']
autocmd BufNewFile,BufEnter src/**/*.js setlocal filetype=javascript.jsx
