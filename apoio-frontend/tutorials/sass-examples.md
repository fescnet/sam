People use **SASS (Syntactically Awesome Stylesheets)** instead of plain CSS because it provides powerful features that make styling more efficient, maintainable, and scalable. Here are some key advantages of using SASS over CSS:

### 1. **Variables**

- SASS allows you to define variables for colors, fonts, spacing, etc., making it easier to maintain consistency.
- Example:
  ```scss
  $primary-color: #3498db;
  body {
    background-color: $primary-color;
  }
  ```

### 2. **Nesting**

- SASS supports nested selectors, reducing the need for repetitive class names.
- Example:
  ```scss
  .navbar {
    background: #333;
    ul {
      list-style: none;
      li {
        display: inline-block;
        a {
          color: white;
        }
      }
    }
  }
  ```

### 3. **Mixins**

- Reusable blocks of CSS that can take arguments, reducing duplication.
- Example:

  ```scss
  @mixin button($bg-color) {
    background: $bg-color;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  .btn-primary {
    @include button(#3498db);
  }
  ```

### 4. **Extends / Inheritance**

- Allows sharing styles between selectors to avoid repetition.
- Example:

  ```scss
  %button-style {
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }

  .btn {
    @extend %button-style;
    background: blue;
  }

  .btn-secondary {
    @extend %button-style;
    background: gray;
  }
  ```

### 5. **Functions & Operators**

- Allows using functions and mathematical operations inside styles.
- Example:
  ```scss
  $base-size: 16px;
  .container {
    width: $base-size * 50;
  }
  ```

### 6. **Modular Architecture (Partials & Imports)**

- SASS allows splitting styles into multiple files (`_header.scss`, `_footer.scss`) and importing them into a main file.
- Example:
  ```scss
  @import "header";
  @import "footer";
  ```

### 7. **Better Maintainability**

- With features like variables, mixins, and partials, SASS makes it easier to manage large stylesheets.

### **Conclusion**

SASS improves CSS by adding features that reduce repetition, improve maintainability, and make stylesheets more readable and scalable. It’s especially useful in large projects or when working in teams. However, it needs to be compiled into standard CSS before being used in the browser.
