To **set up SASS** in your React application based on the structure I provided, follow these **Ubuntu (Linux) commands**:

---

### **1. Install SASS in Your React App**

```bash
npm install sass
```

---

### **2. Create a SCSS Folder Structure**

```bash
mkdir -p src/assets/styles/components src/assets/styles/pages
```

- `src/assets/styles/` → Main styles directory
- `src/assets/styles/components/` → Styles for individual components
- `src/assets/styles/pages/` → Styles for specific pages

---

### **3. Create Base SCSS Files**

```bash
touch src/assets/styles/global.scss
touch src/assets/styles/variables.scss
touch src/assets/styles/mixins.scss
touch src/assets/styles/components/button.scss
touch src/assets/styles/pages/home.scss
```

---

### **4. Configure Global SCSS in React (`index.tsx`)**

Open `src/index.tsx` and **import** the global SCSS file:

```tsx
import "./assets/styles/global.scss";
```

---

### **5. Example SCSS File Contents**

#### **`variables.scss` (Define Global Variables)**

```scss
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-stack: "Arial", sans-serif;
```

#### **`mixins.scss` (Reusable Mixins)**

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### **`global.scss` (Import Everything)**

```scss
@import "./variables";
@import "./mixins";

body {
  font-family: $font-stack;
  background-color: #f8f9fa;
}
```

#### **`button.scss` (Example Button Style)**

```scss
@import "../variables";

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

---

### **6. Use SCSS in Components**

#### Example: `Button.tsx`

```tsx
import React from "react";
import "./assets/styles/components/button.scss";

const Button = ({ label }: { label: string }) => {
  return <button className="button">{label}</button>;
};

export default Button;
```

---

### **7. Run the App**

```bash
npm start
```

Now your **React project** is set up with **SASS**! 🚀  
Would you like any modifications based on your project needs? 😊
