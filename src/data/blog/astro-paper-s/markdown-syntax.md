---
title: "Markdown Syntax"
subtitle: "Rendering effect display 👍"
date: 2024-09-28T12:08:01+08:00
updated: 2025-05-18T09:00:00+08:00
featured: true
draft: false
tags:
  - docs
  - rendering
categories: ["AstroPaper-S"]
toc: true
comments: false
math: true
---

Basic Markdown syntax example, from [markdown-it demo](https://markdown-it.github.io/).

<!-- more -->

Heading:

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

# Emphasis

🚧❌🌐🖥️✔️🛒

**This is bold text**

_This is italic text_

**_bold + italic_**

~~Strikethrough~~

# Blockquotes

> **bold text**  
> ~~strikethrough~~  
> `code`  
> [link](https://github.com/ziteh/astro-paper-s)  
>
> Blockquotes can also be nested...  
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

# Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
    1. Ac tristique libero volutpat at
    2. Facilisis in pretium nisl aliquet
    3. Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

or

1. You can use sequential numbers...
1. ...
1. ...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

Indent

1. Git clone

   ```bash
   git clone https://github.com/ziteh/astro-paper-s.git
   ```

2. Install package

   ```bash
   pnpm install
   ```

3. Run!

   ```bash
   pnpm run dev
   ```

# Code

Inline `code`

```text
Sample text here...
```

Syntax highlighting

```js
// JaveScript
var foo = function () {
  console.log("Hello World");
};

foo();
```

```c
// C
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```

```rust
// Rust 🚀
fn main() {
    println!("Hello, world!");
}
```

```bash
this is a very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong command
```

# Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

# Links

[link text](https://github.com/ziteh/astro-paper-s)

[ref link][link1]

[link1]: https://github.com/ziteh/astro-paper-s

# Images

![ErgoSNM Keyboard](https://imgur.com/hzSMu2A.jpg)

Like links, Images also have a footnote style syntax

![Calcite Keyboard][myimg]

With a reference later in the document defining the URL location:

[myimg]: https://imgur.com/0LeJ65r.jpg

# Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote text

[^second]: Footnote text

# KaTex

Inline: $2^{16} \times \frac{2}{\beta}$

Block:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$

---

# Typography

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sollicitudin eros, non malesuada dolor. Duis bibendum eros ac tellus imperdiet semper. Aenean **sodales mauris** sed vulputate tempus. Morbi eget diam eleifend ipsum sollicitudin consectetur ac nec turpis. [Nam luctus][gh] mi faucibus, tincidunt nisi a, maximus neque.[^fn1]

[^fn1]: Phasellus volutpat nulla sapien.

Pellentesque eu eros est. Donec ac quam sed felis eleifend egestas ac non orci. Curabitur metus enim, rutrum et nunc vel, volutpat iaculis turpis. _Vivamus_ ornare sollicitudin dui non posuere. Curabitur at dui vel urna `scelerisque` rutrum ut ac augue. Ut bibendum urna quis urna fringilla ultrices.

## Vestibulum

Morbi interdum ipsum magna, et ullamcorper tortor dapibus eu. Donec commodo tristique felis non luctus. Donec vel tempor diam. Phasellus ac nulla et erat [vehicula pulvinar][gh]. Curabitur ac nunc iaculis augue pellentesque consequat id eget justo. Fusce tempor fermentum tellus et dignissim.

## Mauris

Nulla interdum, augue nec lobortis scelerisque, est nunc malesuada augue, at consectetur neque turpis nec tellus. Donec quis ligula in tellus tempor **_porttitor eu quis lorem_**. Vivamus ac interdum purus, eget congue ex. Curabitur at placerat nisl (Etiam nec metus feugiat), eget semper sapien.

Cras placerat augue eu nunc ~~scelerisque~~, ac sagittis justo euismod. Vestibulum nec magna in erat interdum sagittis et eget dui. [Aliquam placerat][gh], orci sed sollicitudin commodo, eros libero mollis sapien, a egestas turpis mauris nec sem. Curabitur non sodales massa.

### Morbi Rutrum Libero

Morbi ultrices nunc ipsum, ut gravida odio laoreet vitae. Quisque ut ornare libero, ut iaculis magna. Nulla in arcu bibendum, faucibus turpis in, egestas nisl. Fusce a accumsan ligula, ut suscipit velit. Duis auctor egestas dui eget efficitur. Proin egestas porttitor leo, eu varius felis consequat in. In congue mauris non tellus pretium posuere.

## Vestibulum

Ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In gravida, nunc sit amet suscipit viverra, turpis massa porttitor quam, in fringilla erat ante ut turpis.

### Nunc Et Pretium Velit

Ut aliquet fringilla dolor eu vehicula. Phasellus vel dui finibus, euismod augue eu, mollis magna. Sed ullamcorper dictum nunc sit amet lacinia. Nullam in est orci. Mauris hendrerit mauris sit amet volutpat aliquam. Vivamus in ante ut ligula fermentum mattis id tempor purus. Duis euismod porttitor elit, eu hendrerit est vehicula a. Sed ac quam tincidunt, commodo eros non, laoreet diam. Nulla in pulvinar justo. Praesent et purus orci.

[gh]: https://github.com/ziteh/astro-paper-s
