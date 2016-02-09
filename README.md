# I.B.A
## Images to Base64 to ASCII
Just a node tool to get any images ( except for animated gifs ) into it's ASCII version.

The name is related to the way the url is handled, it first turn it into a base64 string, then the base64'ed image is processed by [JSCII](https://github.com/EnotionZ/jscii).

And you can get a curstom ascii output if you ever want to embed it somewhere on the internet.

### Usage
- clone
- npm install 
- node index.js

### Parameters
to get the perfect ASCII image, you can pass some parameters to the URL

`?u=<value>&s=<value>&c=<value>&fs=<value>&ls=<value>&fw=<value>&lh=<value>&ff=<value>
`

| parameters    | description         | required   | default  |
| ------------- |:--------------------|:----------:|:---------|
| u             | Image url           | yes        | none     |
| c             | ascii colored or b&w| no         | `true`   |
| s             | ascii output size   | no         | `100`    |
| fs            | ascii font size     | no         | `9px`    |
| ls            | ascii letter spacing| no         | `-1px`   |
| fw            | ascii font weight   | no         | `bold`   |
| lh            | asii line height    | no         | `0.49`   |
| ff            | ascii font-family   | no         | `courier`|


### :cow: :shit:
Made by a gitch. 

http://bullg.it