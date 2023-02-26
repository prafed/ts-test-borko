# Eeee B!

1 - ot predi
2 - ot predi
3 - ot predi
4
5
6

Значи за да работи трябва да кажем на браузъра да може да load-va файлове през системата. Това е disable-нато по подразбиране за сигурностни причини.

Ето малко инфо защо:

```
If you’re working on a little front-end project and want to test it locally, you’d typically open it by pointing your local directory in the web browser, for instance entering file:///home/erick/mysuperproject/index.html in your URL bar. However, if your site is trying to load resources, even if they’re placed in your local directory, you might see warnings like this:

XMLHttpRequest cannot load file:///home/erick/mysuperproject/mylibrary.js. Cross origin requests are only supported for HTTP.

Chrome and other modern browsers have implemented security restrictions for Cross Origin Requests, which means that you cannot load anything through file:/// , you need to use http:// protocol at all times, even locally -due Same Origin policies. Simple as that, you’d need to mount a webserver to run your project there.

```

Това което трябва да направиш е да отвориш Chrome с `-allow-file-access-from-files`
На Уиндовс трябва да е нещо такова:

```
 C:\ ... \Application\chrome.exe --allow-file-access-from-files
```

## За да ръннеш:

Изполвам `yarn` за package manager но можеш и с `npm`.

- Единствения пакет който ти трябва е rollup.

Рънни:

```
yarn install
npm install //или това
```

Работи по следния начин:

`yarn build` - TSC компилира TS в JS и го слага в dist/ и rollup бандълва всичко в един файл в public/bundle.mjs

`yarn bundle:esm` - Rollup компилира JS от dist/script.js (като парсва файла и добавя всички останали import-нати) в 1 единствен файл в public/bundle.mjs (MJS е конвенция за ES6 модули)

И щото си на Windows и не искаш пакети за да става всичко автоматично трябва да ръннеш долните 2 скрипта отделно в терминала:
`yarn build:watch` - като горното ама във watch mode (пускаш го това и го оставяш да работи в background)

`yarn bundle:watch` - като горното ама във watch mode (пускаш И ТОВА и го оставяш)

HTML-а load-ва bundle.mjs и се изпълнява.
