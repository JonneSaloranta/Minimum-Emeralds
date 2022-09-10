document.onload = init();

function init() {
    data = getEnchants();

    const divEnchants = document.querySelector(".enchants");

    let sets = [];

    data.then((data) => {
        const enchants = data.enchants;
        let categoryElement = document.createElement("div");
        let titleElement = document.createElement("h2");

        for (let enchant of enchants) {
            let enchantIcon = enchant.icon;
            let enchantTitle = enchant.title;
            let parsedTitle = enchantTitle.replace(" ", "").toLowerCase();
            if (!arrayContains(sets, enchantTitle)) {
                sets.push(enchantTitle);
            }
        }

        for (let set of sets) {
            for (let enchant of enchants) {
                if (enchant.enchant.lvl <= 0) enchant.enchant.lvl = "";
                if (enchant.enchant.cost <= 0) enchant.enchant.cost = "?";
                if (enchant.title == set) {
                    // create a new category element
                    if (enchant.title != titleElement.textContent) {
                        categoryElement = createCategoryElement(enchant.title);
                        titleElement = createTitleElement(
                            enchant.title,
                            enchant.icon
                        );
                        appendChildren(categoryElement, [titleElement]);
                    }

                    // create a new book element
                    const bookElement = createBookElement(
                        enchant.enchant.name,
                        enchant.enchant.lvl,
                        enchant.enchant.cost
                    );

                    // append the book element to the category element
                    appendChildren(categoryElement, [bookElement]);

                    appendChildren(divEnchants, [categoryElement]);
                }
            }
        }
        addClickListener();
    });
}

function createBookElement(name, lvl, cost) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    const enchantmentName = document.createElement("p");
    const enchantmentCost = document.createElement("p");

    enchantmentName.classList.add("enchantment-name");
    enchantmentName.textContent = `${name} ${lvl}`;

    enchantmentCost.classList.add("cost");
    enchantmentCost.classList.add("emerald");
    enchantmentCost.textContent = `${cost}`;

    appendChildren(bookElement, [enchantmentName, enchantmentCost]);

    return bookElement;
}

function createTitleElement(title, category) {
    const titleElement = document.createElement("h2");
    titleElement.classList.add("category-title");
    titleElement.classList.add(category);
    titleElement.textContent = title;
    return titleElement;
}

function createCategoryElement(category) {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.classList.add("toggle");
    categoryElement.setAttribute("tabindex", "0");
    return categoryElement;
}

function appendChildren(parent, children) {
    children.forEach((child) => {
        parent.appendChild(child);
    });
}

function getParentElement(element) {
    return element.parentElement;
}

function arrayContains(array, value) {
    return array.indexOf(value) > -1;
}

function getEnchants() {
    return fetch("/Enchantments.json")
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

function addClickListener() {
    const toggleElements = document.querySelectorAll(".toggle");
    toggleElements.forEach((toggleElement) => {
        toggleElement.addEventListener("click", () => {
            const children = toggleElement.children;
            for (let child of children) {
                if (child.classList.contains("book")) {
                    child.classList.toggle("active");
                }
            }
        });
    });
}

document.addEventListener("keyup", detectTabKey);

function detectTabKey(e) {
    if (e.keyCode == 9) {
        toggleOthersOff();
        tabSelected = document.activeElement;
        if (tabSelected.classList.contains("toggle")) {
            const children = tabSelected.children;
            for (let child of children) {
                if (child.classList.contains("book")) {
                    child.classList.add("active");
                }
            }
        }
    }
}

function toggleOthersOff() {
    const toggleElements = document.querySelectorAll(".toggle");
    toggleElements.forEach((toggleElement) => {
        const children = toggleElement.children;
        for (let child of children) {
            if (child.classList.contains("book")) {
                child.classList.remove("active");
            }
        }
    });
}
