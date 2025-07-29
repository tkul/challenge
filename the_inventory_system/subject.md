# **Subject: The Inventory System**

**Level:** Beginner
**Language:** HTML, CSS, JavaScript
**Allowed external functions/libraries:** None (Vanilla JS only)
**Estimated Time:** \~6–8 hours

---

## **Goals**

The goal of this project is to build a simple, interactive **inventory management system** for a webpage.
You will practice:

* Structuring content with **HTML**.
* Styling with **CSS** (basic layout + hover effects).
* Manipulating the DOM dynamically with **JavaScript** (adding/removing items).

By completing this project, you will create an inventory interface that feels like it belongs in a small RPG game.

---

## **Instructions**

* You must work inside **three files**: `index.html`, `style.css`, `script.js`.
* No external frameworks (Bootstrap, jQuery, React, etc.). **Pure HTML/CSS/JS only**.
* The webpage should **display an inventory** and allow the user to:

  * Add new items.
  * Remove items individually.
* Keep your code clean, readable, and properly indented.

---

## **Mandatory Part**

Your program **must** include:

1. **An Inventory Section**

   * A container (`<div>`) with a title (e.g., "Inventory").
   * A list (`<ul>`) with at least **2 default items** inside (e.g., "Sword", "Shield").

2. **Add Item Feature**

   * An `<input>` field to type the name of a new item.
   * A button labeled **"Add"** that inserts the new item into the list.
   * New items must appear dynamically without refreshing the page.

3. **Remove Item Feature**

   * Each item in the list must include a **"Remove" button** (`X`).
   * Clicking the button removes that specific item from the list.

4. **Basic Styling**

   * Use **CSS** to style the inventory (background, borders, fonts, spacing).
   * Items should be visually distinct (e.g., colored blocks).
   * Buttons should have **hover effects**.

5. **Input Validation**

   * Prevent adding empty items (ignore or show an alert if the field is blank).

---

## **Bonus Part**

For extra points:

* **Persistence:** Use `localStorage` to save items so they remain after refreshing.
* **Categories:** Add item categories (Weapons, Potions, Armor) using a `<select>` dropdown.
* **Capacity Limit:** Add a max capacity (e.g., 10 items) and display a warning when reached.
* **Animations:** Use CSS transitions for smooth adding/removing effects.
* **Keyboard Support:** Pressing **Enter** should add the item without clicking the button.

---

## **Expected Output**

When opened in a browser:

* The page displays a styled **inventory box** with a few default items.
* The user can **type an item name** and click **"Add"** to insert it into the list.
* Each item can be **removed** by clicking its remove button.
* The page **updates dynamically** without reloading.

---

## **Example Preview**

*(for inspiration — your design can differ)*

**Initial State:**

```
Inventory:
[ Sword    (X) ]
[ Shield   (X) ]
[ + Add Item Input ] [Add Button]
```

**After Adding "Potion":**

```
Inventory:
[ Sword    (X) ]
[ Shield   (X) ]
[ Potion   (X) ]
[ + Add Item Input ] [Add Button]
```

---

## **Submission & Evaluation**

* Submit your project as a **folder** containing:

  * `index.html`
  * `style.css`
  * `script.js`
* Your code will be evaluated on:

  * Functionality (does everything work as expected?)
  * Code quality (readable, clean, commented).
  * Design & usability (does it look and feel nice?).