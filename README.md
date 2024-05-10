# Netflop - Yet another Netflix clone

> This is just our school project in Web application Programming
> 
> Class: NT109.O21.ANTN
> 
> Group: 6
> 
> Members:
> 
> Nguyễn Đức Luân - 22520825
> 
> Đào Hoàng Phúc - 22521110
> 
> Vũ Ngọc Quốc Khánh - 22520661

## Architect 
![](https://i.imgur.com/EuPfh9P.png)

## Build
1. Clone this repo:
```bash
git clone https://github.com/AnoTherK-ATK/Netflop.git
```
2. Create an account on [TMDB](https://www.themoviedb.org/?language=vi) and get the API key

3. In `/build/js/` folder, create `key.js` file and copy the line below:
```js
export const apiKey = "YOUR API KEY here";
```

4. Run this in terminal
```bash
npm install
npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
```

5. Use Apache or somethings you like to host.
And done. :)

## Backend
Follow to [this repo](https://github.com/whiteshadow0201/Netflop_BE) to use