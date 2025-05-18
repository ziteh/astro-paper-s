---
title: "Code Syntax Highlighter "
subtitle: "Rendering effect display"
date: 2025-05-18T09:00:00+08:00
featured: true
draft: false
tags:
  - docs
  - rendering
categories: ["AstroPaper-S"]
toc: true
comments: false
---

This article provides a simple demo of code block effects and syntax highlighting using the Expressive Code. For more detailed features, please refer to [Expressive Code](https://expressive-code.com/)

## Code

```c
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```

In Markdown:

````md
```c
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```
````

### Title

```c
// file: main.c
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```

In Markdown:

````md
```c
// file: main.c
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```
````

or

````md
```c
// main.c
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```
````

or

````md
```c title="main.c"
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 return 0;
}
```
````

### Markers

```c {3-5, 9}
void do_something() {
    int* data = malloc(SIZE *sizeof(int));
    if (data) {
        parse(data);  
    }
    free(data);
}
 
void parse(int* data) {
    // ... ...
}
```

In Markdown:

````md
```c {3-5, 9}
void do_something() {
    int* data = malloc(SIZE *sizeof(int));
    if (data) {
        parse(data);  
    }
    free(data);
}
 
void parse(int* data) {
    // ... ...
}
```
````

---

```c del={4} ins={5}
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 printf("Hello, Gopher!\n");
 return 0;
}
```

In Markdown:

````md
```c del={4} ins={5}
#include <stdio.h>

int main(void){
 printf("Hello, World!\n");
 printf("Hello, Gopher!\n");
 return 0;
}
```
````

---

```c "return -1.0;"
float cal_bmi(float mass, float height) {
    if (mass <= 0 || height <= 0) {
        return -1.0;
    }
 
    return mass / (height * height);
}
```

In Markdown:

````md
```c "return -1.0;"
float cal_bmi(float mass, float height) {
    if (mass <= 0 || height <= 0) {
        return -1.0;
    }
 
    return mass / (height * height);
}
```
````

### Line Numbers

```c showLineNumbers
void do_something() {
    int* data = malloc(SIZE *sizeof(int));
    if (data) {
        parse(data);  
    }
    free(data);
}
 
void parse(int* data) {
    // ... ...
}
```

In Markdown:

````md
```c showLineNumbers
void do_something() {
    int* data = malloc(SIZE *sizeof(int));
    if (data) {
        parse(data);  
    }
    free(data);
}
 
void parse(int* data) {
    // ... ...
}
```
````

## Terminal

```bash
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```

In Markdown:

````md
```bash
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```
````

### Frame

The comments in the terminal frame will not be copied by the Copy Button.

```bash frame="terminal"
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```

In Markdown:

````md
```bash frame="terminal"
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```
````

---

```bash frame="terminal" title="Getting Started"
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```

In Markdown:

````md
```bash frame="terminal" title="Getting Started"
# Clone a repo
git clone https://github.com/ziteh/astro-paper-s.git
```
````

### Markers

```bash "--frozen-lockfile"
pnpm install --frozen-lockfile
```

In Markdown:

````md
```bash "--frozen-lockfile"
pnpm install --frozen-lockfile
```
````

## More Languages

[list of all language identifiers](https://github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-grammars/README.md)

```c
// C
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

```py
# Python
def main():
  print("Hello, World!")
```

```ts
// TypeScript
const message: string = "Hello, World!";
console.log(message);
```

```go
// Go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

```rust
// Rust
fn main() {
    println!("Hello, World!");
}
```

```yaml
# YAML
app:
  name: AstroPaper-S
  version: "1.0.0"
  debug: true
```

```toml
# TOML
[app]
name = "AstroPaper-S"
version = "1.0.0"
debug = true
```

```json
/* JSON */
{
  "app": {
    "name": "AstroPaper-S",
    "version": "1.0.0",
    "debug": true
  }
}
```

```text
# txt

nam: Hello World!
version: 1.0.0
debug: true
```

```
# no identifier

nam: Hello World!
version: 1.0.0
debug: true
```
