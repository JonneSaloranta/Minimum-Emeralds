# Tool for villager enchantment trading

This is a tool for villager enchantment trading which shows the best price and best enchants for gear.

It is a web app that runs in the browser. It is written in HTML, CSS, and JavaScript.

<br>

---

<br>

## Usage

1. Open the website.
2. Search the enchantment / category (WIP).
3. Or scroll the website and open any of the categories.

<br>

---

<br>

## Contributing

### Larger changes(html, css, js)

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

### Editing the json file

-   Edit the json file in the browser.
-   Or fork the repo, edit the json file, and create a pull request.

<br>

---

<br>

# Adding a new enchantment

## Template

<br>

```json
{
    "icon": "ICON_TYPE",
    "title": "TITLE_FOR_DISPLAY",
    "enchant":{
        "name": "ENCHANTMENT_NAME",
        "lvl": ENCHANTMENT_LEVEL,
        "cost": ENCANTMENT_COST_IN_EMERALDS
    }
}
```

<br>

---

<br>

### Example

<br>

```json
{
    "icon": "rod",
    "title": "Best fishing rod",
    "enchant": {
        "name": "Lure",
        "lvl": 3,
        "cost": 12
    }
}
```

### Shows the following:

<br>

![image](https://user-images.githubusercontent.com/72470168/189490855-5bcf842d-a43a-42ce-8194-c644b2f8fe01.png)

<br>

---

<br>

### You can add more enchant to the same category by using the same title.

```json
{
    "icon": "rod",
    "title": "Best fishing rod",
    "enchant": {
        "name": "Lure",
        "lvl": 3,
        "cost": 12
    }
},
{
    "icon": "rod",
    "title": "Best fishing rod",
    "enchant": {
        "name": "Mending",
        "lvl": 0,
        "cost": 14
    }
}
```

![image](https://user-images.githubusercontent.com/72470168/189490905-6fabd3e0-3519-4c9b-8098-d337ac2bc04b.png)

<br>

---

<br>

## Values for enchantments

<br>

| ENCHANTMENT | LEVEL | RETURN VALUE                                         |
| ----------- | ----- | ---------------------------------------------------- |
| Protection  | 1     | 1                                                    |
| Protection  | 0     | Will display nothing e.g Mending doesnt have a level |

| ENCHANTMENT | COST | RETURN VALUE                                        |
| ----------- | ---- | --------------------------------------------------- |
| Protection  | 1    | 1                                                   |
| Protection  | >=0  | Will display ' **?** ' e.g the cost is not know yet |

<br>

---

<br>

## Icon types

<br>
 
| ICON-TYPE | ICON                                       | CSS CLASS  |
| --------- | ------------------------------------------ | ---------- |
| helmet    | ![platebody](/img/iron_helmet.png)     | .helmet    |
| platebody | ![platebody](/img/iron_platebody.png)  | .platebody |
| leggings  | ![platebody](/img/iron_leggings.png)   | .leggings  |
| boots     | ![platebody](/img/iron_platebody.png)  | .boots     |
| bow       | ![platebody](/img/iron_boots.png)      | .bow       |
| crossbow  | ![platebody](/img/crossbow.png)        | .crossbow  |
| trident   | ![platebody](/img/trident.png)         | .trident   |
| rod       | ![platebody](/img/rod.png)             | .rod       |
| misc      | ![platebody](/img/enchanted_book.webp) | .misc      |
| sword     | ![platebody](/img/iron_sword.png)      | .sword     |
| tools     | ![platebody](/img/iron_pickaxe.png)    | .tools     |

<br>

## License

[MIT](https://choosealicense.com/licenses/mit/)
